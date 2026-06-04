import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 via-dark-500/60 to-dark-500" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-500/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary-400 animate-glow-pulse" />
          <span className="text-sm font-medium text-primary-200">
            Front-End Developer & AI Enthusiast
          </span>
          <Cpu className="w-4 h-4 text-accent-400" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
        >
          <span className="text-white">Dereck</span>
          <br />
          <span className="text-gradient">Kawakami</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10"
        >
          Construindo interfaces modernas e{' '}
          <span className="text-primary-300 font-medium">inteligentes</span> com React,
          TypeScript e Inteligência Artificial. Transformando ideias em{' '}
          <span className="text-accent-400 font-medium">experiências digitais</span>{' '}
          excepcionais.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 text-white font-semibold rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-slate-300 font-semibold rounded-2xl border border-white/10 hover:border-primary-400/40 hover:bg-white/5 transition-all duration-300 hover:text-white"
          >
            Entrar em Contato
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 max-w-md mx-auto gap-8"
        >
          {[
            { value: '21+', label: 'Repositórios' },
            { value: '5+', label: 'Tecnologias' },
            { value: '∞', label: 'Dedicação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary-400 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
