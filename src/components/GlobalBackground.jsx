export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[130px] animate-float"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-600/5 rounded-full blur-[110px] animate-float-delayed"></div>
    </div>
  );
}
