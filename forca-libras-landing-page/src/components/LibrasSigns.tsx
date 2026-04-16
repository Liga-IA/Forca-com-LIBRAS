import { motion } from 'motion/react';

const signs = [
  { letter: 'A', image: 'https://picsum.photos/seed/libras-a/200/200' },
  { letter: 'B', image: 'https://picsum.photos/seed/libras-b/200/200' },
  { letter: 'C', image: 'https://picsum.photos/seed/libras-c/200/200' },
  { letter: 'D', image: 'https://picsum.photos/seed/libras-d/200/200' },
  { letter: 'E', image: 'https://picsum.photos/seed/libras-e/200/200' },
  { letter: 'F', image: 'https://picsum.photos/seed/libras-f/200/200' },
];

export default function LibrasSigns() {
  return (
    <section className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <span className="text-brand-blue font-mono text-sm uppercase tracking-widest">Alfabeto Manual</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Sinais de LIBRAS</h2>
          </div>
          <p className="text-gray-400 max-w-md text-right">
            Aprenda os fundamentos da Língua Brasileira de Sinais através de uma interface interativa e intuitiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {signs.map((sign, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-4 text-center group"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-brand-dark">
                <img 
                  src={sign.image} 
                  alt={`Sinal da letra ${sign.letter}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-display font-bold text-brand-blue">{sign.letter}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
