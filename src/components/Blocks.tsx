import { Zap, CheckCircle, MessageCircle, Globe } from "lucide-react";
import { CONFIG, PORTFOLIO_IMAGES } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

const benefitIcons = [Zap, CheckCircle, MessageCircle, Globe];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M14.2 8.2V6.9c0-.7.5-.9.9-.9h1.7V3.2L14.4 3c-2.7 0-4.2 1.6-4.2 4.5v.7H7.8v3h2.4V21h3.2v-9.8h2.7l.4-3h-3.1Z" />
    </svg>
  );
}

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-32 bg-surface px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="benefits-title font-bold text-center text-foreground">
          {t.benefits.title}
        </h2>

        <p className="mt-4 text-center text-secondary max-w-3xl mx-auto leading-relaxed text-pretty">
          {t.benefits.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.benefits.items.map((item, i) => {
          const Icon = benefitIcons[i];

          return (
            <div
              key={i}
              className="p-10 bg-card rounded-3xl shadow-theme-sm hover:shadow-theme-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon className="text-icon" size={28} />
                <h4 className="font-bold text-lg text-foreground">
                  {item.title}
                </h4>
              </div>

              <p className="text-secondary text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Portfolio() {
  const { t } = useLanguage();
  const items = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

  return (
    <section id="portfolio" className="py-20 overflow-hidden bg-surface-muted">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="section-title text-3xl font-bold tracking-tight text-foreground">
          {t.portfolio.title}
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="animate-scroll flex gap-4 w-max pause-on-hover">
          {items.map((item, idx) => {
            const isVideo = item.preview.endsWith(".mp4");

            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`w-[280px] h-[380px] flex-shrink-0 rounded-3xl overflow-hidden bg-placeholder block ${idx === 0 ? "ml-4" : ""}`}
              >
                {isVideo ? (
                  <video
                    src={item.preview}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                  />
                ) : (
                  <img
                    src={item.preview}
                    alt={t.portfolio.imageAlt}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                    loading="lazy"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutAndReviews() {
  const { t, formLink } = useLanguage();

  return (
    <>
      <section id="sobre" className="py-20 px-6 bg-surface text-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-3xl font-bold mb-6">
            {t.about.title}
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-8 max-w-2xl text-pretty">
            {t.about.intro}
            <br />
            <br />
            <strong className="text-foreground">{t.about.whatsappTitle}</strong>
            <br />
            {t.about.whatsappBody}
            <br />
            <br />
            {t.about.closing}
          </p>

          <a
            href={formLink}
            target="_blank"
            rel="noreferrer"
            className="bg-button text-button-foreground px-6 py-3 rounded-full font-bold hover:bg-button-hover hover:scale-105 transition-all duration-300 ease-out inline-block shadow-theme-lg"
          >
            {t.about.cta}
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-3xl font-bold mb-10 tracking-tight text-foreground">
            {t.reviews.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.reviews.items.map((review, i) => (
              <div
                key={i}
                className="p-8 bg-surface border border-border-subtle rounded-3xl hover:shadow-theme-md transition-shadow duration-300 ease-out"
              >
                <p className="text-secondary mb-6 italic leading-relaxed text-pretty">
                  "{review.text}"
                </p>
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-muted">{review.business}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-secondary">
          <p>
            © {new Date().getFullYear()} {CONFIG.studioName}
          </p>

          <div className="flex items-center gap-3">
            <a
              href={CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition hover:-translate-y-0.5 hover:opacity-75"
            >
              <InstagramIcon />
            </a>

            <a
              href={CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition hover:-translate-y-0.5 hover:opacity-75"
            >
              <FacebookIcon />
            </a>
          </div>

          <p className="text-center md:text-right text-pretty">
            {t.footer.basedIn} {CONFIG.location} • {t.footer.remoteWork}{" "}
            {CONFIG.currency}
          </p>
        </div>
      </div>
    </footer>
  );
}