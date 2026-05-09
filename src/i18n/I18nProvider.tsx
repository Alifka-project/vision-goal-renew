"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COOKIE_NAME, defaultLocale, locales, type Locale } from "./config";
import { dictionaries, type Dict } from "./dictionary";

type Ctx = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

function readCookie(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`));
  const v = match ? decodeURIComponent(match[1]) : null;
  return v && (locales as readonly string[]).includes(v) ? (v as Locale) : defaultLocale;
}

function writeCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  // 12 months
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(locale)}; path=/; max-age=${maxAge}; samesite=lax`;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with the default locale on the server and the first client paint,
  // then hydrate the cookie value in an effect. This keeps SSR and the first
  // client render byte-identical and avoids React hydration mismatches.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const cookieLocale = readCookie();
    if (cookieLocale !== locale) setLocaleState(cookieLocale);
    // Reflect on <html lang> so screen readers and search engines see the right value
    document.documentElement.lang = cookieLocale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    writeCookie(next);
    setLocaleState(next);
    document.documentElement.lang = next;
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

export function useT(): Dict {
  return useI18n().t;
}
