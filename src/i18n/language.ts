import { LANGUAGE_STORAGE_KEY } from "./config";

export type Language = "pt" | "en";

export function getInitialLanguage(): Language {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (saved === "pt" || saved === "en") {
    return saved;
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  const prefersPortuguese = browserLanguages.some((lang) =>
    lang.toLowerCase().startsWith("pt")
  );

  return prefersPortuguese ? "pt" : "en";
}

export function saveLanguage(language: Language): void {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}
