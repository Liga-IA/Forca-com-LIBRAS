import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-blue font-mono text-sm uppercase tracking-widest">Demonstração</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">Como funciona o IRIS?</h2>
          <div className="space-y-6 text-gray-400">
            <p>
              O sistema utiliza sua webcam para capturar os movimentos das mãos. Nossa IA processa cada frame, identificando os pontos-chave e traduzindo-os para letras do alfabeto LIBRAS.
            </p>
            <ul className="space-y-4">
              {[
                "Reconhecimento em tempo real",
                "Feedback visual instantâneo",
                "Dicionário completo de sinais",
                "Modo de prática guiada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden glass p-4">
            <div className="w-full h-full rounded-[30px] bg-brand-purple/20 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/iris-demo/800/800" 
                alt="IRIS Demo Video" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-24 h-24 text-white/80 group-hover:text-brand-blue transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold">IA Ativa</p>
                <p className="text-xs text-gray-400">98.4% de precisão</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
