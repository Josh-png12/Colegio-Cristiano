"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo — educativa y profesional */}
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

      {/* Overlay sutil para legibilidad — degradado suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight"
        >
          {["Crece", "con", "Propósito"].map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className={`inline-block ${
                word === "Propósito" ? "text-amber-400" : "text-white"
              } ${index > 0 ? "ml-2" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 max-w-3xl text-white/90 font-light"
        >
          Formamos líderes con valores cristianos, innovación STEM y una mente
          abierta al futuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <button
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-full border border-white/30"
            onClick={() => alert("Ver video completo (próximamente)")}
          >
            <span className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 text-blue-900 ml-1" />
            </span>
            <span className="text-white font-medium text-sm tracking-wider uppercase">
              Ver Video Completo
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
