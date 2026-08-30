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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
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

      <div className="relative z-10 w-full px-6 pt-24 text-center">
        <h1 className="display-title mx-auto max-w-5xl text-[clamp(2.6rem,7.4vw,5.4rem)] leading-[1.08] text-white [text-shadow:0_6px_40px_rgba(0,0,0,0.7)]">
          {t(copy.hero.title)}
        </h1>
        <div
          className="mx-auto mt-7 h-px w-16 bg-white/70 sm:w-20"
          aria-hidden="true"
        />
        <p className="mt-7 text-[0.95rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-lg md:text-xl md:tracking-[0.26em] [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
          {t(copy.hero.leaseLine)}
        </p>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex w-[min(100%-2rem,42rem)] -translate-x-1/2 flex-col items-center gap-8 text-center md:gap-10">
        <p className="whitespace-pre-line text-[0.9rem] font-semibold uppercase leading-relaxed tracking-[0.22em] text-white/90 sm:text-base md:text-lg md:tracking-[0.26em] [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
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
