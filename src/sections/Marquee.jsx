export default function Marquee() {
  const items = [
    'ATIVAÊ STUDIO',
    'JOGOS PARA STANDS',
    'ADVERGAMES WEB',
    'REDUNDÂNCIA SIMULTÂNEA',
    'CAPTAÇÃO DE LEADS',
    'MAXIMIZAÇÃO DE ROI',
    'SEM DOWNLOAD DE APPS',
    'SUPORTE PRESENCIAL INCLUSO',
    'SAMPA GAMES',
  ];

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800/50 py-4 overflow-hidden relative z-10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      <div className="animate-marquee items-center gap-16 font-bold text-slate-600 text-xl tracking-widest uppercase">
        {[...items, ...items].map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
