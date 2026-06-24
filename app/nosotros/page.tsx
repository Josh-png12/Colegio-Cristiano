import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia, misión, visión y valores del Colegio Cristiano Psicopedagógico. Más de 20 años formando líderes con propósito.",
  openGraph: {
    title: "Nosotros | Colegio CCP",
    description:
      "Conoce la historia, misión, visión y valores del Colegio Cristiano Psicopedagógico.",
  },
};

import { NosotrosContent } from "./NosotrosContent";

export default function NosotrosPage() {
  return <NosotrosContent />;
}
