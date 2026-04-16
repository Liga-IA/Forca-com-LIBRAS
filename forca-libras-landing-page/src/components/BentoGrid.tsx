import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Brain, Users, GraduationCap, Accessibility, Cpu, Globe } from 'lucide-react';

const features = [
  {
    title: "Inteligência Artificial",
    description: "Utilizamos modelos avançados de Visão Computacional para reconhecer sinais em tempo real.",
    icon: Brain,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-purple/40 to-brand-blue/20",
  },
  {
    title: "Inclusão Social",
    description: "Promovendo a ponte entre a comunidade ouvinte e surda.",
    icon: Users,
    className: "bg-white/5",
  },
  {
    title: "Educação Lúdica",
    description: "Aprendizado através da gamificação com o Forca LIBRAS.",
    icon: GraduationCap,
    className: "bg-white/5",
  },
  {
    title: "Acessibilidade",
    description: "Desenvolvido com foco total em tecnologias assistivas.",
    icon: Accessibility,
    className: "bg-white/5",
  },
  {
    title: "Tecnologia de Ponta",
    description: "Machine Learning aplicado para impacto social real.",
    icon: Cpu,
    className: "md:col-span-2 bg-gradient-to-r from-brand-violet/30 to-brand-purple/30",
  },
  {
    title: "UFSC Araranguá",
    description: "Um projeto de extensão universitária de excelência.",
    icon: Globe,
    className: "bg-white/5",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Inovação e Impacto</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          O projeto IRIS combina tecnologia de ponta com o compromisso social de democratizar o ensino de LIBRAS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl p-8 glass transition-all hover:border-brand-blue/50",
              feature.className
            )}
          >
            <div className="relative z-10 flex flex-col h-full">
              <feature.icon className="w-8 h-8 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
