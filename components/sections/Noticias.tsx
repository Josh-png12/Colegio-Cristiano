"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { noticias } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export function Noticias() {
  return (
    <section id="noticias" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn direction="right">
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                Mantente informado
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                Últimas noticias
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <Button variant="outline" className="gap-2 group">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-secondary mb-3 font-medium">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{noticia.fecha}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
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
