import { Gamepad2, ChevronRight, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-36 z-10 overflow-hidden">
      <div
        className="absolute top-[20%] left-[8%] w-16 h-16 rounded-2xl border border-blue-500/10 glass-panel opacity-20 animate-float hidden lg:block -z-10"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute top-[35%] right-[10%] w-12 h-12 rounded-full border border-orange-500/10 glass-panel opacity-20 animate-float-delayed hidden lg:block -z-10"
        style={{ animationDelay: '1.5s' }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-20">
        <ScrollReveal direction="up" delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-orange-400 text-sm font-semibold mb-8 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
            <Sparkles size={14} className="animate-pulse text-orange-500" />
            <span>Marketing de Experiência & ROI de Alto Impacto</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-6xl mx-auto">
            Transforme seu Stand em um <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-blue-500 animate-gradient-x">
              Ímã de Público e Geração de Leads
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={300}>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
            Substitua panfletos ignorados e formulários burocráticos por jogos 3D interativos customizados em tempo recorde.
            Engajamento corporativo de alto padrão que funciona de forma <strong>100% offline</strong> no pavilhão de feiras.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#catalogo"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] relative overflow-hidden group"
            >
              <Gamepad2 size={22} className="relative z-10 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Ver Catálogo de Jogos 3D</span>
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-slate-800/40 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 hover:border-orange-500/30 group"
            >
              Falar com Especialista <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
