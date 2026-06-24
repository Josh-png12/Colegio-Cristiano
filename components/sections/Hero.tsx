"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const HERO_FALLBACK =
  "https://picsum.photos/1920/1080?random=colegio";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsVideoLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    // Reproducción con manejo de promesa
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
        })
        .catch((error) => {
          console.log("Error controlado en reproducción automática:", error);
        });
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.pause();
      video.src = "";
      video.load();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster={HERO_FALLBACK}
        >
          <source src="/videos/hero-mock.mp4" type="video/mp4" />
          <Image
            src={HERO_FALLBACK}
            alt="Colegio CCP"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </video>
      </div>

      {/* Overlay sutil — solo un degradado muy ligero en la parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold leading-tight"
        >
          {["Crece", "con", "Propósito"].map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className={`inline-block ${
                word === "Propósito" ? "text-amber-400" : "text-white"
              } ${index > 0 ? "ml-3" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 max-w-4xl text-white/90 font-light leading-relaxed"
        >
          Formamos líderes con valores cristianos, innovación STEM y una mente
          abierta al futuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10"
        >
          <button
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-full border border-white/30"
            onClick={() => {
              alert("Abrir video");
            }}
          >
            <span className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 text-blue-900 ml-1" />
            </span>
            <span className="text-white font-medium text-sm tracking-wider uppercase">
              Ver Video Completo
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
