import { CONFIG } from '../data';

export function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 md:pt-48 md:pb-32 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
        Seu negócio merece parecer tão profissional quanto você trabalha.
      </h1>
      <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Design profissional para empresas que querem transmitir confiança <br/> e conquistar mais clientes.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 items-center">
        <a
          href={CONFIG.formLink}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors duration-300 ease-out w-full sm:w-auto text-center shadow-lg"
        >
          Receber proposta →
        </a>
      </div>
    </section>
  );
}
