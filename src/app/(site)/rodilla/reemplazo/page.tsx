import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rodilla - Reemplazo",
};

export default function KneeReplacementPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Reemplazo</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Aquí explico el reemplazo de rodilla, desde la evaluación hasta la
        cirugía y la rehabilitación.
      </p>
    </Container>
  );
}
