export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center">
            <img
              src="/3.png"
              alt="Ativaê Logo Footer"
              className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-semibold text-xs text-slate-400 uppercase tracking-wider">
            <a href="#problema" className="hover:text-orange-500 transition-colors">
              O Desafio
            </a>
            <a href="#solucao" className="hover:text-orange-500 transition-colors">
              Nossa Solução
            </a>
            <a href="#catalogo" className="hover:text-orange-500 transition-colors">
              Motores de Jogo
            </a>
            <a href="#diferenciais" className="hover:text-orange-500 transition-colors">
              Diferenciais
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-600">
          <p>&copy; {new Date().getFullYear()} Ativaê Studio. Todos os direitos reservados. Conformidade estrita à LGPD.</p>
          <p className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/50 border border-slate-900">
            Apoiado estrategicamente por <strong className="text-orange-500">Sampa Games</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
