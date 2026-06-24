"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-mock.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Content ── */}
      <div className="container relative z-20 mx-auto px-5 sm:px-6 text-center text-white pt-20 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-xs sm:text-sm md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/70 mb-4 sm:mb-6"
        >
          Colegio Cristiano Psicopedagógico
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-[2.5rem] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold mb-4 sm:mb-6 tracking-tight"
        >
          Crece con{" "}
          <span className="text-secondary drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
            Propósito
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto font-light text-white/85 leading-relaxed px-2"
        >
          Formamos líderes con valores, innovación y mente abierta al futuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <Button
            size="lg"
            variant="accent"
            className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-full w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("proyecto-educativo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Conócenos
          </Button>
          <Button
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("admisiones")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Admisiones 2027
          </Button>
        </motion.div>
      </div>

      {/* ── Scroll Indicator (hidden on very short screens) ── */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut" as const,
          }}
        >
          <ChevronDown className="text-white/60 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
