import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AISection from './components/AISection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-500 text-slate-200 overflow-x-hidden">
      <ParticlesBg />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
