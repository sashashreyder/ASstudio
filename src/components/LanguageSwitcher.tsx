import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/language";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold tracking-wide"
      role="group"
      aria-label="Language"
    >
      {languages.map(({ code, label }, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && (
            <span className="mx-1 text-switcher-divider">/</span>
          )}
          <button
            type="button"
            onClick={() => setLanguage(code)}
            className={`px-1 py-0.5 transition-colors ${
              language === code
                ? "text-switcher-active"
                : "text-switcher-inactive hover:text-switcher-hover"
            }`}
            aria-pressed={language === code}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
