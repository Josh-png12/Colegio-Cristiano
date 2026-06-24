"use client";

import { motion } from "framer-motion";
import { Cross, Brain, Rocket, BookOpen, Sparkles, Heart, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const pilaresDetallados = [
  {
    id: 1,
    titulo: "Formación Cristiana",
    subtitulo: "Educar el espíritu, formar el carácter",
    icono: Cross,
    color: "bg-gradient-to-br from-sky-500 to-blue-700",
    descripcion:
      "Nuestra formación se fundamenta en principios y valores cristianos que trascienden el aula. Creemos que la educación integral incluye la dimensión espiritual, y por eso cultivamos un ambiente donde la fe, el respeto y el amor al prójimo son el centro de cada interacción.",
    caracteristicas: [
      "Devocionales diarios y espacios de reflexión",
      "Programa de valores y ética cristiana",
      "Proyectos de servicio comunitario",
      "Acompañamiento espiritual personalizado",
    ],
  },
  {
    id: 2,
    titulo: "Enfoque Psicopedagógico",
    subtitulo: "Cada mente es un universo único",
    icono: Brain,
    color: "bg-gradient-to-br from-amber-400 to-orange-600",
    descripcion:
      "Reconocemos que cada estudiante tiene un ritmo de aprendizaje, talentos y desafíos particulares. Nuestro equipo de psicopedagogía diseña planes personalizados que potencian las inteligencias múltiples y brindan el acompañamiento necesario para que cada niño y joven alcance su máximo potencial.",
    caracteristicas: [
      "Evaluación psicopedagógica integral",
      "Planes de aprendizaje personalizados",
      "Acompañamiento emocional y académico",
      "Talleres para padres y docentes",
    ],
  },
  {
    id: 3,
    titulo: "Método STEM",
    subtitulo: "Innovación que transforma realidades",
    icono: Rocket,
    color: "bg-gradient-to-br from-emerald-400 to-teal-600",
    descripcion:
      "La ciencia, la tecnología, la ingeniería y las matemáticas no son solo materias: son herramientas para entender y transformar el mundo. Nuestro enfoque STEM integra estas disciplinas a través de proyectos prácticos, robótica, laboratorios y pensamiento de diseño.",
    caracteristicas: [
      "Laboratorios de ciencias y robótica equipados",
      "Proyectos interdisciplinarios por trimestre",
      "Competencias y ferias científicas",
      "Alianzas con universidades y empresas tecnológicas",
    ],
  },
];

export default function ProyectoEducativoPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop"
            alt="Proyecto Educativo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="right">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Nuestro ADN educativo
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              Tres pilares,{" "}
              <span className="text-secondary">un propósito</span>
            </h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Un modelo educativo diseñado para formar agentes de cambio con
              valores sólidos, mente científica y corazón dispuesto.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Pilares en Detalle ── */}
      {pilaresDetallados.map((pilar, index) => (
        <section
          key={pilar.id}
          className={`py-24 md:py-32 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div
              className={`grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={index % 2 !== 0 ? "md:order-2" : ""}
              >
                <div
                  className={`relative ${pilar.color} rounded-3xl p-10 md:p-14 text-white overflow-hidden shadow-xl min-h-[360px] flex flex-col justify-center`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
                  <div className="relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <pilar.icono className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/70 text-sm tracking-widest uppercase mb-2">
                      Pilar {pilar.id}
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                      {pilar.titulo}
                    </h2>
                    <p className="text-white/85 text-lg italic">
                      &ldquo;{pilar.subtitulo}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={index % 2 !== 0 ? "md:order-1" : ""}
              >
                <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                  {pilar.titulo}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
                  {pilar.subtitulo}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {pilar.descripcion}
                </p>
                <ul className="space-y-4">
                  {pilar.caracteristicas.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <ChevronRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para crecer con propósito?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Conoce más sobre nuestro proceso de admisión y descubre cómo tu
              hijo puede ser parte de esta comunidad.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/admisiones">
              <Button variant="accent" size="lg" className="rounded-full px-10">
                Iniciar proceso de admisión
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
