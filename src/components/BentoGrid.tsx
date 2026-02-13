import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Puzzle, Rocket } from "lucide-react";

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const BentoCard = ({ icon, title, delay }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseMove={handleMouseMove}
      className="group relative glass rounded-2xl p-6 sm:p-8 cursor-default overflow-hidden"
      style={{
        background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(330 80% 72% / 0.08), transparent 60%)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(187 92% 53% / 0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className="text-primary"
        >
          {icon}
        </motion.div>
        <p className="text-lg font-semibold text-foreground">{title}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/40 transition-colors duration-500" />
    </motion.div>
  );
};

const BentoGrid = () => {
  const cards = [
    { icon: <Star size={48} strokeWidth={1.5} />, title: "Tienes una energía increíble ✨", delay: 0 },
    { icon: <Puzzle size={48} strokeWidth={1.5} />, title: "Me encanta cómo conectamos 🧩", delay: 0.15 },
    { icon: <Rocket size={48} strokeWidth={1.5} />, title: "Tengo muchas ganas de conocerte más 🚀", delay: 0.3 },
  ];

  return (
    <section className="min-h-[80dvh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-gradient"
        >
          3 razones por las que eres tú 💫
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <BentoCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
