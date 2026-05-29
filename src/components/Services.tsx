import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SERVICES, CONFIG } from '../data';

export function Services() {
  // Состояние для открытия/закрытия карточек
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="servicos" className="pt-20 pb-10 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 tracking-tight">O que eu faço</h2>
        <div className="space-y-4">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="border border-gray-200 rounded-3xl overflow-hidden bg-white">
              <button 
                onClick={() => setOpenId(openId === srv.id ? null : srv.id)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center cursor-pointer"
              >
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-gray-900">{srv.title}</h3>
                  <p className="text-gray-500 mt-1 text-sm md:text-base">{srv.shortDesc}</p>
                  <span className="inline-block mt-3 bg-gray-100 text-black px-4 py-1.5 rounded-full text-sm font-semibold">
                    {srv.price}
                  </span>
                </div>

                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openId === srv.id ? 'rotate-180' : ''}`} size={28} />
              </button>

              <div className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ${openId === srv.id ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
                  {srv.details}
                </p>
                <a href={CONFIG.formLink} target="_blank" rel="noreferrer" className="inline-block mt-6 text-black font-bold hover:underline underline-offset-4">
                  Solicitar este pacote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}