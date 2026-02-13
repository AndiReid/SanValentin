
# 💘 Landing Page: "¿Quieres ser mi San Valentín, Adriana?"

Una experiencia interactiva, moderna y romántica para crear su primer gran recuerdo juntos.

---

## 🎨 Diseño & Estética
- **Fondo**: Slate-900 oscuro elegante
- **Acentos**: Gradientes neón suaves en rosa (#F472B6) y cian (#22D3EE)
- **Tipografía**: Inter, bold y moderna
- **Estilo**: Bento Grid inspirado en Apple/Linear con bordes redondeados, glassmorphism sutil y sombras neón

---

## 📱 Estructura de la Página

### 1. Hero Section — "Hola, Adriana 👋"
- Texto principal con animación fade-in escalonada
- Primero aparece: **"Hola, Adriana 👋"**
- Luego: **"Quizás no tenemos un álbum de fotos todavía..."**
- Finalmente: **"...pero tengo un plan para empezar a llenarlo."**
- Partículas flotantes decorativas (corazones, estrellas) con movimiento sutil
- Scroll indicator animado para invitar a bajar

### 2. Sección "3 Razones" — Bento Grid
Tres tarjetas con bordes brillantes tipo neón y efectos hover (scale + glow):
- ⭐ **"Tienes una energía increíble ✨"** — Icono Star animado
- 🧩 **"Me encanta cómo conectamos 🧩"** — Icono Puzzle animado
- 🚀 **"Tengo muchas ganas de conocerte más 🚀"** — Icono Rocket animado

Cada tarjeta tendrá glassmorphism, gradiente sutil y animación de entrada al hacer scroll.

### 3. La Propuesta — El Juego del Botón
- Contenedor central con borde animado (gradiente giratorio brillante)
- Texto grande: **"Adriana, ¿quieres ser mi San Valentín?"**
- **Botón "SÍ, OBVIO 💖"**: Grande, rosa/verde brillante, ocupa ~50% del ancho, con efecto pulse
- **Botón "No"**: Pequeño, gris, con **lógica de escape** — huye del cursor cada vez que el mouse se acerca, haciéndolo imposible de clickear
- El botón "No" se moverá a posiciones aleatorias dentro de la pantalla con transiciones rápidas

### 4. Reward — El Ticket Digital 🎫
Al hacer click en "SÍ":
- **Explosión de confetti** en pantalla completa
- Transición suave a una nueva vista
- **Ticket digital estilo boarding pass** con rotación 3D al aparecer:
  - 🎬 **Evento**: First Valentine's Date
  - 👩 **Pasajera**: Adriana
  - 📅 **Fecha**: 14 de Febrero, 2026
  - 🎯 **Misión**: Pasarla increíble
  - 📱 **Código QR falso** con texto "ADRI-2026"
  - Diseño con línea punteada de corte, bordes redondeados y estética premium

---

## ✨ Animaciones & Interactividad
- Todas las entradas con fade-in y slide-up escalonados (Framer Motion)
- Hover effects en tarjetas: scale, glow neón, elevación
- Botón "No" con movimiento rápido al detectar proximidad del mouse
- Ticket con flip 3D al revelarse
- Confetti al aceptar
- Partículas decorativas flotantes en el fondo

---

## 🛠 Tecnologías
- React + TypeScript + Tailwind CSS
- Framer Motion para animaciones
- Lucide React para iconos
- Canvas-confetti para la explosión de confetti
- CSS transforms 3D para el ticket
