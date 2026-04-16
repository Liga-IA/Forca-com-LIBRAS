import { motion } from 'motion/react';
import { ThumbsUp, Play, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-sm font-medium text-brand-blue/80 uppercase tracking-wider">Projeto IRIS • UFSC</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 glass rounded-2xl flex items-center justify-center border-brand-blue/30">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight">
              Forca <span className="text-gradient">LIBRAS</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Teste suas habilidades em LIBRAS e descubra as palavras através de uma experiência lúdica e tecnológica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-brand-blue rounded-2xl font-bold text-lg flex items-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(0,163,255,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <ThumbsUp className="w-6 h-6" />
              Iniciar o jogo
            </motion.button>

            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              Ver demonstração <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Game Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-4 shadow-2xl overflow-hidden border-white/5">
            <div className="aspect-video rounded-2xl bg-brand-dark/50 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/game-preview/1200/675?blur=2" 
                alt="Game Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue/90 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-full flex items-center justify-center animate-bounce">
            <span className="text-4xl">🤟</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
