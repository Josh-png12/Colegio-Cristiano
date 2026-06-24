import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Pilares } from "@/components/sections/Pilares";
import { FrasesDeclarativas } from "@/components/sections/FrasesDeclarativas";
import { VidaEscolar } from "@/components/sections/VidaEscolar";
import { Testimonios } from "@/components/sections/Testimonios";
import { Noticias } from "@/components/sections/Noticias";
import { Admisiones } from "@/components/sections/Admisiones";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Colegio Cristiano Psicopedagógico: Formamos líderes con valores, innovación y mente abierta al futuro. Crece con Propósito.",
  openGraph: {
    title: "Colegio Cristiano Psicopedagógico | Método STEM",
    description:
      "Formamos líderes con valores, innovación y mente abierta al futuro. Crece con Propósito.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pilares />
      <FrasesDeclarativas />
      <VidaEscolar />
      <Testimonios />
      <Noticias />
      <Admisiones />
    </>
  );
}
