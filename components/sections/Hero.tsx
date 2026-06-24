"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleError = () => setVideoFailed(true);
    video.addEventListener("error", handleError);
    // Timeout fallback: if video doesn't start playing in 3s, show image
    const timeout = setTimeout(() => {
      if (video.paused || video.readyState < 2) setVideoFailed(true);
    }, 3000);
    return () => {
      video.removeEventListener("error", handleError);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero - Colegio Cristiano Psicopedagógico"
    >
      {/* ── Background (image + optional video overlay) ── */}
      <div className="absolute inset-0 z-0">
        {/* Parallax image (always visible as base) */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
        </motion.div>

        {/* Video overlay (plays on top of image when available) */}
        {!videoFailed && (
          <div className="absolute inset-0 z-[1]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster={HERO_IMAGE}
              className="w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/videos/hero-mock.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-primary/30 to-transparent" />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="container relative z-20 mx-auto px-5 sm:px-6 text-center text-white pt-20 pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-xs sm:text-sm md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/70 mb-4 sm:mb-6"
          role="doc-subtitle"
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
            aria-label="Conoce nuestro proyecto educativo"
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
            aria-label="Ir a admisiones 2027"
          >
            Admisiones 2027
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-white/60 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
