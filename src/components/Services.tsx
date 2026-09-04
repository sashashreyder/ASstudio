import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const MERCADO_LIVRE_URL = "https://servico.mercadolivre.com.br/MLB-7523337736#origin=share&sid=share&action=copy";

export function Services() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { t, formLink } = useLanguage();

  return (
    <section id="servicos" className="pt-20 pb-10 bg-surface px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-3xl font-bold mb-10 tracking-tight text-foreground">
          {t.services.title}
        </h2>
        <div className="space-y-4">
          {t.services.items.map((srv) => (
            <div
              key={srv.id}
              className="border border-border rounded-3xl overflow-hidden bg-surface"
            >
              <button
                onClick={() => setOpenId(openId === srv.id ? null : srv.id)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center cursor-pointer"
              >
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {srv.title}
                  </h3>
                  <p className="text-secondary mt-1 text-sm md:text-base">
                    {srv.shortDesc}
                  </p>
                  <span className="inline-block mt-3 bg-badge text-badge-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    {srv.price}
                  </span>
                </div>

                <ChevronDown
                  className={`text-icon-muted transition-transform duration-300 ${openId === srv.id ? "rotate-180" : ""}`}
                  size={28}
                />
              </button>

              <div
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ${openId === srv.id ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-secondary leading-relaxed pt-4 border-t border-border-subtle">
                  {srv.details}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={formLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-accent hover:underline underline-offset-4"
                  >
                    {t.services.requestPackage}
                  </a>

                  {srv.id === 2 && (
                    <a
                      href={MERCADO_LIVRE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-surface transition-opacity hover:opacity-80"
                    >
                      {t.services.marketplaceCta}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
