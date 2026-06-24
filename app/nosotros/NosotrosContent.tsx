"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Shield, Users, Globe } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const NOSOTROS_HERO =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop";
const NOSOTROS_HISTORIA =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop";

const valores = [
  { icono: Heart, titulo: "Fe", descripcion: "Fundamentamos nuestra educación en principios cristianos que guían el carácter." },
  { icono: Shield, titulo: "Integridad", descripcion: "Formamos personas honestas, responsables y comprometidas con la verdad." },
  { icono: Users, titulo: "Comunidad", descripcion: "Creemos en el poder del trabajo colaborativo entre familias, docentes y estudiantes." },
  { icono: Globe, titulo: "Innovación", descripcion: "Adoptamos el método STEM para preparar líderes que transformen el mundo." },
];

export function NosotrosContent() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={NOSOTROS_HERO}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="right">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Quiénes somos
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              Una historia de <span className="text-secondary">fe</span> y{" "}
              <span className="text-secondary">educación</span>
            </h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Desde nuestra fundación, hemos creído que cada estudiante tiene un
              propósito único. Nuestra misión es ayudarles a descubrirlo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Misión & Visión ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Formar integralmente a niños y jóvenes mediante una educación de
                excelencia basada en valores cristianos, un enfoque
                psicopedagógico personalizado y la implementación del método
                STEM, para que se conviertan en líderes que transformen su
                entorno con propósito, integridad y creatividad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser reconocidos como la institución educativa líder en la
                formación de agentes de cambio, donde la innovación pedagógica,
                la solidez espiritual y la excelencia académica convergen para
                impactar positivamente a la sociedad colombiana y al mundo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            overline="Nuestros valores"
            title="Lo que nos define"
            description="Cuatro pilares que guían cada decisión y cada clase en nuestro colegio."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
            {valores.map((valor, i) => (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/10 transition-colors">
                  <valor.icono className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {valor.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={NOSOTROS_HISTORIA}
                  alt="Historia del Colegio Cristiano Psicopedagógico"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                Nuestra historia
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Más de dos décadas formando líderes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  El Colegio Cristiano Psicopedagógico nació del sueño de un grupo
                  de educadores y familias que visionaron una institución donde la
                  fe y la ciencia caminaran de la mano.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos caracterizado por una
                  propuesta educativa que integra la formación espiritual con las
                  metodologías más innovadoras, entendiendo que cada estudiante
                  es único y merece una educación que respete su individualidad.
                </p>
                <p>
                  Hoy, con más de 20 años de trayectoria, seguimos comprometidos
                  con la excelencia académica y la formación de ciudadanos que
                  impacten positivamente su entorno.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/admisiones">
                  <Button variant="accent" size="lg" className="rounded-full">
                    Únete a nuestra historia
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
