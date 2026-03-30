/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  User,
  Code2,
  ChevronRight,
  Terminal,
  ExternalLink
} from 'lucide-react';

const SKILLS = ['Python', 'GitHub', 'Automation'];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6 md:p-12 space-y-8">
      {/* Header Section - Inspired by the first image but simplified */}
      <header className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 simple-card flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative">
            <div className="w-32 h-32 border-2 border-border overflow-hidden bg-white/5">
              <img 
                src="/profile.png" 
                alt="Aldemir Sales" 
                className="w-full h-full object-cover object-[center_10%] grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-bg border border-border px-3 py-0.5 flex items-center gap-2">
              <div className="w-2 h-2 bg-white animate-pulse" />
              <span className="text-[9px] font-mono text-white uppercase tracking-widest">Online</span>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-text-muted font-mono text-[10px] tracking-widest uppercase">
              <Terminal size={12} />
              <span>Backend_Developer_In_Training</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="text-text-muted/40">&lt;</span>
              <span>Aldemir Sales</span><span className="text-white animate-blink">|</span>
              <span className="text-text-muted/40">/&gt;</span>
            </h1>

            <p className="text-text-muted text-sm leading-relaxed max-w-md">
              Desenvolvedor back-end em formação, focado em criar soluções eficientes, escaláveis e orientadas a boas práticas.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-text-muted font-mono text-[10px]">
              <div className="flex items-center gap-1.5">
                <MapPin size={12} />
                <span>Rio de Janeiro, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Action Cards */}
        <div className="flex flex-col gap-4">
          <div className="simple-card flex-1 flex flex-col justify-center">
            <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Current_Status</span>
            <h3 className="text-sm font-bold mt-1">Open to Work</h3>
          </div>
          <div className="simple-card flex-1 flex flex-col justify-center">
            <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Main_Focus</span>
            <h3 className="text-sm font-bold mt-1">Backend & Automation</h3>
          </div>
        </div>
      </header>

      {/* Navigation - Simplified tabs */}
      <nav className="flex gap-8 border-b border-border font-mono text-xs">
        {['about', 'experience', 'projects', 'contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-1 relative transition-colors uppercase tracking-widest ${activeTab === tab ? 'text-white font-bold' : 'text-text-muted hover:text-white'}`}
          >
            {`{${tab}}`}
            {activeTab === tab && (
              <motion.div 
                layoutId="navTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
              />
            )}
          </button>
        ))}
      </nav>

      {/* Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'about' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Skills */}
              <section className="simple-card space-y-6">
                <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase font-bold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-border font-mono text-[11px] text-text-muted hover:text-white transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="simple-card space-y-6">
                <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase font-bold">Formação</h2>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Análise e Desenvolvimento de Sistemas</h3>
                  <p className="text-text-muted text-sm">UniCesumar EAD</p>
                  <p className="text-[10px] font-mono text-text-muted/60 mt-2">2025 — Aug 2027 (Expected)</p>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <section className="simple-card space-y-6">
                <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase font-bold">Experience</h2>
                <div className="space-y-8">
                  <div className="border-l border-border pl-6 space-y-3 relative">
                    <div className="absolute w-2 h-2 bg-white -left-[4.5px] top-1.5" />
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-sm font-bold">Jovem Aprendiz Administrativo - Responsabilidade Social</h3>
                        <span className="text-[10px] font-mono text-text-muted">Mar 2025 — Present</span>
                      </div>
                      <p className="text-[11px] font-mono text-white/80">Águas do Rio • Aprendiz</p>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Atuação no suporte administrativo, gestão de planilhas e dados, além de participação em ações de campo voltadas à Responsabilidade Social, visando aprendizado prático e a conscientização das pessoas sobre seus direitos e deveres.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Microsoft Office', 'Gestão de Dados', 'Suporte Administrativo'].map(skill => (
                        <span key={skill} className="text-[9px] font-mono text-text-muted/60 uppercase tracking-widest">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <section className="simple-card space-y-6 group hover:border-white/30 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Sistema de Gerenciamento de Livros</h3>
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Academic Project — UniCesumar (ADS)</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/aldemirsalesdev/sistema-de-acervo-em-c" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="https://github.com/aldemirsalesdev/sistema-de-acervo-em-c" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed">
                  Sistema desenvolvido em linguagem C para cadastro, listagem, pesquisa e ordenação de livros em um acervo. 
                  Projeto avaliado com nota máxima, aplicando conceitos fundamentais de algoritmos e estruturas de dados.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-white uppercase tracking-widest">Funcionalidades</h4>
                    <ul className="text-[11px] text-text-muted space-y-2">
                      <li className="flex items-center gap-2">• Cadastro de até 20 livros</li>
                      <li className="flex items-center gap-2">• Pesquisa binária/sequencial por código</li>
                      <li className="flex items-center gap-2">• Ordenação por ano (Bubble Sort)</li>
                      <li className="flex items-center gap-2">• Menu interativo via terminal</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-white uppercase tracking-widest">Conceitos Aplicados</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Linguagem C', 'Structs', 'Vetores', 'Bubble Sort', 'string.h'].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/5 border border-border text-[9px] font-mono text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <section className="simple-card space-y-6">
                <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase font-bold">Contact_Me</h2>
                <p className="text-sm text-text-muted">
                  Sinta-se à vontade para entrar em contato para oportunidades ou colaborações.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="mailto:aldemirsalesmoreira@gmail.com" className="p-4 border border-border hover:border-white/30 transition-colors flex items-center gap-3">
                    <Mail size={16} className="text-text-muted" />
                    <span className="text-xs font-mono">aldemirsalesmoreira@gmail.com</span>
                  </a>
                </div>
              </section>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <section className="simple-card space-y-6">
            <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase font-bold">Socials</h2>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/aldemirsalesdev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs text-text-muted hover:text-white transition-colors group">
                <div className="flex items-center gap-3">
                  <Github size={16} />
                  <span>GitHub</span>
                </div>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/aldemirsales/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs text-text-muted hover:text-white transition-colors group">
                <div className="flex items-center gap-3">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </div>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="pt-12 pb-12 border-t border-border flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-[9px] font-mono text-text-muted tracking-[0.2em] uppercase">
          © 2026 <span className="text-white">Aldemir Sales</span> — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
