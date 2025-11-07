import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-600/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Alex Nakamoto. All rights reserved.</p>
          <p className="text-gray-500">Built with React • Tailwind • Framer Motion • Spline</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
