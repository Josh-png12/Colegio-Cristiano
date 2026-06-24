# Colegio Cristiano Psicopedagógico | Método STEM

Sitio web oficial del Colegio Cristiano Psicopedagógico (@colegio_ccp). Diseño premium, inmersivo y moderno inspirado en las mejores prácticas de diseño web educativo.

**Lema: "Crece con Propósito"**

## ✨ Características

- **Hero Section** a pantalla completa con video de fondo y título gigante
- **Scroll horizontal** en la sección de Pilares Educativos
- **Galería estilo Pinterest** con lightbox en Vida Escolar
- **Animaciones suaves** con Framer Motion en toda la experiencia
- **Formularios validados** con React Hook Form + Zod
- **Diseño responsive** (móvil, tablet, escritorio)
- **Navbar dinámico** que cambia al hacer scroll
- **Páginas completas**: Inicio, Nosotros, Proyecto Educativo, Admisiones, Contacto, Noticias

## 🛠️ Tecnologías

- **[Next.js 16](https://nextjs.org/)** — App Router
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilos utilitarios con configuración CSS-first
- **[Framer Motion](https://www.framer.com/motion/)** — Animaciones y transiciones
- **[Lucide React](https://lucide.dev/)** — Iconos vectoriales
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** — Formularios y validación
- **TypeScript** — Tipado seguro

## 🚀 Instalación

### Requisitos Previos
- Node.js 18+ o superior
- npm, yarn o pnpm

### Pasos

1. Clona este repositorio o navega a la carpeta del proyecto:
```bash
cd colegio-ccp
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Compilación para producción

```bash
npm run build
npm start
```

## 🌐 Despliegue en Vercel

1. Sube tu código a un repositorio de GitHub, GitLab o Bitbucket.
2. Inicia sesión en [Vercel](https://vercel.com/new).
3. Haz clic en "Add New Project" e importa tu repositorio.
4. Vercel detectará automáticamente el proyecto Next.js.
5. Haz clic en "Deploy".

## 📁 Estructura del Proyecto

```
colegio-ccp/
├── app/
│   ├── layout.tsx              # Layout principal con Navbar y Footer
│   ├── page.tsx                # Página de inicio
│   ├── globals.css             # Estilos globales y configuración Tailwind
│   ├── nosotros/
│   │   └── page.tsx            # Página "Nosotros"
│   ├── proyecto-educativo/
│   │   └── page.tsx            # Página "Proyecto Educativo"
│   ├── admisiones/
│   │   └── page.tsx            # Página "Admisiones"
│   ├── contacto/
│   │   └── page.tsx            # Página "Contacto"
│   └── noticias/
│       └── [id]/
│           └── page.tsx        # Página de detalle de noticia
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx          # Barra de navegación
│   │   ├── Footer.tsx          # Pie de página
│   │   ├── Button.tsx          # Botón reutilizable
│   │   └── SectionTitle.tsx    # Título de sección reutilizable
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Pilares.tsx         # Scroll horizontal de pilares
│   │   ├── FrasesDeclarativas.tsx  # Frases con ondas SVG
│   │   ├── VidaEscolar.tsx     # Galería masonry + lightbox
│   │   ├── Testimonios.tsx     # Grid de testimonios
│   │   ├── Noticias.tsx        # Grid de noticias
│   │   └── Admisiones.tsx      # Sección de admisiones con formulario
│   └── animations/
│       └── FadeIn.tsx          # Componente de animación reutilizable
├── data/
│   └── mockData.ts             # Datos mock (pilares, noticias, etc.)
├── lib/
│   └── utils.ts                # Utilidad cn() para clases condicionales
├── public/                     # Archivos estáticos
├── next.config.ts              # Configuración de Next.js
├── package.json
└── README.md
```

## 🎨 Personalización

### Colores
Los colores principales se configuran en `app/globals.css` mediante la directiva `@theme` de Tailwind CSS v4:

- **Primary**: `#1a3a5c` (azul oscuro)
- **Secondary**: `#f59e0b` (ámbar)
- **Accent**: `#f59e0b` (ámbar — mismo que secondary)

### Fuentes
- **Poppins**: Títulos y encabezados (font-heading)
- **Lato**: Texto del cuerpo (font-body)

### Imágenes
Las imágenes provienen de Unsplash y Pravatar. Los dominios están configurados en `next.config.ts`.

## 📝 Licencia

© 2026 Colegio Cristiano Psicopedagógico. Todos los derechos reservados.
