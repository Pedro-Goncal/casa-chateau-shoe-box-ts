"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getImageById, spaceImageFolders } from "@/data/gallery";
import { useLanguage } from "@/i18n/language-provider";
import { useLightbox } from "@/components/lightbox/LightboxProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Spaces() {
  const { copy, t } = useLanguage();
  const { openCategory } = useLightbox();

  return (
    <section
      id={siteConfig.anchors.spaces}
      className="scroll-mt-24 border-t border-sand/60 bg-surface py-16 md:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title={t(copy.spaces.title)}
            intro={t(copy.spaces.intro)}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {copy.spaces.items.map((space, index) => {
            const image = getImageById(space.imageId);
            if (!image) return null;

            return (
              <Reveal key={space.id} variant="media" delay={(index % 4) * 0.07}>
                <button
                  type="button"
                  onClick={() => {
                    const folder = spaceImageFolders[space.id];
                    if (folder) openCategory(folder, image.id);
                  }}
                  className="group w-full text-left"
                  aria-label={t(copy.gallery.openPhoto)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-sand/40">
                    <Image
                      src={image.src}
                      alt={t(image.alt)}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-pacific">
                    {t(space.name)}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
