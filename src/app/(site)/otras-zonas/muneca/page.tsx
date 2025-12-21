import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Muñeca",
  description:
    "Tratamiento de muñeca: túnel carpiano, lesiones por esfuerzo y dolor persistente en Quito.",
};

export default function WristPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Muñeca</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Trato túnel carpiano, lesiones de ligamentos y dolor de muñeca con
        evaluación clínica e imagenológica.
      </p>
    </Container>
  );
}
