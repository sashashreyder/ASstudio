import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">{CONFIG.studioName}.</a>
        
        {/* Десктоп */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#servicos" className="text-gray-600 hover:text-black transition">Serviços</a>
          <a href="#portfolio" className="text-gray-600 hover:text-black transition">Portfólio</a>
          <a href="#sobre" className="text-gray-600 hover:text-black transition">Sobre</a>
          <a href={CONFIG.formLink} target="_blank" rel="noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-300 ease-out">
            Fazer orçamento
          </a>
        </div>

        {/* Мобилка: кнопка бургера */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Выпадающее меню для мобилки */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 flex flex-col space-y-4">
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-lg font-medium">Serviços</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Portfólio</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg font-medium">Sobre</a>
          <a href={CONFIG.formLink} target="_blank" rel="noreferrer" className="bg-black text-white px-6 py-4 rounded-full font-bold text-center mt-4">
            Receber Proposta
          </a>
        </div>
      )}
    </nav>
  );
}