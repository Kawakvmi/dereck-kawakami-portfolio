import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { User, MapPin, GraduationCap, Rocket, Heart, Brain } from 'lucide-react';

const highlights = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'Criativo & Motivado',
    desc: 'Sempre aprendendo e me desafiando a crescer como desenvolvedor.',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'IA Aplicada',
    desc: 'Integrando Inteligência Artificial em soluções front-end modernas.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'UX First',
    desc: 'Foco em experiências digitais que encantam o usuário.',
  },
];

export default function About() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto lg:mx-0">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl blur-2xl" />
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden glow-border">
                <img
                  src="/images/profile-avatar.jpg"
                  alt="Dereck Kawakami"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-12 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-300">Disponível para projetos</span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                Sobre Mim
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Olá! Eu sou o{' '}
              <span className="text-gradient">Dereck Kawakami</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-4">
              Sou uma pessoa criativa e motivada, sempre aprendendo e me desafiando a crescer. 
              Atualmente focado em iniciar minha jornada no desenvolvimento front-end — construindo 
              projetos reais para desenvolver habilidades sólidas em HTML, CSS, JavaScript e React.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              Meu diferencial está na aplicação de conceitos de Inteligência Artificial 
              integrados ao desenvolvimento web, criando experiências interativas e inteligentes 
              que vão além do convencional.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 glass-light px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-slate-300">Brasil</span>
              </div>
              <div className="flex items-center gap-2 glass-light px-4 py-2 rounded-full">
                <GraduationCap className="w-4 h-4 text-accent-400" />
                <span className="text-sm text-slate-300">Front-End Developer</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass-light hover:bg-white/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
