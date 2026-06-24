"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    const handleError = () => setVideoLoaded(false);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Force play attempt
    video.play().catch(() => setVideoLoaded(false));

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[700px] w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero - Colegio Cristiano Psicopedagógico"
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        {/* Base image with parallax */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover scale-110"
            quality={90}
          />
        </motion.div>

        {/* Video overlay — plays on top of image */}
        <div
          className={`absolute inset-0 z-[1] transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-110"
            aria-hidden="true"
          >
            <source src="/videos/hero-mock.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Strong gradient overlays for text readability */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/50 via-transparent to-black/20" />
        {/* Radial vignette */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="container relative z-20 mx-auto px-5 sm:px-6 text-center text-white pt-16 pb-20"
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-sm sm:text-base md:text-xl tracking-[0.25em] sm:tracking-[0.35em] uppercase text-amber-400/90 mb-5 sm:mb-8 font-semibold"
          role="doc-subtitle"
        >
          Colegio Cristiano Psicopedagógico
        </motion.p>

        {/* Main Title — MASSIVE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] font-extrabold mb-5 sm:mb-8 tracking-tighter"
        >
          Crece con{" "}
          <span className="text-secondary drop-shadow-[0_0_50px_rgba(245,158,11,0.5)]">
            Propósito
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 sm:mb-14 max-w-4xl mx-auto font-light text-white/80 leading-relaxed px-2"
        >
          Formamos líderes con valores cristianos, innovación STEM y
          una mente abierta al futuro.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 sm:px-0"
        >
          <Button
            size="lg"
            variant="accent"
            className="text-lg sm:text-xl px-10 sm:px-12 py-5 sm:py-6 rounded-full w-full sm:w-auto shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:scale-105 transition-all duration-300"
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
            className="text-lg sm:text-xl px-10 sm:px-12 py-5 sm:py-6 rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/25 hover:border-white/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium">
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
        >
          <ChevronDown className="text-white/70 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
