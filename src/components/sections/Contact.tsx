"use client";

import { MessageCircle, Phone } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl, siteConfig } from "@/config/site";
import { IconLink } from "@/components/ui/IconLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/language-provider";

export function Contact() {
  const { copy, locale, t } = useLanguage();

  return (
    <section
      id={siteConfig.anchors.contact}
      className="scroll-mt-24 border-t border-sand/60 bg-surface py-16 md:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title={t(copy.contact.title)}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.05} className="h-full">
            <IconLink
              href={getPhoneUrl()}
              label={t(copy.contact.phoneLabel)}
              description={siteConfig.contact.phone}
              icon={Phone}
            />
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <IconLink
              href={getWhatsAppUrl(locale)}
              label={t(copy.contact.whatsappLabel)}
              description={siteConfig.contact.phone}
              icon={MessageCircle}
              external
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
