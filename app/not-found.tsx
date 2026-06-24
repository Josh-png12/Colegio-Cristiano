import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada | Colegio CCP",
  description: "La página que buscas no existe o ha sido movida.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4" role="main">
      <div className="text-center max-w-lg">
        <p className="font-heading text-8xl md:text-9xl font-extrabold text-primary/10 mb-4 select-none">
          404
        </p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida. 
          Te invitamos a regresar al inicio para seguir explorando.
        </p>
        <Link href="/">
          <Button variant="accent" size="lg" className="rounded-full px-10">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </main>
  );
}
