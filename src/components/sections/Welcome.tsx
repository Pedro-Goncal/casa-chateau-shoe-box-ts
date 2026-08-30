"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getImageById } from "@/data/gallery";
import { useLanguage } from "@/i18n/language-provider";
import { useLightbox } from "@/components/lightbox/LightboxProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Welcome() {
  const { copy, t } = useLanguage();
  const { openById } = useLightbox();
  const image = getImageById(copy.welcome.imageId);

  return (
    <section
      id={siteConfig.anchors.welcome}
      className="scroll-mt-24 bg-page py-16 md:py-20"
    >
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {image ? (
          <Reveal variant="media">
            <button
              type="button"
              onClick={() => openById(image.id)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              aria-label={t(copy.gallery.openPhoto)}
            >
              <Image
                src={image.src}
                alt={t(image.alt)}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          </Reveal>
        ) : null}

        <div>
          <Reveal>
            <SectionHeading title={t(copy.welcome.title)} />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-body/88">
              {t(copy.welcome.paragraph)}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
