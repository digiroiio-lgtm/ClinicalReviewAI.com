// Post-build verification: starts `next start`, crawls every route and checks SEO / YMYL invariants.
// Usage: npm run build && npm run check:links
import { spawn } from "node:child_process";

const PORT = process.env.CHECK_PORT || "3111";
const BASE = `http://localhost:${PORT}`;
const ORIGIN = "https://clinicalreviewai.com";
const INDEXABLE = ["/", "/what-is-clinical-review", "/ai-clinical-review", "/medical-necessity-review", "/prior-authorization-review", "/use-cases", "/ai-clinical-review-software", "/clinical-review-automation", "/medical-necessity-review-software"];
const ALL = [...INDEXABLE, "/domain"];
const DISCLAIMER = "ClinicalReviewAI.com provides general educational information about clinical review and AI-assisted healthcare workflows. It does not provide medical, legal, insurance or regulatory advice and is not a substitute for qualified professional judgment.";
const FORBIDDEN_LD = ["Physician", "MedicalOrganization", "Hospital", "MedicalClinic", "Review", "AggregateRating", "Person", "Product", "SoftwareApplication", "Offer", "Service"];

const failures = [];
const fail = (msg) => failures.push(msg);
const ok = (cond, msg) => { if (!cond) fail(msg); };

const server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore" });
const stop = () => server.kill("SIGTERM");
process.on("exit", stop);

async function waitUp() {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(BASE + "/robots.txt")).ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start");
}

const get = async (path) => {
  const res = await fetch(BASE + path, { redirect: "manual" });
  return { status: res.status, text: await res.text(), headers: res.headers };
};
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]+${attr}="${name}"[^>]*content="([^"]*)"`, "i")) || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+${attr}="${name}"`, "i"));
  return m ? m[1].replace(/&amp;/g, "&").replace(/&#x27;/g, "'") : null;
};
const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

try {
  await waitUp();
  const pages = {};
  for (const p of ALL) {
    const r = await get(p);
    ok(r.status === 200, `${p}: status ${r.status}`);
    pages[p] = r.text;
  }
  const nf = await get("/this-route-does-not-exist");
  ok(nf.status === 404, `404 route returned ${nf.status}`);
  ok(/Page not found/.test(nf.text), "404 page content missing");
  pages["/404"] = nf.text;

  const titles = new Map(), descs = new Map();
  for (const [p, html] of Object.entries(pages)) {
    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    ok(h1s === 1, `${p}: expected exactly one <h1>, found ${h1s}`);
    ok(/<aside[^>]*class="sale-banner"/.test(html), `${p}: sale banner missing`);
    ok(strip(html).includes(DISCLAIMER), `${p}: footer disclaimer missing`);
    ok(/id="editorial-standards"/.test(html), `${p}: editorial standards missing`);
    ok(/<html lang="en"/.test(html), `${p}: html lang`);
    ok(/<meta name="viewport"/.test(html), `${p}: viewport`);
    if (p === "/404") continue;
    const title = ((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "").replace(/&amp;/g, "&");
    const desc = meta(html, "name", "description");
    ok(title, `${p}: title missing`); ok(desc, `${p}: description missing`);
    if (titles.has(title)) fail(`${p}: duplicate title with ${titles.get(title)}`); titles.set(title, p);
    if (descs.has(desc)) fail(`${p}: duplicate description with ${descs.get(desc)}`); descs.set(desc, p);
    const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    const expected = p === "/" ? ORIGIN : ORIGIN + p;
    ok(canon === expected, `${p}: canonical ${canon} != ${expected}`);
    ok(meta(html, "property", "og:title") === title, `${p}: og:title != title`);
    ok(meta(html, "property", "og:description") === desc, `${p}: og:description != description`);
    ok(meta(html, "property", "og:url") === expected, `${p}: og:url`);
    ok((meta(html, "property", "og:image") || "").startsWith(ORIGIN), `${p}: og:image missing/not absolute`);
    ok(meta(html, "name", "twitter:card") === "summary_large_image", `${p}: twitter:card`);
    ok(meta(html, "name", "twitter:title") === title, `${p}: twitter:title`);
    ok(meta(html, "name", "twitter:image"), `${p}: twitter:image`);
    const robots = meta(html, "name", "robots") || "";
    if (p === "/domain") ok(/noindex/.test(robots) && /follow/.test(robots) && !/nofollow/.test(robots), `/domain: robots must be noindex, follow (got "${robots}")`);
    else ok(!/noindex/.test(robots), `${p}: unexpectedly noindex`);
    if (p !== "/domain") {
      ok((title || "").length <= 65, `${p}: title length ${(title || "").length}`);
      ok((desc || "").length <= 170, `${p}: description length ${(desc || "").length}`);
    }

    // Direct answer 40–80 words on indexable pages
    if (INDEXABLE.includes(p)) {
      const def = (html.match(/<div class="definition">[\s\S]*?<p>([\s\S]*?)<\/p>/) || [])[1];
      const words = def ? strip(def).trim().split(" ").length : 0;
      ok(words >= 40 && words <= 80, `${p}: definition word count ${words} (want 40–80)`);
      const body = strip((html.match(/<main[\s\S]*<\/main>/) || [""])[0]);
      const wc = body.trim().split(/\s+/).length;
      console.log(`  ${p.padEnd(32)} words(main): ${wc}`);
    }

    // JSON-LD
    const lds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    const types = [];
    for (const raw of lds) {
      try { const d = JSON.parse(raw.replace(/\\u003c/g, "<")); (Array.isArray(d) ? d : [d]).forEach((x) => types.push(x["@type"])); }
      catch (e) { fail(`${p}: invalid JSON-LD (${e.message})`); }
    }
    for (const t of types) ok(!FORBIDDEN_LD.includes(t), `${p}: forbidden JSON-LD type ${t}`);
    if (INDEXABLE.includes(p)) {
      ok(types.includes("WebPage"), `${p}: WebPage JSON-LD missing`);
      if (p === "/") ok(types.includes("WebSite"), "/: WebSite JSON-LD missing");
      else { ok(types.includes("Article"), `${p}: Article JSON-LD missing`); ok(types.includes("BreadcrumbList"), `${p}: BreadcrumbList missing`); ok(/aria-label="Breadcrumb"/.test(html), `${p}: visible breadcrumbs missing`); }
    }
  }

  // Internal links + fragments
  const pageIds = Object.fromEntries(Object.entries(pages).map(([p, h]) => [p, ids(h)]));
  let linkCount = 0;
  for (const [p, html] of Object.entries(pages)) {
    for (const m of html.matchAll(/<a [^>]*href="([^"]+)"/g)) {
      const href = m[1].replace(/&amp;/g, "&");
      if (/^(https?:|mailto:)/.test(href)) continue;
      linkCount++;
      const [path, frag] = href.split("#");
      const target = path === "" ? p : path;
      if (!(target in pages)) { const r = await get(target); if (r.status !== 200) fail(`${p}: broken link ${href} (${r.status})`); continue; }
      if (frag && !pageIds[target].has(frag)) fail(`${p}: link ${href} points to missing fragment`);
    }
  }
  console.log(`  internal links checked: ${linkCount}`);
  // Every pillar linked from the homepage
  for (const p of INDEXABLE.slice(1)) ok(pages["/"].includes(`href="${p}"`), `/: no internal link to ${p}`);

  // No orphans: every indexable page (other than home) is linked from several other pages' main content
  for (const p of INDEXABLE.slice(1)) {
    const linkers = Object.entries(pages).filter(([q, h]) => q !== p && new RegExp(`<main[\\s\\S]*href="${p}(#[^"]*)?"[\\s\\S]*</main>`).test(h)).map(([q]) => q);
    ok(linkers.length >= 3, `${p}: only linked from ${linkers.length} other page(s): ${linkers.join(", ")}`);
  }
  // Every new commercial page links back to the core definition, methodology and use-case pages
  for (const p of INDEXABLE.slice(6)) for (const t of ["/what-is-clinical-review", "/ai-clinical-review", "/use-cases"]) ok(new RegExp(`<main[\\s\\S]*href="${t}(#[^"]*)?"`).test(pages[p]), `${p}: missing link to ${t}`);
  // Sitemap
  const sm = await get("/sitemap.xml");
  const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expectedLocs = INDEXABLE.map((p) => (p === "/" ? ORIGIN : ORIGIN + p));
  ok(JSON.stringify(locs) === JSON.stringify(expectedLocs), `sitemap mismatch: ${locs.join(", ")}`);
  ok(!sm.text.includes("/domain"), "sitemap includes /domain");
  // Robots
  const rb = await get("/robots.txt");
  ok(/User-Agent: \*/i.test(rb.text) && /Allow: \//.test(rb.text) && rb.text.includes(`Sitemap: ${ORIGIN}/sitemap.xml`), "robots.txt malformed");
  ok(!/Disallow/i.test(rb.text), "robots.txt should not disallow anything");
  // OG image, icon
  const og = await get("/opengraph-image");
  ok(og.status === 200 && /image\/png/.test(og.headers.get("content-type") || ""), "opengraph-image not served as PNG");
  ok((await get("/icon.svg")).status === 200, "icon.svg missing");

  // Banner target (default build: internal /domain)
  const banner = (pages["/"].match(/<aside[^>]*class="sale-banner"[\s\S]*?<\/aside>/) || [""])[0];
  const bhref = (banner.match(/href="([^"]+)"/) || [])[1];
  console.log(`  sale banner href: ${bhref}`);
  ok(banner.includes("is available for acquisition") && banner.includes("This domain is for sale"), "banner copy missing");

  // YMYL / claim scan across visible text
  const bad = [
    [/\bHIPAA[- ]compliant\b/i, "HIPAA compliance claim"], [/\bFDA[- ](approved|cleared|authorized|registered)\b/i, "FDA status claim"],
    [/\b\d+(\.\d+)?\s?%/, "percentage statistic"], [/\b(testimonial|free trial|pricing|sign in|log ?in)\b/i, "SaaS-style element"],
    [/\b(our (software|platform|product|solution|tool)s?|book a demo|request a demo|start free|get started|contact sales|sign up)\b/i, "product/service copy"],
    [/\bDr\.\s|\bM\.D\.|\bMD,/, "physician credential"], [/\b(proprietary|patent(ed|-pending))\b/i, "proprietary claim"],
  ];
  for (const [p, html] of Object.entries(pages)) {
    const text = strip((html.match(/<main[\s\S]*<\/main>/) || [""])[0]);
    for (const [re, label] of bad) { const m = text.match(re); if (m) fail(`${p}: possible ${label}: "${m[0]}"`); }
  }
} catch (e) {
  fail(`script error: ${e.stack || e}`);
} finally {
  stop();
}

if (failures.length) { console.error(`\n✗ ${failures.length} problem(s):`); failures.forEach((f) => console.error("  - " + f)); process.exit(1); }
console.log("\n✓ All site checks passed");
process.exit(0);
