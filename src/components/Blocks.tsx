import { Zap, CheckCircle, MessageCircle, Globe } from "lucide-react";
import { CONFIG, REVIEWS, PORTFOLIO_IMAGES } from '../data';

export function Benefits() {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-32 bg-white px-6">

      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Por que escolher a AS Studio?
        </h2>

        <p className="mt-4 text-center text-gray-500 max-w-3xl mx-auto">
          Atendimento direto, comunicação simples e foco em entregar exatamente o que seu negócio precisa.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Zap, title: "Velocidade", text: "Prazos rápidos, comunicação direta e foco na entrega." },
          { icon: CheckCircle, title: "Ajustes Inclusos", text: "Revisões inclusas para garantir um resultado alinhado ao briefing." },
          { icon: MessageCircle, title: "Sem Agência", text: "Atendimento direto, sem intermediários e sem custos extras." },
          { icon: Globe, title: "Sem Reuniões", text: "Tudo resolvido por mensagem, sem chamadas intermináveis." }
        ].map((item, i) => (
          <div
            key={i}
            className="p-10 bg-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <item.icon className="text-black" size={28} />
              <h4 className="font-bold text-lg">{item.title}</h4>
            </div>

            <p className="text-gray-500 text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export function Portfolio() {

  const items = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

  return (
    <section id="portfolio" className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Alguns Trabalhos</h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="animate-scroll flex gap-4 w-max pause-on-hover">
          {items.map((item, idx) => {
            // Проверяем, видео это или картинка
            const isVideo = item.preview.endsWith('.mp4');

            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`w-[280px] h-[380px] flex-shrink-0 rounded-3xl overflow-hidden bg-gray-200 block ${idx === 0 ? 'ml-4' : ''}`}
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
                    alt="Trabalho do portfólio"
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
  return (
    <>
      <section id="sobre" className="py-20 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Prazer, {CONFIG.authorName}.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Oi! Sou imigrante, moro no Brasil e sou completamente apaixonada por transformar ideias complexas em design minimalista e funcional. Meu estilo de trabalho é acolhedor, mas super direto e focado no que realmente importa: o resultado do seu negócio.
            <br /><br />
            <strong className="text-black">Por que você não vai encontrar meu WhatsApp por aqui?</strong><br />
            Não é por falta de carinho, juro! É porque valorizo o nosso tempo real. Reuniões longas e áudios infinitos acabam gerando caos e atrasando os projetos. Prefiro concentrar toda a nossa energia no seu briefing estruturado. Assim, consigo trabalhar focada, de forma assíncrona para qualquer lugar do mundo, e te entregar um material incrível e impecável muito mais rápido.
          </p>
          <a href={CONFIG.formLink} target="_blank" rel="noreferrer" className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-out inline-block shadow-lg">
            Começar Agora
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">O que dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition-shadow duration-300 ease-out">
                <p className="text-gray-600 mb-6 italic">"{r.text}"</p>
                <p className="font-bold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-400">{r.business}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white px-6 text-center rounded-t-[3rem]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Vamos dar um upgrade no seu negócio?</h2>
        <a href={CONFIG.formLink} target="_blank" rel="noreferrer" className="inline-block bg-white text-black px-8 py-5 rounded-full text-lg font-bold hover:bg-gray-300 transition-colors duration-500 ease-out mb-16 w-full md:w-auto shadow-xl">
          Preencher Briefing Rápido
        </a>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-800 pt-8">
          <p>© {new Date().getFullYear()} {CONFIG.studioName}.</p>
          <p className="mt-4 md:mt-0">📍 Baseada em {CONFIG.location}. Atendendo o mundo {CONFIG.currency}.</p>
        </div>
      </div>
    </footer>
  );
}