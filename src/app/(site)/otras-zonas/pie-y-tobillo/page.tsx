import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Pie y tobillo",
  description:
    "Tratamiento de pie y tobillo: esguinces, deformidades y dolor crónico en Quito.",
};

export default function FootAnklePage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Pie y tobillo</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Evalúo esguinces, inestabilidad y deformidades del pie con tratamientos
        personalizados y rehabilitación dirigida.
      </p>
    </Container>
  );
}
