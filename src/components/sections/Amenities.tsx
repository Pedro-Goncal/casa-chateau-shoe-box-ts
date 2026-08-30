"use client";

import {
  AirVent,
  Bath,
  Bed,
  Car,
  ChefHat,
  Dog,
  Droplets,
  Fan,
  Fence,
  Flame,
  Leaf,
  MapPin,
  Mountain,
  Package,
  Recycle,
  Shirt,
  Sofa,
  Sprout,
  Sun,
  Sunset,
  Trees,
  Tv,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  furnished: Sofa,
  bedroom: Bed,
  "tv-office": Tv,
  bathroom: Bath,
  kitchen: ChefHat,
  "gas-stove": Flame,
  pantry: Package,
  starlink: Wifi,
  laundry: Shirt,
  "water-heater": Droplets,
  ac: AirVent,
  fans: Fan,
  solar: Sun,
  fenced: Fence,
  landscaped: Trees,
  parking: Car,
  terrace: Waves,
  rooftop: Mountain,
  "ocean-views": Mountain,
  sunsets: Sunset,
  "lime-trees": Trees,
  "herb-garden": Leaf,
  irrigation: Sprout,
  greywater: Recycle,
  dogs: Dog,
};

export function Amenities() {
  const { copy, t } = useLanguage();
  const groups = copy.amenities.groups;

  return (
    <section
      id={siteConfig.anchors.amenities}
      className="scroll-mt-24 border-t border-sand/60 bg-surface py-16 md:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title={t(copy.amenities.title)}
            align="center"
            className="mx-auto"
          >
            <div
              className="mx-auto mt-8 h-px w-20 bg-adobe/35 md:w-28"
              aria-hidden="true"
            />
          </SectionHeading>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-full border border-sand/80 bg-page/70 px-5 py-2.5">
            <MapPin
              className="h-4 w-4 shrink-0 text-adobe"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <p className="text-sm font-medium tracking-wide text-pacific">
              {t(copy.amenities.locationLabel)}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {groups.map((group, groupIndex) => {
            const Icon = iconMap[group.id] ?? Package;

            return (
              <Reveal
                key={group.id}
                className="h-full"
                delay={(groupIndex % 2) * 0.1}
              >
                <div className="flex h-full flex-col rounded-2xl border border-sand/60 bg-page/60 p-7 md:p-8">
                  <h3 className="display-title text-lg text-pacific md:text-xl">
                    {t(group.title)}
                  </h3>
                  <div
                    className="mt-4 h-px w-full bg-sand/70"
                    aria-hidden="true"
                  />

                  <ul className="mt-5 space-y-4">
                    {group.items.map((item) => {
                      const ItemIcon = iconMap[item.id] ?? Icon;

                      return (
                        <li key={item.id} className="flex items-start gap-3.5">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-adobe/10">
                            <ItemIcon
                              className="h-4 w-4 text-adobe"
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                          </span>
                          <p className="text-[0.95rem] leading-6 text-body/90">
                            {t(item.label)}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
