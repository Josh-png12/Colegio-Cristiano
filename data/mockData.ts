// ─── Tipos ──────────────────────────────────────────────────────────
export interface Pilar {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  gradient: string;
}

export interface Testimonio {
  id: number;
  nombre: string;
  cargo: string;
  testimonio: string;
  foto: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  extracto: string;
  contenido?: string;
  imagen: string;
}

export interface GaleriaItem {
  id: number;
  url: string;
  titulo: string;
  height: string;
}

export interface Frase {
  id: number;
  texto: string;
  align: "left" | "right";
}

// ─── Pilares ────────────────────────────────────────────────────
export const pilares: Pilar[] = [
  {
    id: 1,
    titulo: "Formación Cristiana",
    descripcion:
      "Valores que guían tu vida y fortalecen tu espíritu, preparándote para enfrentar los desafíos con integridad y amor.",
    icono: "Cross",
    gradient: "from-sky-500 to-blue-700",
  },
  {
    id: 2,
    titulo: "Enfoque Psicopedagógico",
    descripcion:
      "Aprendizaje personalizado para cada estudiante, respetando sus ritmos y potenciando sus inteligencias múltiples.",
    icono: "Brain",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    id: 3,
    titulo: "Método STEM",
    descripcion:
      "Ciencia, tecnología e innovación para el futuro. Preparamos a los líderes del mañana con herramientas prácticas.",
    icono: "Rocket",
    gradient: "from-emerald-400 to-teal-600",
  },
];

// ─── Testimonios ────────────────────────────────────────────────
export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "María Rodríguez",
    cargo: "Madre de familia",
    testimonio:
      "El enfoque psicopedagógico del colegio ha transformado la forma en que mi hijo aprende. Ahora disfruta descubrir el mundo a través de la ciencia y los valores cristianos.",
    foto: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    nombre: "Carlos Gómez",
    cargo: "Exalumno — Promoción 2024",
    testimonio:
      "La educación basada en el método STEM me preparó para la universidad de una manera excepcional. Las habilidades que aprendí en el colegio son invaluables.",
    foto: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 3,
    nombre: "Andrea Martínez",
    cargo: "Docente de Biología",
    testimonio:
      "Enseñar en esta institución es un privilegio. Ver cómo los estudiantes crecen con un propósito claro y un alto nivel académico y humano es nuestra mayor recompensa.",
    foto: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 4,
    nombre: "Ricardo Fernández",
    cargo: "Padre de familia — Ingeniero",
    testimonio:
      "Como profesional en tecnología, valoro profundamente que mis hijos aprendan STEM desde una edad temprana. El CCP logra equilibrar lo técnico con lo humano de una manera que no he visto en otros colegios.",
    foto: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 5,
    nombre: "Laura Castillo",
    cargo: "Exalumna — Universidad Nacional",
    testimonio:
      "Llegué a la universidad con una ventaja enorme gracias al método STEM del colegio. Pero más importante aún, llegué con valores firmes y un propósito claro de impactar positivamente a mi comunidad.",
    foto: "https://i.pravatar.cc/300?img=9",
  },
  {
    id: 6,
    nombre: "Pastor Daniel Quintero",
    cargo: "Consejero espiritual",
    testimonio:
      "La formación cristiana que se imparte en el CCP no es superficial: los estudiantes viven su fe en cada proyecto, cada clase y cada interacción. Es una educación que transforma vidas.",
    foto: "https://i.pravatar.cc/300?img=8",
  },
];

// ─── Noticias ───────────────────────────────────────────────────
export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Celebramos el Día de la Ciencia en el CCP",
    fecha: "15 de junio, 2026",
    extracto:
      "Nuestros estudiantes participaron en una feria de ciencias con proyectos innovadores, demostrando cómo el método STEM transforma ideas en soluciones reales.",
    imagen:
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    titulo: "Apertura de nuevas instalaciones deportivas",
    fecha: "10 de junio, 2026",
    extracto:
      "Inauguramos nuestro nuevo complejo deportivo, brindando a los estudiantes más oportunidades para el desarrollo físico y el trabajo en equipo.",
    imagen:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    titulo: "Primer puesto en Olimpiadas de Matemáticas",
    fecha: "05 de mayo, 2026",
    extracto:
      "Orgullosos de nuestro equipo de robótica y matemáticas por alcanzar el primer lugar a nivel regional. ¡El esfuerzo rinde frutos!",
    imagen:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    titulo: "Nuestros estudiantes brillan en Feria de Robótica Nacional",
    fecha: "20 de abril, 2026",
    extracto:
      "El equipo de robótica del CCP representó a la región en la competencia nacional, presentando un proyecto de automatización para agricultura sostenible que recibió mención de honor.",
    imagen:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    titulo: "Semana de la Familia: fortaleciendo vínculos",
    fecha: "02 de marzo, 2026",
    extracto:
      "Con talleres, actividades deportivas y espacios de reflexión, celebramos la Semana de la Familia CCP, reuniendo a padres, estudiantes y docentes en torno a nuestros valores compartidos.",
    imagen:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    titulo: "Alianza con universidades para programa de mentoría STEM",
    fecha: "18 de enero, 2026",
    extracto:
      "Firmamos convenios con tres universidades para que nuestros estudiantes de secundaria participen en programas de mentoría con investigadores y accedan a laboratorios universitarios.",
    imagen:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── Galería Vida Escolar ───────────────────────────────────────
export const galeria: GaleriaItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    titulo: "Laboratorio de Ciencias",
    height: "h-72",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    titulo: "Actividades al aire libre",
    height: "h-96",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=800&auto=format&fit=crop",
    titulo: "Feria STEM",
    height: "h-64",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop",
    titulo: "Biblioteca",
    height: "h-80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1546410531-ea4cea477149?q=80&w=800&auto=format&fit=crop",
    titulo: "Arte y Cultura",
    height: "h-72",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop",
    titulo: "Deportes",
    height: "h-96",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    titulo: "Salón de clases",
    height: "h-64",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    titulo: "Trabajo en equipo",
    height: "h-80",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1571260899304-42507011ec70?q=80&w=800&auto=format&fit=crop",
    titulo: "Graduación 2024",
    height: "h-72",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    titulo: "Robótica",
    height: "h-80",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    titulo: "Matemáticas",
    height: "h-64",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    titulo: "Vista del campus",
    height: "h-96",
  },
];

// ─── Frases declarativas ────────────────────────────────────────
export const frases: Frase[] = [
  { id: 1, texto: "Aprende con propósito.", align: "left" },
  { id: 2, texto: "Construye tu futuro.", align: "right" },
  { id: 3, texto: "Transforma tu mundo.", align: "left" },
];
