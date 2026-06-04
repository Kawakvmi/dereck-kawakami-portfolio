import { Code2, Heart, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-700 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary-400" />
            <span className="text-lg font-bold text-white">
              DK<span className="text-gradient">.</span>dev
            </span>
          </div>

          {/* Center text */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>e</span>
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span>por Dereck Kawakami</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kawakvmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dereck-kawakami-ab08711bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/kawakvmi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Dereck Kawakami. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
