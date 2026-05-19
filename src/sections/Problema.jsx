import { HelpCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const painPoints = [
  {
    num: '01',
    title: 'Panfletagem Obsoleta',
    desc: 'Materiais impressos são descartados na lixeira mais próxima. Zero engajamento de marca e nenhum contato capturado.',
  },
  {
    num: '02',
    title: 'O Wi-Fi do Pavilhão Cai',
    desc: 'Contratar links dedicados é caríssimo, e a rede compartilhada oscila. Jogos baseados em nuvem travam, fazendo você perder dados valiosos.',
  },
  {
    num: '03',
    title: 'Falta de Retenção',
    desc: 'O visitante passa pelo seu corredor em segundos. Sem um apelo dinâmico ou lúdico, ele não parará para conversar com seu time comercial.',
  },
  {
    num: '04',
    title: 'Burocracia de Hardware',
    desc: 'Alugar telas vazias de terceiros é caro e exige contratações complexas de logística. Você precisa de soluções integradas prontas para rodar.',
  },
];

export default function Problema() {
  return (
    <section id="problema" className="py-24 relative z-10 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs block mb-3">O Desafio dos Expositores</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                O alto custo de um stand invisível e ineficiente.
              </h2>
              <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed">
                Investir dezenas de milhares de reais em um espaço nos maiores pavilhões de São Paulo (como São Paulo Expo ou Expo Center Norte) e
                terminar o evento sem leads qualificados e com um stand vazio é o pesadelo de qualquer gestor de marca.
              </p>
              <div className="mt-8 p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-start gap-4">
                <HelpCircle className="text-orange-500 shrink-0 w-6 h-6 mt-1" />
                <p className="text-sm text-orange-200/80 leading-relaxed">
                  A panfletagem tradicional gera desperdício de papel e desinteresse do visitante. O seu stand precisa de{' '}
                  <strong>interatividade inteligente</strong> para reter a atenção nos corredores concorridos.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item, index) => (
                <ScrollReveal direction="up" delay={index * 100} key={index}>
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/60 transition-colors">
                    <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md">{item.num}</span>
                    <h4 className="text-lg font-bold text-white mt-4 mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
