"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error capturado:", error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4" role="alert">
      <div className="text-center max-w-lg">
        <p className="font-heading text-7xl md:text-8xl font-extrabold text-secondary/20 mb-4 select-none">
          ¡Ups!
        </p>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
          Algo salió mal
        </h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Ha ocurrido un error inesperado. Por favor, intenta nuevamente
          o recarga la página.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="accent" size="lg" className="rounded-full px-8" onClick={reset}>
            Intentar de nuevo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            onClick={() => window.location.reload()}
          >
            Recargar página
          </Button>
        </div>
      </div>
    </main>
  );
}
