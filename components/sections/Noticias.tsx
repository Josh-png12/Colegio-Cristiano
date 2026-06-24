"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { noticias } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export function Noticias() {
  return (
    <section id="noticias" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <FadeIn direction="right">
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3">
                Mantente informado
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.05]">
                Últimas noticias
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <Button variant="outline" className="gap-2 group text-sm">
              Ver todas{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {noticias.slice(0, 3).map((noticia, index) => (
            <motion.article
              key={noticia.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary mb-3 font-medium">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{noticia.fecha}</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors duration-300">
                  {noticia.titulo}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6 flex-grow leading-relaxed">
                  {noticia.extracto}
                </p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:text-secondary transition-colors mt-auto w-fit group/btn">
                  Leer más{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
