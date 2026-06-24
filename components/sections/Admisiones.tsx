"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ADMISIONES_BG =
  "https://images.unsplash.com/photo-1571260899304-42507011ec70?q=80&w=1920&auto=format&fit=crop";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Por favor ingresa un email válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 dígitos"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export function Admisiones() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Formulario enviado:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="admisiones" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background with parallax image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ADMISIONES_BG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={80}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: CTA */}
          <div className="text-white">
            <FadeIn direction="right">
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3">
                Admisiones 2027
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Forma parte de nuestra comunidad
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                Estamos buscando estudiantes curiosos, apasionados por el
                aprendizaje y listos para crecer con propósito. El proceso de
                admisión para el periodo 2027 ya está abierto.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admisiones">
                  <Button
                    size="lg"
                    variant="accent"
                    className="rounded-full px-8 w-full sm:w-auto text-center"
                  >
                    Ver proceso completo
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-2">
                Solicita información
              </h3>
              <p className="text-gray-500 mb-5 sm:mb-6 text-xs sm:text-sm">
                Completa el formulario y nos pondremos en contacto contigo.
              </p>

              {/* Toast */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-5 sm:mb-6 flex items-center gap-3 text-sm sm:text-base"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle size={20} aria-hidden="true" />
                  <span className="font-medium">
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </span>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-5"
                noValidate
              >
                <div>
                  <label htmlFor="adm-nombre" className="sr-only">
                    Nombre completo
                  </label>
                  <input
                    id="adm-nombre"
                    {...register("nombre")}
                    placeholder="Nombre completo"
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="adm-email" className="sr-only">
                    Correo electrónico
                  </label>
                  <input
                    id="adm-email"
                    {...register("email")}
                    type="email"
                    placeholder="Correo electrónico"
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="adm-telefono" className="sr-only">
                    Teléfono
                  </label>
                  <input
                    id="adm-telefono"
                    {...register("telefono")}
                    placeholder="Teléfono (+57 300 000 0000)"
                    autoComplete="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="adm-mensaje" className="sr-only">
                    Mensaje
                  </label>
                  <textarea
                    id="adm-mensaje"
                    {...register("mensaje")}
                    rows={4}
                    placeholder="¿En qué te podemos ayudar?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full rounded-full font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                      >
                        <Send size={16} />
                      </motion.span>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Solicitar información
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
