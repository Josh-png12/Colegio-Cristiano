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
    <section id="admisiones" className="py-24 relative overflow-hidden">
      {/* Background with parallax image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571260899304-42507011ec70?q=80&w=1920&auto=format&fit=crop"
          alt="Admisiones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <div className="text-white">
            <FadeIn direction="right">
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                Admisiones 2027
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Forma parte de nuestra comunidad
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
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
                    className="rounded-full px-8"
                  >
                    Ver proceso completo
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Solicita información
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Completa el formulario y nos pondremos en contacto contigo.
              </p>

              {/* Toast */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </span>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div>
                  <input
                    {...register("nombre")}
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("telefono")}
                    placeholder="Teléfono (+57 300 000 0000)"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("mensaje")}
                    rows={4}
                    placeholder="¿En qué te podemos ayudar?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none text-gray-800 placeholder:text-gray-400"
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full rounded-xl gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensaje
                    </>
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
