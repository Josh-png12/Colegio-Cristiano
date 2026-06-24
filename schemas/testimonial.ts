// ─── Testimonial Schema ─────────────────────────────────────────
// Colocar este schema en el Sanity Studio.

export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Cargo / Relación",
      type: "string",
      description: "Ej: 'Madre de familia', 'Exalumno Promoción 2024'",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "quote",
      title: "Testimonio",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required().min(20),
    },
    {
      name: "photo",
      title: "Foto",
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
      name: "featured",
      title: "Destacado",
      type: "boolean",
      description: "Mostrar en la página principal",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
};
