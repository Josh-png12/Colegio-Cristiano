"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { galeria } from "@/data/mockData";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export function VidaEscolar() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galeria)[0] | null
  >(null);

  return (
    <section id="vida-escolar" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Descubre nuestro colegio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              La vida en el Colegio CCP
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Espacios dinámicos donde la curiosidad, la creatividad y la fe se
              encuentran.
            </p>
          </FadeIn>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galeria.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              aria-label={`Ver imagen: ${item.titulo}`}
            >
              <div className={`relative w-full ${item.height}`}>
                <Image
                  src={item.url}
                  alt={item.titulo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <h3 className="text-white font-heading font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.titulo}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.titulo}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar galería"
            >
              <X size={28} />
            </motion.button>

            <div className="relative w-full max-w-5xl aspect-[4/3]">
              <Image
                src={selectedImage.url.replace("w=800", "w=1400")}
                alt={selectedImage.titulo}
                fill
                sizes="90vw"
                className="object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
                priority
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 text-white font-heading text-2xl font-bold"
            >
              {selectedImage.titulo}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
