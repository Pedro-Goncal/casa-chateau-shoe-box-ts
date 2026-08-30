"use client";

import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/cn";

export function LanguageToggle({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const { locale, toggleLocale, copy } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm transition",
        inverted
          ? "border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20"
          : "border-sand/80 bg-surface/80 text-pacific hover:border-adobe/40 hover:text-adobe",
        className,
      )}
      aria-label={`Switch language to ${copy.language.switchTo[locale]}`}
    >
      {copy.language.switchTo[locale]}
    </button>
  );
}
