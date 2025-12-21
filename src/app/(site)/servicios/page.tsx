import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Servicios",
};

export default function ServicesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Servicios</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Lista de servicios y procedimientos (placeholder). Aquí puedes detallar
        consulta, diagnóstico por imagen, infiltraciones, cirugías, etc.
      </p>
    </Container>
  );
}

