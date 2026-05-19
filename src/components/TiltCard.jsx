import { useState, useRef } from 'react';

export default function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${rotate.y * 5 + 50}% ${rotate.x * -5 + 50}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}
