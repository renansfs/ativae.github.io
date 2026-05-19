import { Zap } from 'lucide-react';

const sizes = {
  sm: {
    icon: 'w-9 h-9',
    letter: 'text-sm',
    zap: 'w-3.5 h-3.5',
    text: 'text-xl',
    gap: 'gap-2',
  },
  md: {
    icon: 'w-11 h-11',
    letter: 'text-base',
    zap: 'w-4 h-4',
    text: 'text-2xl',
    gap: 'gap-2.5',
  },
};

export default function Logo({ size = 'sm', className = '' }) {
  const s = sizes[size] ?? sizes.sm;

  return (
    <div className={`flex items-center ${s.gap} font-bold tracking-tighter ${className}`}>
      <div className={`relative flex items-center justify-center ${s.icon} rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 shrink-0`}>
        <span className={`text-white ${s.letter}`}>A</span>
        <Zap className={`absolute -top-1 -right-1 ${s.zap} text-orange-300 animate-pulse`} />
      </div>
      <span className={`text-white ${s.text}`}>
        ATIVA<span className="text-orange-500">Ê</span>
      </span>
    </div>
  );
}
