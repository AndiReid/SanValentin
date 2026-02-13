import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ProposalSectionProps {
  onAccept: () => void;
}

const ProposalSection = ({ onAccept }: ProposalSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [escaped, setEscaped] = useState(0);

  const escapeNo = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    // Keep button within visible bounds with padding
    const padX = 60;
    const padY = 30;
    const maxX = (rect.width / 2) - padX;
    const maxY = (rect.height / 2) - padY;
    setNoPos({
      x: (Math.random() * 2 - 1) * maxX,
      y: (Math.random() * 2 - 1) * Math.min(maxY, 120),
    });
    setEscaped((p) => p + 1);
  }, []);

  const handleYes = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#F472B6", "#22D3EE", "#FBBF24", "#A78BFA"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 140,
        origin: { y: 0.4 },
        colors: ["#F472B6", "#22D3EE", "#FBBF24"],
      });
    }, 300);
    setTimeout(onAccept, 800);
  };

  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative glass rounded-3xl p-6 sm:p-10 md:p-16 max-w-2xl w-full text-center overflow-visible"
        style={{
          boxShadow: "0 0 40px hsl(330 80% 72% / 0.15), 0 0 80px hsl(187 92% 53% / 0.1)",
        }}
      >
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] overflow-hidden">
          <div
            className="absolute inset-[-50%] w-[200%] h-[200%]"
            style={{
              background: "conic-gradient(from 0deg, hsl(330 80% 72%), hsl(187 92% 53%), hsl(330 80% 72%))",
              animation: "spin-slow 4s linear infinite",
            }}
          />
          <div className="absolute inset-[1px] rounded-3xl bg-card" />
        </div>

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-10 leading-tight"
          >
            Adriana, ¿quieres ser mi{" "}
            <span className="text-gradient">San Valentín</span>? 💘
          </motion.h2>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="w-full max-w-md py-4 sm:py-5 px-8 sm:px-10 rounded-2xl text-lg sm:text-xl font-bold text-background active:scale-95 transition-transform"
              style={{
                background: "linear-gradient(135deg, hsl(330 80% 72%), hsl(340 90% 65%))",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            >
              SÍ, OBVIO 💖
            </motion.button>

            <div className="relative h-16 sm:h-12 w-full flex items-center justify-center">
              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                onMouseEnter={escapeNo}
                onTouchStart={(e) => {
                  e.preventDefault();
                  escapeNo();
                }}
                className="absolute px-4 py-2 text-sm rounded-lg bg-muted text-muted-foreground select-none touch-none"
              >
                {escaped > 3 ? "¡No puedes! 😜" : "No"}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProposalSection;
