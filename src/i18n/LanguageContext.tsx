import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { briefingFormLinks } from "./config";
import {
  getInitialLanguage,
  saveLanguage,
  type Language,
} from "./language";
import { translations, type Translations } from "./translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
  formLink: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function updateDocumentMetadata(language: Language) {
  const { title, description } = translations[language].meta;

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    saveLanguage(nextLanguage);
  };

  useEffect(() => {
    updateDocumentMetadata(language);
  }, [language]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: translations[language],
    formLink: briefingFormLinks[language],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
