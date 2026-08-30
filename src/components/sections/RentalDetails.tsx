"use client";

import {
  Banknote,
  CalendarDays,
  CalendarRange,
  CigaretteOff,
  Dog,
  Droplets,
  Flame,
  Sprout,
  Sun,
  Users,
  Wallet,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  available: CalendarDays,
  "minimum-term": CalendarRange,
  rent: Banknote,
  "move-in": Wallet,
  occupancy: Users,
  "household-water": Droplets,
  "irrigation-water": Sprout,
  internet: Wifi,
  electricity: Sun,
  gas: Flame,
  dogs: Dog,
  smoking: CigaretteOff,
};

export function RentalDetails() {
  const { copy, t } = useLanguage();

  return (
    <section
      id={siteConfig.anchors.rental}
      className="scroll-mt-24 border-t border-sand/60 bg-page py-16 md:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <div className="text-center">
            <SectionHeading
              title={t(copy.rental.title)}
              align="center"
              className="mx-auto"
            />
            <div
              className="mx-auto mt-8 h-px w-20 bg-adobe/35 md:w-28"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <dl className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-sand/60 bg-surface md:mt-12">
            {copy.rental.items.map((item, index) => {
              const Icon = iconMap[item.id] ?? CalendarDays;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col gap-1.5 px-6 py-5 md:flex-row md:items-center md:gap-6 md:px-8 ${
                    index > 0 ? "border-t border-sand/50" : ""
                  }`}
                >
                  <dt className="flex items-center gap-3 md:w-64 md:shrink-0">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-adobe/10">
                      <Icon
                        className="h-4 w-4 text-adobe"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[0.95rem] font-medium text-pacific">
                      {t(item.label)}
                    </span>
                  </dt>
                  <dd className="pl-11 text-[0.95rem] leading-6 text-body/90 md:pl-0">
                    {t(item.value)}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
