import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Brain, Sparkles, MessageSquare, Wand2, Bot, Send, Cpu, Zap } from 'lucide-react';

const aiCapabilities = [
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'AI-Powered UI Generation',
    desc: 'Utilizo ferramentas de IA para gerar componentes UI, acelerar prototipação e criar layouts responsivos de forma eficiente.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Prompt Engineering',
    desc: 'Domínio de técnicas avançadas de prompts para extrair o máximo de LLMs como ChatGPT, Claude e Copilot no desenvolvimento.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Chatbot Interfaces',
    desc: 'Criação de interfaces conversacionais modernas integradas a APIs de IA para experiências interativas no front-end.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Smart Components',
    desc: 'Desenvolvimento de componentes React inteligentes que se adaptam ao comportamento do usuário com lógica baseada em IA.',
    color: 'from-amber-500 to-orange-600',
  },
];

const chatMessages = [
  { role: 'user' as const, text: 'Crie um componente React de card responsivo' },
  { role: 'ai' as const, text: 'Aqui está um card responsivo com Tailwind CSS, animações suaves e suporte a dark mode. Inclui imagem, título, descrição e botão CTA com hover effects...' },
  { role: 'user' as const, text: 'Adicione integração com API REST' },
  { role: 'ai' as const, text: 'Adicionei useEffect com fetch, loading states, error handling e skeleton placeholder. O componente agora busca dados dinamicamente...' },
];

export default function AISection() {
  const { ref, inView } = useInView(0.1);
  const [, setActiveChat] = useState(0);
  const [inputText, setInputText] = useState('');

  return (
    <section id="ai" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-4">
            <Brain className="w-4 h-4 text-primary-400 animate-glow-pulse" />
            <span className="text-sm font-medium text-primary-200">Inteligência Artificial</span>
            <Sparkles className="w-4 h-4 text-accent-400 animate-glow-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Desenvolvimento com <span className="text-gradient">IA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Integro Inteligência Artificial no meu fluxo de desenvolvimento para criar 
            soluções mais rápidas, inteligentes e inovadoras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* AI Capabilities */}
          <div className="space-y-4">
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-5 hover:bg-surface-light/50 transition-all duration-500 group cursor-pointer"
                onClick={() => setActiveChat(i)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cap.color} text-white shrink-0 group-hover:scale-110 transition-transform`}>
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive AI Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
              <div className="relative">
                <Brain className="w-8 h-8 text-primary-400" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-dark-200" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">AI Dev Assistant</h3>
                <p className="text-xs text-slate-500">Powered by AI • Online</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Zap className="w-4 h-4 text-accent-400" />
                <span className="text-xs font-mono text-accent-400">GPT-4</span>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-6 space-y-4 h-80 overflow-y-auto">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-br-md'
                        : 'glass-light text-slate-300 rounded-bl-md'
                    }`}
                  >
                    {msg.role === 'ai' && (
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Sparkles className="w-3 h-3 text-primary-400" />
                        <span className="text-xs font-semibold text-primary-400">AI</span>
                      </div>
                    )}
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="flex justify-start"
              >
                <div className="glass-light px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Pergunte algo sobre meu trabalho com IA..."
                  className="flex-1 bg-dark-300/50 text-sm text-white placeholder-slate-500 px-4 py-3 rounded-xl border border-white/5 focus:border-primary-500/40 focus:outline-none transition-colors"
                />
                <button className="p-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-bold text-white mb-10">
            Meu Workflow com IA
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Ideação', desc: 'Uso IA para brainstorming e planejamento de arquitetura', icon: '💡' },
              { step: '02', title: 'Prototipação', desc: 'Geração rápida de componentes e layouts com AI assistida', icon: '⚡' },
              { step: '03', title: 'Desenvolvimento', desc: 'Copilot e ChatGPT aceleram o coding e debugging', icon: '🚀' },
              { step: '04', title: 'Otimização', desc: 'IA analisa performance e sugere melhorias no código', icon: '✨' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                className="glass rounded-2xl p-6 text-center hover:bg-surface-light/50 transition-all group relative"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-xs font-mono text-primary-400 mb-2">STEP {item.step}</div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 text-primary-500/40">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
