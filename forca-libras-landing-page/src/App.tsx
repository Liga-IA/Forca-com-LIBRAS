import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import LibrasSigns from './components/LibrasSigns';
import VideoSection from './components/VideoSection';
import { motion } from 'motion/react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border-brand-blue/30">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">IRIS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#sinais" className="hover:text-white transition-colors">Sinais</a>
          <a href="#tecnologia" className="hover:text-white transition-colors">Tecnologia</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>

        <button className="px-5 py-2 bg-brand-blue/10 text-brand-blue rounded-xl text-sm font-bold hover:bg-brand-blue hover:text-white transition-all">
          Acessar Jogo
        </button>
      </div>
    </nav>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">O Projeto IRIS</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                O IRIS (Interface de Reconhecimento Interativo de Sinais) é um projeto de extensão da UFSC-Araranguá que busca facilitar o aprendizado de LIBRAS por meio de uma experiência lúdica e tecnológica.
              </p>
              <p>
                Além de promover o ensino, o IRIS pretende aproximar a comunidade ouvinte da comunidade surda, fomentando o respeito à diversidade linguística e cultural.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="p-3 glass rounded-xl">
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-xs uppercase tracking-wider">Impactados</p>
                </div>
                <div className="p-3 glass rounded-xl">
                  <p className="text-2xl font-bold text-white">UFSC</p>
                  <p className="text-xs uppercase tracking-wider">Instituição</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/ufsc-1/400/400" alt="UFSC Campus" className="rounded-2xl aspect-square object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/lia-1/400/400" alt="LIA Team" className="rounded-2xl aspect-square object-cover mt-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-black/40 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border-brand-blue/30">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">IRIS</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Transformando a educação e a inclusão através da Inteligência Artificial. Um projeto da Liga Acadêmica de IA (LIA) da UFSC.
            </p>
            <div className="flex gap-4">
              {[Github, Instagram, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-blue transition-colors">Sobre o Projeto</a></li>
              <li><a href="#sinais" className="hover:text-brand-blue transition-colors">Alfabeto Manual</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Repositório RepoAI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Institucional</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-blue transition-colors">UFSC Araranguá</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">LIA - Liga de IA</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Extensão Universitária</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Projeto IRIS. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ pela equipe IRIS & LIA</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <BentoGrid />
        <div id="sinais">
          <LibrasSigns />
        </div>
        <div id="tecnologia">
          <VideoSection />
        </div>
        
        {/* Call to Action Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass rounded-[40px] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/20 pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 relative z-10">Pronto para aprender?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
              Junte-se a centenas de alunos e comece sua jornada no aprendizado de LIBRAS hoje mesmo.
            </p>
            <button className="relative z-10 px-10 py-5 bg-white text-brand-dark rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
              Começar Agora
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

