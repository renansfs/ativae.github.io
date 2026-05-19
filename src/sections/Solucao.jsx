import { Users, BarChart3, Handshake } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const solutions = [
  {
    icon: Users,
    color: 'text-orange-500',
    title: 'Atração Imediata',
    desc: "A estética dos nossos minijogos cria o efeito de 'fila magnética'. A curiosidade de competir e pontuar retém as pessoas no espaço do seu stand por mais tempo.",
  },
  {
    icon: BarChart3,
    color: 'text-blue-500',
    title: 'Coleta Inteligente',
    desc: 'Integramos formulários dinâmicos e intuitivos no início ou no fim da dinâmica. Capture e-mails, cargos e telefones de maneira amigável, transparente e orgânica.',
  },
  {
    icon: Handshake,
    color: 'text-indigo-500',
    title: 'Customização Express',
    desc: 'Estrutura White Label: adaptamos cores, logotipos e produtos da sua marca diretamente em nossos motores 3D em poucos dias, poupando tempo e orçamento de desenvolvimento.',
  },
];

export default function Solucao() {
  return (
    <section id="solucao" className="py-24 relative z-10 bg-slate-900/20 border-y border-slate-900/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal direction="up">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs block mb-3">Como Nós Resolvemos</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Gamificação Corporativa Focada em ROI</h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              A <strong>Ativaê Studio</strong> nasceu para preencher a lacuna do marketing de experiência. Criamos jogos 3D White Label estáveis,
              atraentes e em conformidade estrita com a LGPD, focados em transformar visitantes curiosos em leads quentes em poucos minutos de
              interação lúdica.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <ScrollReveal direction="up" delay={i * 100} key={i}>
              <div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-slate-700/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-slate-800/80 transition-colors">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
