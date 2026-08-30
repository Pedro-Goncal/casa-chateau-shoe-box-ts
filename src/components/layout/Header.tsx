"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/cn";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Header() {
  const { copy, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const onHero = !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        menuOpen
          ? "bg-surface py-3"
          : scrolled
            ? "border-b border-sand/60 bg-surface/78 py-3 backdrop-blur-xl"
            : "bg-gradient-to-b from-[rgba(20,18,16,0.45)] to-transparent py-5",
      )}
    >
      <div className="section-shell flex items-center justify-end gap-4 lg:justify-between">
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.id}
              href={`#${siteConfig.anchors[item.id]}`}
              className={cn(
                "text-sm font-medium transition",
                onHero
                  ? "text-white/85 hover:text-white"
                  : "text-body/85 hover:text-adobe",
              )}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle inverted={onHero} />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={t(
              menuOpen ? copy.navMenu.close : copy.navMenu.open,
            )}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden",
              onHero
                ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                : "border-sand/80 bg-surface/80 text-pacific hover:border-adobe/40 hover:text-adobe",
            )}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="section-shell mt-3 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col border-t border-sand/60">
          {copy.nav.map((item) => (
            <a
              key={item.id}
              href={`#${siteConfig.anchors[item.id]}`}
              onClick={() => setMenuOpen(false)}
              className="display-title border-b border-sand/50 py-4 text-2xl text-pacific transition hover:text-adobe"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
