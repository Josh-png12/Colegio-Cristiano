"use client";

import { motion } from "framer-motion";
import { frases } from "@/data/mockData";

export function FrasesDeclarativas() {
  return (
    <section className="relative py-32 md:py-44 bg-primary overflow-hidden">
      {/* ── SVG Wave Top ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>

      {/* ── SVG Wave Bottom ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>

      {/* ── Decorative Blurs ── */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-16 md:space-y-24">
        {frases.map((frase, index) => (
          <motion.div
            key={frase.id}
            initial={{
              opacity: 0,
              x: frase.align === "left" ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className={`${
              frase.align === "right" ? "text-right" : "text-left"
            }`}
          >
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1]">
              {frase.texto}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
