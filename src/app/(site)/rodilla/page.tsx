import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rodilla",
};

export default function KneePage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Rodilla</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Página de introducción a los tratamientos, diagnósticos y procedimientos
        relacionados con rodilla.
      </p>
    </Container>
  );
}

