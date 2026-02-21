import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import am from "../locales/am.json";
import ru from "../locales/ru.json";

const LOCALE_STORAGE_KEY = "locale";
const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "am", "ru", "fr"];

const messages = { ru, en, am, fr };

const normalizeLocale = (value) => {
  if (!value || typeof value !== "string") {
    return null;
  }

  const base = value.toLowerCase().split("-")[0];
  if (base === "hy") {
    return "am";
  }
  return base;
};

const getBrowserLocale = () => {
  if (typeof navigator === "undefined") {
    return null;
  }

  const preferredLocales = Array.isArray(navigator.languages)
    ? navigator.languages
    : [navigator.language];

  for (const locale of preferredLocales) {
    const normalized = normalizeLocale(locale);
    if (normalized && SUPPORTED_LOCALES.includes(normalized)) {
      return normalized;
    }
  }

  return null;
};

const getInitialLocale = () => {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved && SUPPORTED_LOCALES.includes(saved)) {
    return saved;
  }
  const browserLocale = getBrowserLocale();
  if (browserLocale) {
    return browserLocale;
  }
  return DEFAULT_LOCALE;
};

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
});

export const availableLocales = SUPPORTED_LOCALES;

export const setLocale = (nextLocale) => {
  if (!SUPPORTED_LOCALES.includes(nextLocale)) {
    return;
  }
  i18n.global.locale.value = nextLocale;
  localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  document.documentElement.lang = nextLocale;
};
