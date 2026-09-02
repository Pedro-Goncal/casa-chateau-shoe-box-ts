import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { getSiteUrl, seo } from "@/config/seo";
import { LanguageProvider } from "@/i18n/language-provider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title.en,
  description: seo.description.en,
  keywords: [...seo.keywords],
  applicationName: seo.title.en,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_MX"],
    url: "/",
    siteName: "La Horcadita, Todos Santos",
    title: seo.title.en,
    description: seo.description.en,
    images: [
      {
        url: seo.ogImage.src,
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title.en,
    description: seo.description.en,
    images: [seo.ogImage.src],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full antialiased">
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
