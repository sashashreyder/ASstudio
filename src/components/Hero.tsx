import { CONFIG } from '../data';

export function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 md:pt-48 md:pb-32 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
        Design limpo.<br /> Negócios rápidos.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
        Sem reuniões infinitas. Logotipos, renders e materiais digitais minimalistas. Você preenche o form rápido, eu entrego o estilo premium que seu negócio precisa.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 items-center">
        <a 
          href={CONFIG.formLink} 
          target="_blank" 
          rel="noreferrer" 
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors duration-300 ease-out w-full sm:w-auto text-center shadow-lg"
        >
          Preencher Briefing →
        </a>
      </div>
    </section>
  );
}
