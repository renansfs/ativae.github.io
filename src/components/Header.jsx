import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-panel shadow-lg shadow-blue-950/40 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center z-50 shrink-0">
          <a href="#" className="group relative block">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
            <Logo className="relative z-10 transition-transform duration-300 group-hover:scale-[1.03]" />
          </a>
        </div>

        <nav className="hidden md:flex flex-nowrap items-center gap-8 font-semibold text-sm text-slate-300">
          <a href="#problema" className="hover:text-white transition-all whitespace-nowrap">
            O Desafio
          </a>
          <a href="#solucao" className="hover:text-white transition-all whitespace-nowrap">
            Nossa Solução
          </a>
          <a href="#catalogo" className="hover:text-white transition-all whitespace-nowrap">
            Motores de Jogo
          </a>
          <a href="#diferenciais" className="hover:text-white transition-all whitespace-nowrap">
            Diferenciais
          </a>
          <a href="#processo" className="hover:text-white transition-all whitespace-nowrap">
            Como Funciona
          </a>
          <a href="#contato" className="relative group px-6 py-2.5 rounded-full overflow-hidden block whitespace-nowrap shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-blue-600 animate-gradient-x"></div>
            <div className="absolute inset-[2px] bg-slate-950 rounded-full transition-colors group-hover:bg-transparent"></div>
            <span className="relative z-10 text-white font-bold transition-colors">Solicitar Orçamento</span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden z-50 text-slate-300 hover:text-white relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <a href="#problema" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold hover:text-orange-500 transition-colors z-10">
          O Desafio
        </a>
        <a href="#solucao" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold hover:text-orange-500 transition-colors z-10">
          Nossa Solução
        </a>
        <a href="#catalogo" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold hover:text-orange-500 transition-colors z-10">
          Motores de Jogo
        </a>
        <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold hover:text-orange-500 transition-colors z-10">
          Diferenciais
        </a>
        <a
          href="#contato"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 px-8 py-4 rounded-full bg-orange-500 text-white font-bold animate-pulse-glow z-10"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
}
