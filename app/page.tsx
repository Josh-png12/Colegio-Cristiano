import { Hero } from "@/components/sections/Hero";
import { Pilares } from "@/components/sections/Pilares";
import { FrasesDeclarativas } from "@/components/sections/FrasesDeclarativas";
import { VidaEscolar } from "@/components/sections/VidaEscolar";
import { Testimonios } from "@/components/sections/Testimonios";
import { Noticias } from "@/components/sections/Noticias";
import { Admisiones } from "@/components/sections/Admisiones";

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
