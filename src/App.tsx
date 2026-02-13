import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Rocket, Puzzle, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Componente: Tarjeta Bento ---
const BentoCard = ({ icon: Icon, title, desc, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-${color}-400/50 transition-all group overflow-hidden relative`}
  >
    <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${color}-500/20 rounded-full blur-2xl group-hover:bg-${color}-500/30 transition-all`} />
    <div className="relative z-10">
      <div className={`w-10 h-10 rounded-lg bg-${color}-500/20 flex items-center justify-center mb-4 text-${color}-300`}>
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </motion.div>
);

// --- Componente: Ticket Final ---
const TicketView = () => (
  <motion.div
    initial={{ scale: 0, rotate: -10 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="bg-white text-slate-900 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
  >
    {/* Header del Ticket */}
    <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 flex justify-between items-center">
      <h2 className="text-white font-black text-2xl tracking-wider">BOARDING PASS</h2>
      <Ticket className="text-white/80" size={32} />
    </div>

    {/* Cuerpo del Ticket */}
    <div className="p-8 relative">
      {/* Círculos decorativos del ticket (muescas) */}
      <div className="absolute -left-3 top-1/2 w-6 h-6 bg-slate-900 rounded-full" />
      <div className="absolute -right-3 top-1/2 w-6 h-6 bg-slate-900 rounded-full" />
      
      <div className="space-y-6">
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">PASAJERA</p>
            <p className="text-xl font-bold">Adriana 👑</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">FECHA</p>
            <p className="text-xl font-bold">14 Feb 2026</p>
          </div>
        </div>

        <div className="flex justify-between">
           <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">DESTINO</p>
            <p className="text-xl font-bold">First Valentine's</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">HORA</p>
            <p className="text-xl font-bold">05:00 PM</p>
          </div>
        </div>

        <div className="pt-6 border-t border-dashed border-slate-300">
          <p className="text-center text-sm text-slate-500 italic">
            "Válido por una noche increíble y muchos recuerdos nuevos."
          </p>
          <div className="mt-4 flex justify-center">
             {/* Código de barras fake */}
            <div className="h-12 w-full bg-slate-200 rounded flex items-center justify-center tracking-[0.5em] font-mono text-slate-400 text-xs">
              ADRI-LOVE-2026-VIP
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [moved, setMoved] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Función para mover el botón "No"
  const moveButton = () => {
    if (!moved) setMoved(true);

    // Calcular límites de la ventana para que no se salga
    // Restamos el ancho aproximado del botón (150px) y el alto (50px)
    const maxX = window.innerWidth - 150; 
    const maxY = window.innerHeight - 100;

    // Generar coordenadas aleatorias dentro de los límites
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    setPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setYesPressed(true);
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-pink-500/30 relative overflow-x-hidden">
      {/* Fondo ambiental */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-screen">
        
        <AnimatePresence mode="wait">
          {!yesPressed ? (
            <motion.div 
              key="question"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl flex flex-col items-center gap-8 md:gap-10"
            >
              {/* Header */}
              <div className="text-center space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium"
                >
                  <Stars size={14} /> Solo una pregunta rápida...
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                  Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Adriana</span> 
                </h1>
                <p className="text-slate-400 text-lg max-w-md mx-auto">
                  Esta aventura comenzó hace un tiempo, y cada momento contigo ha sido mágico. Hoy, tengo una pregunta muy especial para ti...
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <BentoCard 
                  icon={Rocket}
                  title="Aventura"
                  desc="Cada día contigo es un nuevo viaje."
                  color="blue"
                  delay={0.4}
                />
                <BentoCard 
                  icon={Puzzle}
                  title="Conexión"
                  desc="Me encanta cómo encajamos."
                  color="purple"
                  delay={0.5}
                />
                <BentoCard 
                  icon={Heart}
                  title="Futuro"
                  desc="Creemos nuestros recuerdos."
                  color="pink"
                  delay={0.6}
                />
              </div>

              {/* La Pregunta */}
              <motion.div 
                className="mt-4 md:mt-8 p-6 md:p-8 w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 text-center space-y-6 shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  ¿Quieres ser mi San Valentín? 🌹
                </h2>
                
                {/* Contenedor de Botones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative min-h-[60px]">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYesClick}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl font-bold text-xl text-white shadow-lg shadow-pink-500/30 w-full md:w-auto z-20"
                  >
                    ¡SÍ, OBVIO! 💖
                  </motion.button>

                  {/* Botón NO Inteligente */}
                  <button
                    onMouseEnter={moveButton}
                    onTouchStart={moveButton}
                    onClick={moveButton}
                    style={{
                      position: moved ? 'fixed' : 'relative',
                      left: moved ? `${position.x}px` : 'auto',
                      top: moved ? `${position.y}px` : 'auto',
                      zIndex: 50,
                      transition: 'all 0.2s ease-out'
                    }}
                    className="px-8 py-4 bg-slate-800 text-slate-400 rounded-xl font-medium text-sm hover:bg-slate-700 w-full md:w-auto whitespace-nowrap"
                  >
                     {moved ? "¡No me atrapas! 😝" : "No, gracias"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // Vista de Éxito
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6 w-full max-w-md"
            >
              <TicketView />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center space-y-2 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <p className="text-slate-300 font-medium">
                  Guarda este ticket 🎟️
                </p>
                <p className="text-sm text-slate-400">
                  Paso por ti a las 05:00 PM.<br/> 
                  Dress code: Formal<br/>
                  <span className="text-pink-400 font-bold">Te amo mucho muchote ❤️</span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}