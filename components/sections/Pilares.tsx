"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cross, Brain, Rocket } from "lucide-react";
import { pilares } from "@/data/mockData";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  Cross: <Cross className="w-10 h-10 text-white" />,
  Brain: <Brain className="w-10 h-10 text-white" />,
  Rocket: <Rocket className="w-10 h-10 text-white" />,
};

export function Pilares() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress → horizontal translation
  // When scrollYProgress goes 0 → 1, we translate from 0% to -66% (3 cards → show all)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section
      id="proyecto-educativo"
      ref={sectionRef}
      className="relative h-[300vh]" // tall container for scroll room
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header stays fixed */}
        <div className="container mx-auto px-4 md:px-6 pt-12 pb-8">
          <FadeIn>
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Nuestro Proyecto Educativo
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight max-w-2xl">
              Tres pilares que construyen futuro
            </h2>
          </FadeIn>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-4 md:pl-[max(2rem,calc((100vw-72rem)/2+1rem))]"
          >
            {pilares.map((pilar) => (
              <motion.div
                key={pilar.id}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  relative flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[30vw]
                  bg-gradient-to-br ${pilar.gradient}
                  rounded-3xl p-10 md:p-12 text-white
                  shadow-xl hover:shadow-2xl transition-shadow duration-300
                  flex flex-col justify-between min-h-[340px]
                `}
              >
                {/* Decorative circle */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />

                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {iconMap[pilar.icono]}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                    {pilar.titulo}
                  </h3>
                  <p className="text-white/85 text-lg leading-relaxed">
                    {pilar.descripcion}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-8 w-16 h-1 bg-white/40 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
