"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { getTranslation, t as translate } from "@/i18n";
import type { Locale, Translations } from "@/i18n/types";

const STORAGE_KEY = "casa-chatou-locale";

const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "es" || stored === "en" ? stored : "en";
  } catch {
    return "en";
  }
}

function notify() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", notify);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", notify);
  };
}

function writeLocale(next: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Private browsing or blocked storage — keep the in-memory value.
  }
  notify();
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  copy: Translations;
  t: (localized: Record<Locale, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    readStoredLocale,
    () => "en" as Locale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => writeLocale(next), []);

  const toggleLocale = useCallback(
    () => writeLocale(readStoredLocale() === "en" ? "es" : "en"),
    [],
  );

  const copy = getTranslation(locale);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      copy,
      t: (localized: Record<Locale, string>) => translate(localized, locale),
    }),
    [copy, locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
