import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t, formLink } = useLanguage();

  return (
    <section className="pt-36 pb-20 px-6 md:pt-48 md:pb-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="hero-title font-bold tracking-tight text-foreground">
          {t.hero.title}
        </h1>

        <div className="mt-8 max-w-3xl mx-auto hero-description text-secondary">
          <p>{t.hero.description}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={formLink}
            target="_blank"
            rel="noreferrer"
            className="bg-button text-button-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-button-hover transition-colors duration-300 ease-out shadow-theme-lg"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
