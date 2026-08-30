"use client";

import { Amenities } from "@/components/sections/Amenities";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { RentalDetails } from "@/components/sections/RentalDetails";
import { Spaces } from "@/components/sections/Spaces";
import { Welcome } from "@/components/sections/Welcome";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LightboxProvider } from "@/components/lightbox/LightboxProvider";
import { useLanguage } from "@/i18n/language-provider";

export function HomePage() {
  const { t, copy } = useLanguage();

  return (
    <LightboxProvider>
      <a href="#welcome" className="skip-link">
        {t(copy.skipToContent)}
      </a>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Spaces />
        <Amenities />
        <RentalDetails />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  );
}
