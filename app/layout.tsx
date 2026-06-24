import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://colegio-cristiano.vercel.app"),
  title: {
    default: "Colegio Cristiano Psicopedagógico | Método STEM",
    template: "%s | Colegio CCP",
  },
  description:
    "En el Colegio Cristiano Psicopedagógico, formamos líderes con valores, innovación y mente abierta al futuro. Crece con Propósito.",
  keywords: [
    "colegio cristiano",
    "educación STEM",
    "psicopedagogía",
    "colegio Colombia",
    "formación cristiana",
    "método STEM",
    "educación personalizada",
  ],
  authors: [{ name: "Colegio Cristiano Psicopedagógico" }],
  creator: "Colegio Cristiano Psicopedagógico",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Colegio Cristiano Psicopedagógico",
    title: "Colegio Cristiano Psicopedagógico | Método STEM",
    description:
      "Formamos líderes con valores, innovación y mente abierta al futuro. Crece con Propósito.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Colegio Cristiano Psicopedagógico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colegio Cristiano Psicopedagógico | Método STEM",
    description:
      "Formamos líderes con valores, innovación y mente abierta al futuro. Crece con Propósito.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${lato.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-body bg-background text-foreground antialiased">
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-secondary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
