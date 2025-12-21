import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Política de privacidad
      </h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Aquí explico cómo manejo tus datos personales, cómo contacto contigo y
        cómo utilizo cookies para mejorar tu experiencia.
      </p>
    </Container>
  );
}
