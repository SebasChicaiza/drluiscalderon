import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Columna",
  description:
    "Tratamiento de columna: hernias, dolor lumbar y evaluación integral en Quito.",
};

export default function SpinePage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Columna</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Evaluación de hernias discales, dolor lumbar y planes de tratamiento
        conservador o quirúrgico según tu caso.
      </p>
    </Container>
  );
}

