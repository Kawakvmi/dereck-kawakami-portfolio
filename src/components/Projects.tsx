import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ExternalLink, Gauge, Code2, Utensils, Calculator, Database, Gamepad2, Car } from 'lucide-react';
import GithubIcon from './GithubIcon';

const projects = [
  {
    title: 'Agência Criativa Web',
    desc: 'Site fictício de uma agência digital com otimização de performance via Lighthouse. Design responsivo com Flexbox, CSS Grid, Unidades Relativas e boas práticas de HTML5 e CSS3.',
    image: '/images/project-agencia.jpg',
    tags: ['HTML5', 'CSS3', 'Responsive', 'Lighthouse', 'Performance'],
    icon: <Gauge className="w-5 h-5" />,
    github: 'https://github.com/Kawakvmi/agencia-criativa-web',
    highlight: 'Otimização de Performance',
    color: 'from-primary-500 to-violet-600',
  },
  {
    title: 'MFE Restaurante',
    desc: 'Aplicação de cardápio com arquitetura Microfrontend usando React e Webpack Module Federation. Container (host) com apps remotos de Cardápio e Pedido comunicando via Custom Events.',
    image: '/images/project-restaurante.jpg',
    tags: ['React', 'Webpack', 'Module Federation', 'MFE', 'Custom Events'],
    icon: <Utensils className="w-5 h-5" />,
    github: 'https://github.com/Kawakvmi/mfe-restaurante',
    highlight: 'Microfrontends',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Calculadora ICM',
    desc: 'Calculadora simples desenvolvida com HTML e JavaScript, aplicando conceitos de manipulação do DOM e lógica de programação.',
    image: '/images/project-calculator.jpg',
    tags: ['HTML', 'JavaScript', 'DOM', 'CSS'],
    icon: <Calculator className="w-5 h-5" />,
    github: 'https://github.com/Kawakvmi',
    highlight: 'Lógica de Programação',
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Formulário de Cadastro - API',
    desc: 'Aplicação web de formulário com integração a API RESTful, utilizando fetch para comunicação com servidor e manipulação de dados.',
    image: '/images/project-api.jpg',
    tags: ['JavaScript', 'REST API', 'Fetch', 'CRUD'],
    icon: <Database className="w-5 h-5" />,
    github: 'https://github.com/Kawakvmi',
    highlight: 'Integração API',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Jogo da Adivinhação',
    desc: 'Jogo interativo construído com JavaScript, onde o usuário tenta adivinhar um número. Prática de lógica condicional, loops e interação com o usuário.',
    image: '',
    tags: ['JavaScript', 'Lógica', 'Interatividade', 'DOM'],
    icon: <Gamepad2 className="w-5 h-5" />,
    github: 'https://github.com/Kawakvmi',
    highlight: 'Interatividade',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Simulação de Parquímetro',
    desc: 'Aplicação web de simulação de parquímetro com Programação Orientada a Objetos em JavaScript. Classes, encapsulamento e princípios SOLID.',
    image: '',
    tags: ['JavaScript', 'POO', 'Classes', 'OOP'],
    icon: <Car className="w-5 h-5" />,
    github: 'https://github.com/Kawakvmi',
    highlight: 'POO',
    color: 'from-purple-500 to-indigo-600',
  },
];

export default function Projects() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-600/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400">
            Cada projeto é uma oportunidade de aprendizado. Aqui estão alguns dos 
            meus trabalhos mais recentes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              {/* Image / Visual */}
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
                    <div className="text-white/30 scale-[3]">
                      {project.icon}
                    </div>
                  </div>
                )}

                {/* Highlight badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color}`}>
                    {project.icon}
                    {project.highlight}
                  </span>
                </div>

                {/* GitHub link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass text-white hover:text-primary-300 transition-colors inline-block"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-primary-300 bg-primary-500/10 rounded-lg border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group/link"
                >
                  <Code2 className="w-4 h-4" />
                  Ver Código
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Kawakvmi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
          >
            <GithubIcon className="w-5 h-5" />
            Ver Todos no GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
