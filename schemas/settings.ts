// ─── Site Settings Schema ───────────────────────────────────────
// Schema singleton para configuración general del sitio.

export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Título del sitio",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "siteDescription",
      title: "Descripción (SEO)",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required().max(160),
    },
    {
      name: "heroHeading",
      title: "Título principal (Hero)",
      type: "string",
    },
    {
      name: "heroSubheading",
      title: "Subtítulo (Hero)",
      type: "text",
    },
    {
      name: "heroImage",
      title: "Imagen del Hero",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroVideo",
      title: "Video del Hero (opcional)",
      type: "file",
    },
    {
      name: "missionStatement",
      title: "Misión",
      type: "text",
      rows: 4,
    },
    {
      name: "visionStatement",
      title: "Visión",
      type: "text",
      rows: 4,
    },
    {
      name: "contactEmail",
      title: "Email de contacto",
      type: "string",
    },
    {
      name: "contactPhone",
      title: "Teléfono",
      type: "string",
    },
    {
      name: "address",
      title: "Dirección",
      type: "text",
      rows: 2,
    },
    {
      name: "socialLinks",
      title: "Redes Sociales",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "youtube", title: "YouTube URL", type: "url" },
      ],
    },
  ],
};
