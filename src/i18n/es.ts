import { en } from "./en";

// Spanish strings are embedded in each LocalizedString's `es` field inside en.ts.
// This file re-exports the same structure for consistency with the i18n module.
export const es = en;

export const translations = {
  en,
  es: en,
} as const;
