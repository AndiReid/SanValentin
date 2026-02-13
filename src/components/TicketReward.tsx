import { motion } from "framer-motion";

const TicketReward = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="w-full max-w-sm sm:max-w-md"
      >
        <div
          className="glass rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 0 60px hsl(330 80% 72% / 0.2), 0 0 120px hsl(187 92% 53% / 0.1)",
          }}
        >
          {/* Header */}
          <div
            className="px-5 sm:px-8 py-5 sm:py-6"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 72% / 0.3), hsl(187 92% 53% / 0.2))",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Boarding Pass</p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gradient">Valentine's Day</h3>
              </div>
              <span className="text-4xl">💘</span>
            </div>
          </div>

          {/* Dotted line */}
          <div className="border-t-2 border-dashed border-white/10 mx-4" />

          {/* Body */}
          <div className="px-5 sm:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">🎬 Evento</p>
                <p className="font-bold text-foreground">First Valentine's Date</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">👩 Pasajera</p>
                <p className="font-bold text-primary">Adriana</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">📅 Fecha</p>
                <p className="font-bold text-foreground">14 de Febrero, 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">🎯 Misión</p>
                <p className="font-bold text-secondary">Pasarla increíble</p>
              </div>
            </div>

            {/* Dotted line */}
            <div className="border-t-2 border-dashed border-white/10" />

            {/* QR Code fake */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-foreground/10 rounded-xl flex items-center justify-center border border-white/10">
                  <div className="grid grid-cols-5 gap-[2px]">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2.5 h-2.5 rounded-[1px]"
                        style={{
                          backgroundColor:
                            Math.random() > 0.4
                              ? "hsl(330 80% 72% / 0.8)"
                              : "hsl(187 92% 53% / 0.5)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground">ADRI-2026</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">GATE</p>
                <p className="text-3xl font-extrabold text-gradient">A14</p>
                <p className="text-xs text-muted-foreground mt-1">SEAT 💕</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 sm:px-8 py-4 text-center" style={{ background: "hsl(330 80% 72% / 0.08)" }}>
            <p className="text-sm text-muted-foreground">
              Este ticket es válido para <span className="text-primary font-semibold">una cita inolvidable</span> ✨
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TicketReward;
