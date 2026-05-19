import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const steps = [
  {
    step: '01',
    title: 'Briefing & Seleção',
    desc: 'Analisamos o perfil do público de seu stand e selecionamos o motor de jogo White Label ideal para o seu objetivo comercial.',
  },
  {
    step: '02',
    title: 'Envelopamento 3D',
    desc: 'Adaptamos cores, texturas de produtos e logotipos diretamente no Blender e na Unity, deixando o jogo pronto em tempo recorde.',
  },
  {
    step: '03',
    title: 'Entrega no Stand',
    desc: 'Levamos os totens ou tablets configurados e testados diretamente no local do evento, deixando tudo rodando antes da feira abrir.',
  },
  {
    step: '04',
    title: 'Dashboard de ROI',
    desc: 'Após a feira, entregamos o arquivo de leads gerados limpo, estruturado, criptografado e pronto para importação no CRM de vendas.',
  },
];

export default function Processo() {
  return (
    <section id="processo" className="py-24 relative z-10 bg-slate-950 border-t border-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs block mb-3 font-semibold">O Processo</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Do Briefing ao Lead em 4 Etapas</h2>
            <p className="text-slate-400 text-base md:text-lg mt-4">
              Desenvolvemos um pipeline rápido que se adapta à agenda dinâmica dos gestores de marketing de eventos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((stepItem, idx) => (
            <ScrollReveal direction="up" delay={idx * 150} key={idx}>
              <div className="relative p-8 rounded-2xl glass-panel border border-slate-800 flex flex-col h-full hover:border-blue-500/30 transition-all duration-300">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 mb-6 font-mono opacity-80 select-none">
                  {stepItem.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{stepItem.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">{stepItem.desc}</p>

                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-6 z-10 text-slate-700 hover:text-orange-500 transition-colors pointer-events-none">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
