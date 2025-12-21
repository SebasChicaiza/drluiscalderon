import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Codo",
  description:
    "Tratamiento de codo: tendinopatías, dolor crónico y lesiones por esfuerzo en Quito.",
};

export default function ElbowPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Codo</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Evaluación de tendinitis, dolor lateral del codo y lesiones por
        sobreuso con opciones terapéuticas personalizadas.
      </p>
    </Container>
  );
}

