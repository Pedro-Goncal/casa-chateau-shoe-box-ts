import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Casa Chatou — Todos Santos, Baja California Sur",
  description:
    "A quiet showcase home between the desert and the Pacific in Todos Santos, Baja California Sur.",
  openGraph: {
    title: "Casa Chatou — Todos Santos, Baja California Sur",
    description:
      "A quiet showcase home between the desert and the Pacific in Todos Santos, Baja California Sur.",
    type: "website",
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
