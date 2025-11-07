import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="absolute inset-0 blur-md bg-fuchsia-500/40 rounded-full" />
              <Rocket className="relative text-fuchsia-300" size={20} />
            </div>
            <span className="font-semibold text-white tracking-wide group-hover:text-fuchsia-300 transition-colors">web3folio</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-1 relative inline-flex items-center text-sm font-medium text-white px-3 py-1.5 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 transition-colors"
            >
              Let’s Talk
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block w-full text-gray-200 hover:text-white px-3 py-2 rounded-md hover:bg-white/10 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center text-white px-3 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 transition-colors"
            >
              Let’s Talk
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
