export const locales = ["en", "de", "fr", "es", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { short: string; long: string; htmlLang: string }> = {
  en: { short: "EN", long: "English", htmlLang: "en" },
  de: { short: "DE", long: "Deutsch", htmlLang: "de" },
  fr: { short: "FR", long: "Français", htmlLang: "fr" },
  es: { short: "ES", long: "Español", htmlLang: "es" },
  zh: { short: "ZH", long: "中文", htmlLang: "zh" },
};

export const COOKIE_NAME = "vg-locale";
