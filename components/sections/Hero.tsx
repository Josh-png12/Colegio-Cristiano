"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo - siempre cubre toda la pantalla */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop"
          alt="Estudiantes en el aula"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay sutil - mejora la legibilidad sin oscurecer demasiado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Contenido centrado - 100% responsivo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center text-white">
        {/* Línea decorativa "Colegio CCP" */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-amber-400/80 font-semibold mb-2 sm:mb-3"
        >
          Colegio CCP
        </motion.p>

        {/* Título principal - escalable en todos los tamaños */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-[1.1] max-w-5xl"
        >
          {["Crece", "con", "Propósito"].map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className={`inline-block ${
                word === "Propósito"
                  ? "text-amber-400 drop-shadow-lg"
                  : "text-white"
              } ${index > 0 ? "ml-1 sm:ml-2" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo - legible en móvil y desktop */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl mt-3 sm:mt-4 max-w-2xl lg:max-w-3xl text-white/90 font-light px-2"
        >
          Formamos líderes con valores cristianos, innovación STEM y una mente
          abierta al futuro.
        </motion.p>

        {/* Botón - táctil y visible en todos los dispositivos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 sm:mt-8"
        >
          <button
            className="group flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/30"
            onClick={() => alert("Ver video completo (próximamente)")}
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 ml-0.5 sm:ml-1" />
            </span>
            <span className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase">
              Ver Video Completo
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
