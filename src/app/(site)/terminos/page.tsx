import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Términos y condiciones",
};

export default function TermsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Términos y condiciones
      </h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Placeholder de términos y condiciones. Reemplaza este contenido con el
        texto legal correspondiente.
      </p>
    </Container>
  );
}

