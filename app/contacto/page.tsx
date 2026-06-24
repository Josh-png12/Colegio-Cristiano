"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 dígitos"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const infoContacto = [
  { icono: MapPin, titulo: "Dirección", detalle: "Calle Principal #123, Ciudad, Colombia" },
  { icono: Phone, titulo: "Teléfono", detalle: "+57 300 000 0000" },
  { icono: Mail, titulo: "Email", detalle: "info@colegioccp.edu.co" },
  { icono: Clock, titulo: "Horario de atención", detalle: "Lunes a Viernes, 7:00 AM - 4:00 PM" },
];

export default function ContactoPage() {
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
    <>
      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=1920&auto=format&fit=crop"
            alt="Contacto CCP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn direction="right">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Contáctanos
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              Estamos aquí para{" "}
              <span className="text-secondary">ayudarte</span>
            </h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Escríbenos para solicitar información, agendar una visita guiada o
              resolver cualquier inquietud sobre nuestro proyecto educativo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">
                Información de contacto
              </h2>
              <div className="space-y-6">
                {infoContacto.map((info, i) => (
                  <motion.div
                    key={info.titulo}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icono className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm">
                        {info.titulo}
                      </p>
                      <p className="text-gray-500 text-sm">{info.detalle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Mapa interactivo</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Envíanos un mensaje
                  </h3>
                  <p className="text-gray-500 mb-8 text-sm">
                    Completa el formulario y nos pondremos en contacto contigo en
                    menos de 24 horas.
                  </p>

                  {/* Success Toast */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-xl mb-6 flex items-center gap-3"
                    >
                      <CheckCircle size={20} />
                      <div>
                        <p className="font-semibold">¡Mensaje enviado con éxito!</p>
                        <p className="text-sm text-emerald-600">
                          Nos pondremos en contacto contigo pronto.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input
                          {...register("nombre")}
                          placeholder="Nombre completo"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        />
                        {errors.nombre && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.nombre.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Correo electrónico"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        {...register("telefono")}
                        placeholder="Teléfono (+57 300 000 0000)"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      />
                      {errors.telefono && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.telefono.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <textarea
                        {...register("mensaje")}
                        rows={5}
                        placeholder="¿En qué te podemos ayudar?"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none text-gray-800 placeholder:text-gray-400"
                      />
                      {errors.mensaje && (
                        <p className="text-red-500 text-xs mt-1.5">
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
        </div>
      </section>
    </>
  );
}
