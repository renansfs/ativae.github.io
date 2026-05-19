import { useEffect, useRef } from 'react';

const CLICKABLE = 'a, button, input, textarea, select, label[for], [role="button"]';

export default function CustomCursor() {
  const positionerRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    const positioner = positionerRef.current;
    const ring = ringRef.current;
    if (!positioner || !ring) return;

    const applyPosition = () => {
      rafId.current = null;
      const { x, y } = pos.current;
      positioner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const schedulePosition = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(applyPosition);
      }
    };

    const setHovering = (next) => {
      if (next === hovering.current) return;
      hovering.current = next;
      ring.dataset.hover = next ? 'true' : 'false';
    };

    const handleMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setHovering(!!e.target.closest(CLICKABLE));
      schedulePosition();
    };

    const handleMouseLeave = () => {
      pos.current = { x: -100, y: -100 };
      setHovering(false);
      schedulePosition();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-[100]">
      <div
        ref={positionerRef}
        className="absolute top-0 left-0 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          ref={ringRef}
          data-hover="false"
          className="custom-cursor-ring absolute w-6 h-6 border-2 border-orange-500 rounded-full flex items-center justify-center mix-blend-screen pointer-events-none"
        >
          <div className="custom-cursor-dot w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
