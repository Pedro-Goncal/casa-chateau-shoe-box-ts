"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getImageById } from "@/data/gallery";
import { useLanguage } from "@/i18n/language-provider";

export function Hero() {
  const { copy, t } = useLanguage();
  const heroImage = getImageById("hero-main");

  if (!heroImage) return null;

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={t(heroImage.alt)}
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(10,8,6,0.44)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,8,6,0.22)_0%,rgba(10,8,6,0.58)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-20 text-center">
        <h1 className="display-title mx-auto max-w-5xl text-[clamp(2.15rem,9vw,5.4rem)] leading-[1.1] text-white [text-shadow:0_6px_40px_rgba(0,0,0,0.7)]">
          {t(copy.hero.title)}
        </h1>
        <div
          className="mx-auto mt-5 h-px w-14 bg-white/70 sm:mt-7 sm:w-20"
          aria-hidden="true"
        />
        <p className="mt-5 max-w-[18.5rem] text-[0.78rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white sm:mt-7 sm:max-w-none sm:text-[0.95rem] sm:tracking-[0.22em] md:text-xl md:tracking-[0.26em] [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
          {t(copy.hero.leaseLine)}
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center sm:gap-6 md:gap-10 md:pb-7">
        <p className="whitespace-pre-line text-[0.72rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/90 sm:text-[0.9rem] sm:tracking-[0.22em] md:text-lg md:tracking-[0.26em] [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
          {t(copy.hero.location)}
        </p>
        <a
          href={`#${siteConfig.anchors.welcome}`}
          className="scroll-cue inline-flex flex-col items-center gap-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/85 transition hover:text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]"
        >
          {t(copy.hero.scrollCue)}
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
