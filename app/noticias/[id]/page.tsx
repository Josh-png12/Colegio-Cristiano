import type { Metadata } from "next";
import { noticias } from "@/data/mockData";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return {
      title: "Noticia no encontrada",
      description: "La noticia que buscas no existe.",
    };
  }

  return {
    title: noticia.titulo,
    description: noticia.extracto,
    openGraph: {
      title: `${noticia.titulo} | Colegio CCP`,
      description: noticia.extracto,
      images: [noticia.imagen],
    },
  };
}

export { default } from "./NoticiaDetailContent";
