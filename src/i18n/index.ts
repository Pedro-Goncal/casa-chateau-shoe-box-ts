import type { Locale } from "./types";
import { en } from "./en";

export const translations = {
  en,
  es: en,
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

export function t(localized: Record<Locale, string>, locale: Locale) {
  return localized[locale];
}
