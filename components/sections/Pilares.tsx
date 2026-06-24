"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cross, Brain, Rocket } from "lucide-react";
import { pilares } from "@/data/mockData";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  Cross: <Cross className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
  Brain: <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
  Rocket: <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
};

export function Pilares() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section
      id="proyecto-educativo"
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-gray-50">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 pt-10 sm:pt-14 pb-6 sm:pb-8">
          <FadeIn>
            <p className="text-secondary font-heading font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
              Nuestro Proyecto Educativo
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-[1.05] max-w-3xl">
              Tres pilares que
              <br />
              construyen futuro
            </h2>
          </FadeIn>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-4 sm:gap-6 pl-4 md:pl-[max(2rem,calc((100vw-72rem)/2+1rem))]"
          >
            {pilares.map((pilar) => (
              <motion.div
                key={pilar.id}
                whileHover={{ y: -14, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className={`
                  relative flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[44vw] lg:w-[32vw]
                  bg-gradient-to-br ${pilar.gradient}
                  rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-14 text-white
                  shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-shadow duration-400
                  flex flex-col justify-between min-h-[280px] sm:min-h-[340px] md:min-h-[420px]
                  cursor-default
                `}
              >
                {/* Decorative elements */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white/8 blur-2xl" />
                <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/6 blur-xl" />

                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-md w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-5 sm:mb-8 shadow-lg">
                    {iconMap[pilar.icono]}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5 tracking-tight">
                    {pilar.titulo}
                  </h3>
                  <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
                    {pilar.descripcion}
                  </p>
                </div>

                {/* Accent bar */}
                <div className="mt-8 sm:mt-10 w-16 sm:w-20 h-1.5 bg-white/30 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
