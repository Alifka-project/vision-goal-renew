export const locales = ["en", "de", "fr", "es", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Locales exposed in the UI. The client asked that only fully-reviewed
// languages be offered, so DE/FR/ES/ZH stay in the dictionary but are not
// switchable until each translation has been proofed. Add a code back here
// (and nowhere else) to re-enable it in both the desktop and mobile
// switchers plus the footer language line.
export const visibleLocales: Locale[] = ["en"];
export const hasLocaleChoice = visibleLocales.length > 1;

export const localeLabels: Record<Locale, { short: string; long: string; htmlLang: string }> = {
  en: { short: "EN", long: "English", htmlLang: "en" },
  de: { short: "DE", long: "Deutsch", htmlLang: "de" },
  fr: { short: "FR", long: "Français", htmlLang: "fr" },
  es: { short: "ES", long: "Español", htmlLang: "es" },
  zh: { short: "ZH", long: "中文", htmlLang: "zh" },
};

export const COOKIE_NAME = "vg-locale";
