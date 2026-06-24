"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Users, ClipboardCheck, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionTitle } from "@/components/ui/SectionTitle";

const pasos = [
  {
    numero: 1,
    titulo: "Formulario de Inscripción",
    descripcion: "Completa el formulario inicial para registrar tu interés y recibir el paquete informativo completo con todos los detalles de nuestro proyecto educativo.",
    icono: FileText,
  },
  {
    numero: 2,
    titulo: "Entrevista Familiar",
    descripcion: "Reunión con nuestro equipo de psicopedagogía y coordinación académica para conocer la dinámica familiar, las expectativas y resolver todas tus inquietudes.",
    icono: Users,
  },
  {
    numero: 3,
    titulo: "Evaluación Diagnóstica",
    descripcion: "Prueba de conocimientos básicos y habilidades para ubicar al estudiante según nuestro modelo educativo personalizado.",
    icono: ClipboardCheck,
  },
  {
    numero: 4,
    titulo: "Matrícula",
    descripcion: "Una vez completado el proceso, te guiaremos en la formalización de la matrícula y te daremos la bienvenida a la familia CCP.",
    icono: CheckCircle,
  },
];

const beneficios = [
  "Educación personalizada con enfoque psicopedagógico",
  "Método STEM integrado en el currículo",
  "Formación en valores cristianos",
  "Instalaciones modernas y seguras",
  "Docentes altamente calificados",
  "Acompañamiento espiritual y emocional",
];

export default function AdmisionesPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571260899304-42507011ec70?q=80&w=1920&auto=format&fit=crop"
            alt="Admisiones CCP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="right">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Admisiones 2027
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              El primer paso para{" "}
              <span className="text-secondary">crecer con propósito</span>
            </h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
              Estamos buscando estudiantes curiosos, apasionados por el
              aprendizaje y listos para descubrir su potencial. El proceso de
              admisión para el periodo 2027 ya está abierto.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <Link href="/contacto">
              <Button variant="accent" size="lg" className="rounded-full px-8 group">
                Solicitar información
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* Stats row */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { valor: "20+", label: "Años de experiencia" },
              { valor: "95%", label: "Ingreso universitario" },
              { valor: "15:1", label: "Ratio estudiante/docente" },
              { valor: "100%", label: "Formación bilingüe" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-extrabold text-secondary">
                  {stat.valor}
                </p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso de Admisión ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            overline="Proceso de admisión"
            title="4 pasos para unirte a nuestra comunidad"
            description="Un proceso diseñado para conocerte y asegurarnos de que somos la mejor opción para tu familia."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-heading font-bold text-lg shadow-lg">
                  {paso.numero}
                </div>
                <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <paso.icono className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beneficios ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                alt="Estudiantes CCP"
                className="rounded-3xl shadow-xl w-full h-96 object-cover"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                ¿Por qué elegirnos?
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">
                Una educación que marca la diferencia
              </h2>
              <ul className="space-y-4">
                {beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <Calendar className="w-12 h-12 text-secondary mx-auto mb-6" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              ¡Cupos limitados para 2027!
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Inicia hoy el proceso de admisión y asegura el futuro de tu hijo
              en una institución que forma líderes con propósito.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contacto">
              <Button variant="accent" size="lg" className="rounded-full px-10 text-lg">
                Iniciar proceso de admisión
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
