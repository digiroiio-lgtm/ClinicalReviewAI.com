import type { Metadata, Viewport } from "next";
import { DomainSaleBanner } from "@/components/DomainSaleBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultMetadata } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <DomainSaleBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
