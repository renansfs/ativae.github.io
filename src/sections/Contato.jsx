import { Zap, Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contato() {
  return (
    <section id="contato" className="py-24 relative z-10 overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-br from-orange-600 via-red-600 to-blue-800 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.15)] group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA2KSIvPjwvc3ZnPg==')] animate-[grid-move_25s_linear_infinite] pointer-events-none -z-10"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-12 transition-transform duration-500 group-hover:rotate-0">
                <Zap className="text-white w-10 h-10" />
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-md tracking-tight leading-tight">
                O calendário de feiras de SP não espera. <br /> Seu próximo stand está pronto?
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
                Não dispute a atenção dos prospects com as montadoras concorrentes. Vamos levar o Showroom Portátil de Demonstração até seu escritório
                em São Paulo para você testar fisicamente os jogos.
              </p>

              <form
                className="max-w-md mx-auto bg-slate-950/75 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-6 text-left">
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">E-mail Corporativo</label>
                  <input
                    type="email"
                    placeholder="seu.nome@suaempresa.com.br"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium text-sm"
                    required
                  />
                </div>

                <div className="mb-6 text-left">
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">Data Aproximada da Feira</label>
                  <input
                    type="text"
                    placeholder="Ex: Julho de 2026"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-orange-500 text-white font-extrabold text-lg hover:bg-orange-400 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95 shadow-lg shadow-orange-500/10"
                >
                  <Mail size={22} />
                  Agendar Demonstração Física
                </button>

                <div className="mt-4 text-center">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors underline font-semibold"
                  >
                    Ou fale direto conosco via WhatsApp Comercial
                  </a>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
