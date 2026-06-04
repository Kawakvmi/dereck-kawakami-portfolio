import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Code, Palette, Server, Wrench, Brain, Layers } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Front-End Core',
    color: 'from-primary-500 to-primary-700',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Frameworks & Libs',
    color: 'from-accent-500 to-accent-600',
    skills: [
      { name: 'React', level: 78 },
      { name: 'Webpack', level: 65 },
      { name: 'Module Federation', level: 60 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Design & UX',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Responsive Design', level: 88 },
      { name: 'Flexbox & Grid', level: 85 },
      { name: 'UI/UX Principles', level: 70 },
      { name: 'Performance', level: 75 },
    ],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Back-End & API',
    color: 'from-emerald-500 to-green-600',
    skills: [
      { name: 'REST APIs', level: 72 },
      { name: 'Node.js', level: 60 },
      { name: 'JSON/Fetch', level: 80 },
      { name: 'Git & GitHub', level: 78 },
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Inteligência Artificial',
    color: 'from-violet-500 to-purple-700',
    skills: [
      { name: 'Prompt Engineering', level: 75 },
      { name: 'AI-Assisted Dev', level: 80 },
      { name: 'ChatGPT Integration', level: 70 },
      { name: 'AI UX Patterns', level: 65 },
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Ferramentas',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'Chrome DevTools', level: 85 },
      { name: 'Lighthouse', level: 80 },
      { name: 'npm', level: 75 },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Decorations */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
            Competências
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Minhas <span className="text-gradient">Skills</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400">
            Tecnologias e ferramentas que utilizo para criar experiências digitais 
            modernas e inteligentes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-surface-light/50 transition-all duration-500 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cat.color} mb-4 text-white`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-5">{cat.title}</h3>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-mono text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-300 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + i * 0.1 + 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
