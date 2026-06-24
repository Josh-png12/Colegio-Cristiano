"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { noticias } from "@/data/mockData";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export default function NoticiaDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary mb-4">
          Noticia no encontrada
        </h1>
        <p className="text-gray-500 mb-8">
          Lo sentimos, la noticia que buscas no existe o ha sido removida.
        </p>
        <Link href="/#noticias">
          <Button variant="accent">Volver a noticias</Button>
        </Link>
      </div>
    );
  }

  return (
    <article>
      {/* ── Hero Image ── */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          src={noticia.imagen.replace("w=600", "w=1400")}
          alt={noticia.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />

        {/* Back button */}
        <Link
          href="/#noticias"
          className="absolute top-8 left-6 md:left-10 z-10 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {noticia.fecha}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} />5 min de lectura
                </span>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                {noticia.titulo}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-secondary pl-6">
                {noticia.extracto}
              </p>

              <p>
                En el Colegio Cristiano Psicopedagógico, cada evento es una
                oportunidad para celebrar el aprendizaje, la creatividad y el
                crecimiento de nuestra comunidad educativa. Esta actividad
                refleja nuestro compromiso con la excelencia académica y la
                formación integral de nuestros estudiantes.
              </p>

              <p>
                Durante la jornada, estudiantes de todos los grados participaron
                activamente, demostrando las habilidades y conocimientos
                adquiridos a través de nuestro modelo educativo basado en los
                tres pilares: formación cristiana, enfoque psicopedagógico y
                método STEM.
              </p>

              <h2 className="font-heading text-2xl font-bold text-primary mt-10">
                Un evento que inspira
              </h2>

              <p>
                Las familias, docentes y directivos se unieron para compartir
                esta experiencia enriquecedora, que no solo fortalece los lazos
                comunitarios, sino que también motiva a nuestros estudiantes a
                seguir explorando, preguntando y construyendo conocimiento.
              </p>

              <p>
                &ldquo;Ver a nuestros estudiantes brillar en estos espacios es
                la confirmación de que estamos formando líderes con propósito.
                Cada proyecto, cada presentación, cada sonrisa es un reflejo del
                trabajo en equipo y la dedicación que caracteriza a nuestra
                comunidad educativa.&rdquo;, expresó la rectora durante la
                clausura del evento.
              </p>

              <h2 className="font-heading text-2xl font-bold text-primary mt-10">
                Mirando hacia el futuro
              </h2>

              <p>
                Este tipo de actividades son parte fundamental de nuestro
                calendario académico, y ya estamos preparando las próximas
                jornadas que seguirán impulsando el talento y la creatividad de
                nuestros estudiantes. Te invitamos a estar atento a nuestras
                redes sociales y a esta sección de noticias para no perderte
                ninguna de nuestras actividades.
              </p>
            </div>

            {/* Share */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link href="/#noticias">
                <Button
                  variant="outline"
                  className="gap-2 group"
                >
                  <ArrowLeft
                    size={16}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  Volver a noticias
                </Button>
              </Link>
              <button className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                <Share2 size={16} />
                Compartir noticia
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Related / More News CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              ¿Quieres saber más?
            </h3>
            <p className="text-gray-500 mb-8">
              Descubre todas las noticias y eventos de nuestra comunidad
              educativa.
            </p>
            <Link href="/#noticias">
              <Button variant="accent" size="lg" className="rounded-full">
                Ver todas las noticias
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
