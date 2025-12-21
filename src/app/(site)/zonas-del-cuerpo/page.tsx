import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Zonas del Cuerpo",
};

export default function BodyAreasPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Zonas del Cuerpo</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Selecciona una zona para conocer patologías frecuentes y tratamientos.
      </p>
    </Container>
  );
}

