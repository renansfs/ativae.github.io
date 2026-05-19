import { ShieldCheck, Play, Zap, Gamepad2, Infinity as InfinityIcon } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

const features = [
  {
    icon: ShieldCheck,
    color: 'text-green-500',
    title: 'Arquitetura Offline-First (Sem quedas)',
    desc: 'Os jogos rodam 100% locais no hardware do stand. O sistema nunca trava e você nunca perde dados de captação de leads por oscilações ou quedas de internet do pavilhão.',
  },
  {
    icon: Play,
    color: 'text-blue-500',
    title: 'Solução Ponta a Ponta (Software + Hardware)',
    desc: 'Entregamos a solução completa. O licenciamento do software já inclui os totens ou tablets higienizados, polidos e totalmente configurados para rodar. Sem aluguéis de terceiros.',
  },
  {
    icon: Zap,
    color: 'text-orange-500',
    title: 'Dados Seguros (Criptografia & LGPD)',
    desc: 'Todos os dados coletados de prospects são processados localmente de forma segura e criptografada, aguardando a sincronização posterior em lote para a exportação direta no CRM.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 relative z-10 bg-slate-900/10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="left">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs block mb-3">Engenharia e Conectividade</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Estabilidade absoluta. Sem depender do Wi-Fi da feira.</h3>
              <p className="text-base text-slate-400 mt-6 mb-10 leading-relaxed">
                Trabalhamos com uma arquitetura de vanguarda criada para eliminar as dores de cabeça mais comuns na montagem e operação de tecnologia em
                feiras corporativas de São Paulo.
              </p>

              <div className="space-y-8">
                {features.map((item, i) => (
                  <div className="flex gap-5 group" key={i}>
                    <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-slate-950">
                      <item.icon className={item.color} size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg group-hover:text-orange-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-1/2 relative perspective-1000">
            <ScrollReveal direction="right">
              <TiltCard>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-orange-500/10 rounded-3xl blur-[70px] opacity-20 pointer-events-none"></div>
                <div className="relative glass-panel rounded-3xl p-10 aspect-square flex flex-col justify-center overflow-hidden border border-slate-800">
                  <div className="absolute top-0 right-0 p-8 opacity-5 mix-blend-screen pointer-events-none">
                    <InfinityIcon size={250} />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="inline-flex p-6 rounded-3xl bg-slate-950 border border-slate-900 mb-8 relative">
                      <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full animate-pulse"></div>
                      <Gamepad2 size={56} className="text-blue-400 relative z-10 animate-pulse" />
                    </div>
                    <h4 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Otimização & Custos</h4>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Como nossos códigos-base são modulares e parametrizáveis, conseguimos mudar as texturas e envelopar a identidade visual da sua marca
                      em dias. Sem custos adicionais abusivos de desenvolvimento sob demanda.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-400">
                      <span className="px-3.5 py-1.5 glass-panel rounded-full">ESTABILIDADE LOCAL</span>
                      <span className="px-3.5 py-1.5 glass-panel rounded-full">ENTREGA DE BRINDES</span>
                      <span className="px-3.5 py-1.5 glass-panel rounded-full">EXPORTAÇÃO DE LEADS</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
