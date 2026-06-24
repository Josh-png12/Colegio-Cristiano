import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para solicitar información, agendar una visita guiada o resolver cualquier inquietud sobre nuestro proyecto educativo.",
  openGraph: {
    title: "Contacto | Colegio CCP",
    description:
      "Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos en menos de 24 horas.",
  },
};

export { default } from "./ContactoContent";
