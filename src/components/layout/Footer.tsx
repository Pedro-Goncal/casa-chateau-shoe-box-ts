"use client";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";

export function Footer() {
  const { copy, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand/70 bg-surface/70 py-10">
      <div className="section-shell flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <p className="text-sm text-muted">{t(siteConfig.location)}</p>
        <p className="text-sm text-muted">
          © {year}. {t(copy.footer.rights)}
        </p>
      </div>
    </footer>
  );
}
