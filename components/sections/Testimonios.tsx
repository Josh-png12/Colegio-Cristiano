"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonios } from "@/data/mockData";
import { FadeIn } from "@/components/animations/FadeIn";

export function Testimonios() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Testimonios
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Lo que dice nuestra comunidad
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 text-secondary/15 w-16 h-16 group-hover:text-secondary/25 transition-colors duration-300" />

              <p className="text-gray-600 italic mb-8 relative z-10 text-lg leading-relaxed">
                &ldquo;{testimonio.testimonio}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary/30"
                />
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">
                    {testimonio.nombre}
                  </h4>
                  <p className="text-secondary text-sm font-medium">
                    {testimonio.cargo}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
