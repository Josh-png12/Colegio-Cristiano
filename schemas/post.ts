// ─── Post (Noticias) Schema ─────────────────────────────────────
// Este archivo es para referencia. El schema real debe estar en el
// proyecto de Sanity Studio (https://www.sanity.io/docs/studio).

export const postSchema = {
  name: "post",
  title: "Noticia",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: any) => Rule.required().min(5).max(120),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required().max(250),
    },
    {
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "body",
      title: "Contenido",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare({ title, media, date }: any) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString("es-CO") : "",
      };
    },
  },
};
