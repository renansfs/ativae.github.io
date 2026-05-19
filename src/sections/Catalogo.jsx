import { Brain, Timer, Infinity as InfinityIcon, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs block mb-3">Nossos Motores de Jogo</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Catálogo de Ativações 3D</h2>
            <p className="text-slate-400 text-base md:text-lg">
              Selecione a dinâmica que melhor se alinha com sua estratégia de marketing e público-alvo. Customizamos tudo no Blender e na Unity para
              seu stand em tempo recorde.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
          <ScrollReveal direction="left" delay={100}>
            <TiltCard className="h-full">
              <div className="h-full rounded-3xl overflow-hidden glass-panel border border-slate-800 flex flex-col group relative">
                <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950"></div>
                  <Brain className="w-20 h-20 text-indigo-500/20 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-500 relative z-10" />
                </div>
                <div className="p-8 flex-grow flex flex-col relative z-20 bg-slate-950/90">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold mb-4 w-fit">
                    Memorização & Branding
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">Mnemônica Corp</h4>
                  <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    <strong>Jogo da Memória 3D.</strong> Dinâmica tátil projetada para a fixação de novos produtos, lançamentos ou elementos visuais
                    de rebranding. Ensina conceitos complexos ao público de forma leve e divertida.
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-slate-900">
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-indigo-400 shrink-0" /> Alto impacto na fixação de valor
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-indigo-400 shrink-0" /> Ideal para treinamentos e lançamentos
                    </li>
                  </ul>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <TiltCard className="h-full">
              <div className="h-full rounded-3xl overflow-hidden glass-panel border border-orange-500/20 flex flex-col group relative lg:-translate-y-6 shadow-xl shadow-orange-950/5">
                <div className="absolute top-4 right-4 z-20 bg-orange-500 text-white text-[10px] tracking-widest font-bold px-3 py-1 rounded-full shadow-[0_0_15px_#f97316]">
                  CAMPEÃO DE RETENÇÃO
                </div>
                <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-slate-950 to-slate-950"></div>
                  <Timer className="w-20 h-20 text-orange-500/20 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-500 relative z-10" />
                </div>
                <div className="p-8 flex-grow flex flex-col relative z-20 bg-slate-950/90">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold mb-4 w-fit">
                    Velocidade & Fila Rápida
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">HyperTiming</h4>
                  <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    <strong>Reflexo e Velocidade 3D.</strong> Jogo de ritmo acelerado no qual os visitantes testam a agilidade motora contra o tempo.
                    Excelente para gerenciar a entrega de brindes de forma meritocrática com base na pontuação.
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-slate-900">
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-orange-400 shrink-0" /> Maior fluxo de pessoas por hora
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-orange-400 shrink-0" /> Premiação dinâmica de brindes
                    </li>
                  </ul>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <TiltCard className="h-full">
              <div className="h-full rounded-3xl overflow-hidden glass-panel border border-slate-800 flex flex-col group relative">
                <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950"></div>
                  <InfinityIcon className="w-20 h-20 text-blue-500/20 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500 relative z-10" />
                </div>
                <div className="p-8 flex-grow flex flex-col relative z-20 bg-slate-950/90">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold mb-4 w-fit">
                    Imersão Visual Premium
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">Infinite Brand 3D</h4>
                  <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    <strong>Corrida Infinita 3D.</strong> Nosso produto de maior apelo imersivo. O personagem (que pode ser o seu próprio produto ou
                    mascote) corre por cenários tridimensionais coletando pontos. Ideal para projeções em painéis de LED gigantes.
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-slate-900">
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0" /> Ranking interativo em tempo real
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0" /> Pronto para Realidade Aumentada (AR)
                    </li>
                  </ul>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
