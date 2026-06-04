import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'IA', href: '#ai' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-primary-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
              <Code2 className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" />
              <Sparkles className="w-3 h-3 text-accent-400 absolute -top-1 -right-1 animate-glow-pulse" />
            </div>
            <span className="text-xl font-bold text-white">
              DK<span className="text-gradient">.</span>dev
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Kawakvmi"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
            >
              GitHub
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/Kawakvmi"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 px-4 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
