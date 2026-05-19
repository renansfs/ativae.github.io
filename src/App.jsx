import CustomCursor from './components/CustomCursor';
import GlobalBackground from './components/GlobalBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Problema from './sections/Problema';
import Solucao from './sections/Solucao';
import Catalogo from './sections/Catalogo';
import Diferenciais from './sections/Diferenciais';
import Processo from './sections/Processo';
import Contato from './sections/Contato';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500 selection:text-white overflow-hidden relative">
      <CustomCursor />
      <GlobalBackground />
      <Header />
      <Hero />
      <Marquee />
      <Problema />
      <Solucao />
      <Catalogo />
      <Diferenciais />
      <Processo />
      <Contato />
      <Footer />
    </div>
  );
}
