# Colegio Cristiano Psicopedagógico | Método STEM

Sitio web oficial del Colegio Cristiano Psicopedagógico (@colegio_ccp). Diseño premium, inmersivo y moderno inspirado en las mejores prácticas de diseño web educativo.

**Lema: "Crece con Propósito"**

🔗 **Demo en vivo**: [colegio-cristiano.vercel.app](https://colegio-cristiano.vercel.app)

## ✨ Características

- **Hero Section** a pantalla completa con video de fondo, parallax, y título gigante
- **Scroll horizontal** en la sección de Pilares Educativos con Framer Motion
- **Galería estilo Pinterest** con lightbox a pantalla completa en Vida Escolar
- **Animaciones suaves** con Framer Motion en toda la experiencia (fade-in, stagger, hover)
- **Formularios validados** con React Hook Form + Zod (contacto y admisiones)
- **Diseño responsive** (móvil, tablet, escritorio) con safe areas para dispositivos con notch
- **Navbar dinámico** transparente que cambia a blanco con sombra al hacer scroll
- **Páginas completas**: Inicio, Nosotros, Proyecto Educativo, Admisiones, Contacto, Noticias
- **SEO optimizado**: Metadata dinámica por página, Open Graph, Twitter Cards
- **Accesibilidad**: Skip-to-content, roles ARIA, navegación por teclado, contraste WCAG
- **Rendimiento**: Imágenes optimizadas con next/image (AVIF/WebP), carga prioritaria
- **CMS Headless**: Integración preparada con Sanity.io (schemas, cliente, queries)

## 🛠️ Tecnologías

- **[Next.js](https://nextjs.org/)** — App Router + TypeScript
- **[React 19](https://react.dev/)** — Server Components
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilos utilitarios CSS-first con tema personalizado
- **[Framer Motion](https://www.framer.com/motion/)** — Animaciones, parallax, scroll horizontal
- **[Lucide React](https://lucide.dev/)** — Iconos vectoriales
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** — Formularios y validación tipada
- **[Sanity.io](https://www.sanity.io/)** — CMS headless (schemas y cliente incluidos)
- **TypeScript** — Tipado seguro en todo el proyecto

## 🚀 Instalación

### Requisitos Previos
- Node.js 18+ o superior
- npm

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/Josh-png12/Colegio-Cristiano.git
cd Colegio-Cristiano
```

2. Instala las dependencias:
```bash
npm install
```

3. Copia las variables de entorno:
```bash
cp .env.local.example .env.local
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Compilación para producción

```bash
npm run build
npm start
```

## 🌐 Despliegue en Vercel

1. Sube tu código a un repositorio de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com/new).
3. Haz clic en "Add New Project" e importa tu repositorio.
4. Vercel detectará automáticamente el proyecto Next.js.
5. Configura las variables de entorno en Settings > Environment Variables.
6. Haz clic en "Deploy".

## 📁 Estructura del Proyecto

```
colegio-ccp/
├── app/
│   ├── layout.tsx                      # Layout principal (Navbar, Footer, SEO, skip-link)
│   ├── page.tsx                        # Página de inicio (Server Component + metadata)
│   ├── globals.css                     # Tailwind v4 + tema + reset + utilidades
│   ├── loading.tsx                     # Estado de carga global
│   ├── not-found.tsx                   # Página 404 personalizada
│   ├── error.tsx                       # Página de error con reintento
│   ├── nosotros/
│   │   ├── page.tsx                    # Server Component + metadata
│   │   └── NosotrosContent.tsx         # Client Component con contenido
│   ├── proyecto-educativo/
│   │   ├── page.tsx
│   │   └── ProyectoEducativoContent.tsx
│   ├── admisiones/
│   │   ├── page.tsx
│   │   └── AdmisionesContent.tsx
│   ├── contacto/
│   │   ├── page.tsx
│   │   └── ContactoContent.tsx
│   └── noticias/[id]/
│       ├── page.tsx                    # Metadata dinámica por ID
│       └── NoticiaDetailContent.tsx
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx                  # Navbar transparente → blanco con scroll
│   │   ├── Footer.tsx                  # Footer con redes sociales y enlaces
│   │   ├── Button.tsx                  # Botón con variantes (default, accent, outline...)
│   │   └── SectionTitle.tsx            # Título de sección reutilizable
│   ├── sections/
│   │   ├── Hero.tsx                    # Hero con parallax + video de fondo
│   │   ├── Pilares.tsx                 # Scroll horizontal con useScroll/useTransform
│   │   ├── FrasesDeclarativas.tsx      # Frases con ondas SVG decorativas
│   │   ├── VidaEscolar.tsx             # Galería masonry + lightbox
│   │   ├── Testimonios.tsx             # Grid de testimonios con avatar
│   │   ├── Noticias.tsx                # Tarjetas de noticias con hover
│   │   └── Admisiones.tsx              # Sección con formulario de contacto
│   └── animations/
│       └── FadeIn.tsx                  # Componente de animación reutilizable
├── data/
│   └── mockData.ts                     # Datos mock tipados (pilares, noticias, galería...)
├── lib/
│   ├── utils.ts                        # Utilidad cn() para clases condicionales
│   └── sanity.ts                       # Cliente Sanity + GROQ queries + helpers
├── schemas/
│   ├── post.ts                         # Schema de Noticia para Sanity
│   ├── testimonial.ts                  # Schema de Testimonio
│   ├── settings.ts                     # Schema singleton de configuración del sitio
│   └── index.ts                        # Export centralizado de schemas
├── public/                             # Archivos estáticos
├── .env.local.example                  # Plantilla de variables de entorno
├── next.config.ts                      # Config: imágenes, AVIF/WebP, headers de seguridad
├── package.json
└── README.md
```

## 🎨 Personalización

### Colores
Los colores principales se configuran en `app/globals.css` mediante `@theme` de Tailwind CSS v4:

| Token CSS | Valor | Uso |
|-----------|-------|-----|
| `--color-primary` | `#1a3a5c` | Azul oscuro — fondos, textos principales |
| `--color-secondary` | `#f59e0b` | Ámbar — acentos, CTAs, destacados |
| `--color-background` | `#ffffff` | Fondo principal |
| `--color-foreground` | `#1f2937` | Texto del cuerpo |

### Tipografía
- **Poppins** (`font-heading`): Títulos y encabezados (400–800)
- **Lato** (`font-body`): Texto del cuerpo (400, 700)

### Imágenes
Las imágenes provienen de Unsplash y Pravatar.cc. Los dominios están configurados en `next.config.ts` con optimización AVIF/WebP.

## 📝 Integración con Sanity CMS

### Configuración

1. Crea un proyecto en [Sanity.io](https://www.sanity.io/manage).
2. Copia el **Project ID** y el **Dataset**.
3. Configura las variables en `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=tu-api-token
```

### Schemas incluidos

El proyecto incluye 3 schemas listos para usar en Sanity Studio:

| Schema | Contenido gestionable |
|--------|----------------------|
| `post` | Noticias (título, slug, fecha, extracto, imagen, contenido) |
| `testimonial` | Testimonios (nombre, cargo, cita, foto, destacado) |
| `siteSettings` | Configuración global (título, descripción, Hero, misión/visión, redes) |

### Uso de datos

El sistema usa datos mock por defecto. Al configurar Sanity, el helper `fetchSanity()` consulta el CMS automáticamente. Si Sanity no está configurado, usa los datos mock sin errores.

### Sanity Studio

Los schemas están en `/schemas/`. Para usarlos en un Sanity Studio:
```typescript
import { postSchema, testimonialSchema, siteSettingsSchema } from "./schemas";
export const schemaTypes = [postSchema, testimonialSchema, siteSettingsSchema];
```

## 📝 Licencia

© 2026 Colegio Cristiano Psicopedagógico. Todos los derechos reservados.
