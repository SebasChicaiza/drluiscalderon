import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rodilla - Lesiones",
};

export default function KneeInjuriesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Lesiones</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Aquí explico las lesiones de rodilla, sus síntomas, diagnóstico,
        tratamiento y recuperación.
      </p>
    </Container>
  );
}
