import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, [role="button"]');
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-[100]">
      <div
        className="absolute w-6 h-6 border-2 border-orange-500 rounded-full transition-all duration-75 ease-out flex items-center justify-center mix-blend-screen pointer-events-none"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: `translate(-50%, -50%) scale(${isHoveringClickable ? 1.4 : 1})`,
          backgroundColor: isHoveringClickable ? 'rgba(249, 115, 22, 0.15)' : 'transparent',
        }}
      >
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] pointer-events-none"></div>
      </div>
    </div>
  );
}
