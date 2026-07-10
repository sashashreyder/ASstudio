import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONFIG } from "../data";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, formLink } = useLanguage();

  return (
    <nav className="fixed w-full top-0 z-50 bg-nav backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-foreground">
          {CONFIG.studioName}.
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#servicos"
            className="text-secondary hover:text-foreground transition"
          >
            {t.nav.services}
          </a>
          <a
            href="#portfolio"
            className="text-secondary hover:text-foreground transition"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#sobre"
            className="text-secondary hover:text-foreground transition"
          >
            {t.nav.about}
          </a>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <a
            href={formLink}
            target="_blank"
            rel="noreferrer"
            className="bg-button text-button-foreground px-5 py-2.5 rounded-full hover:bg-button-hover transition-colors duration-300 ease-out"
          >
            {t.nav.requestQuote}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border-subtle px-6 py-6 flex flex-col space-y-4">
          <a
            href="#servicos"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-foreground"
          >
            {t.nav.services}
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-foreground"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-foreground"
          >
            {t.nav.about}
          </a>
          <a
            href={formLink}
            target="_blank"
            rel="noreferrer"
            className="bg-button text-button-foreground px-6 py-4 rounded-full font-bold text-center mt-4 hover:bg-button-hover transition-colors duration-300 ease-out"
          >
            {t.nav.receiveProposal}
          </a>
        </div>
      )}
    </nav>
  );
}
