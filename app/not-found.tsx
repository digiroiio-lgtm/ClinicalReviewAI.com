import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { navigation } from "@/lib/site-config";

export const metadata = {
  ...buildMetadata({
    path: "/404",
    title: "Page Not Found | ClinicalReviewAI.com",
    description: "The page you requested could not be found.",
    noindex: true,
  }),
  alternates: undefined,
};

export default function NotFound() {
  return (
    <div className="container center-page prose">
      <p className="eyebrow">Error 404</p>
      <h1>Page not found</h1>
      <p className="lead">The page you requested does not exist or may have moved. These pages cover AI-assisted clinical review:</p>
      <ul>
        <li><Link href="/">Home — AI Clinical Review overview</Link></li>
        {navigation.map((n) => (
          <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
