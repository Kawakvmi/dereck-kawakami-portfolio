import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, MapPin, Send, ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

const socialLinks = [
  {
    icon: <GithubIcon className="w-6 h-6" />,
    label: 'GitHub',
    href: 'https://github.com/Kawakvmi',
    handle: '@Kawakvmi',
    color: 'hover:bg-gray-800 hover:border-gray-600',
  },
  {
    icon: <LinkedinIcon className="w-6 h-6" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dereck-kawakami-ab08711bb/',
    handle: 'Dereck Kawakami',
    color: 'hover:bg-blue-900/30 hover:border-blue-500/40',
  },
  {
    icon: <InstagramIcon className="w-6 h-6" />,
    label: 'Instagram',
    href: 'https://www.instagram.com/kawakvmi/',
    handle: '@kawakvmi',
    color: 'hover:bg-pink-900/30 hover:border-pink-500/40',
  },
];

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Vamos <span className="text-gradient">Conectar</span>?
          </h2>
          <p className="max-w-xl mx-auto text-slate-400">
            Estou sempre aberto a novas oportunidades e colaborações. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localização</p>
                  <p className="text-white font-medium">Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="text-green-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Disponível para projetos
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 glass rounded-xl p-4 transition-all duration-300 group ${social.color}`}
                >
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{social.label}</p>
                    <p className="text-xs text-slate-500">{social.handle}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Enviar Mensagem
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  const subject = `Contato Portfolio - ${name}`;
                  const body = `Nome: ${name}%0AEmail: ${email}%0A%0A${message}`;
                  window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Nome
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full bg-dark-300/50 text-white placeholder-slate-600 px-4 py-3 rounded-xl border border-white/5 focus:border-primary-500/40 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-dark-300/50 text-white placeholder-slate-600 px-4 py-3 rounded-xl border border-white/5 focus:border-primary-500/40 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Conte-me sobre seu projeto..."
                    className="w-full bg-dark-300/50 text-white placeholder-slate-600 px-4 py-3 rounded-xl border border-white/5 focus:border-primary-500/40 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
