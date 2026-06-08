import { CONFIG } from '../data';

export function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 md:pt-48 md:pb-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Seu negócio merece parecer tão profissional quanto você trabalha.
        </h1>

        <div className="mt-8 max-w-5xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed">
          <p>
          Design profissional para empresas que querem transmitir confiança e conquistar mais clientes.

Preencha um breve formulário e descreva sua ideia. Após a análise, entrarei em contato pelo WhatsApp com uma proposta personalizada de acordo com seus objetivos, prazo e orçamento.
          </p>

        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={CONFIG.formLink}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors duration-300 ease-out shadow-lg"
          >
            Receber proposta →
          </a>
        </div>
      </div>
    </section>
  );
}