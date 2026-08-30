"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { galleryGroups, getImagesByFolder } from "@/data/gallery";
import { useLanguage } from "@/i18n/language-provider";
import { useLightbox } from "@/components/lightbox/LightboxProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const { copy, t } = useLanguage();
  const { openCategory } = useLightbox();

  const groups = galleryGroups
    .map((group) => ({
      ...group,
      photos: getImagesByFolder(group.folder),
    }))
    .filter((group) => group.photos.length > 0);

  return (
    <section
      id={siteConfig.anchors.gallery}
      className="scroll-mt-24 border-t border-sand/60 bg-page py-16 md:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title={t(copy.gallery.title)}
              align="center"
              className="mx-auto"
            />
            <div
              className="mx-auto mt-8 h-px w-20 bg-adobe/35 md:mt-10 md:w-28"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.folder} delay={groupIndex * 0.04}>
              <div>
                <div className="mb-8 border-b border-sand/70 pb-4 md:mb-10 md:pb-5">
                  <h3 className="display-title text-2xl text-pacific md:text-3xl">
                    {t(group.label)}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                  {group.photos.map((image) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => openCategory(group.folder, image.id)}
                      className="group relative aspect-square w-full overflow-hidden rounded-xl bg-sand/40"
                      aria-label={`${t(copy.gallery.openPhoto)}: ${t(image.alt)}`}
                    >
                      <Image
                        src={image.src}
                        alt={t(image.alt)}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
