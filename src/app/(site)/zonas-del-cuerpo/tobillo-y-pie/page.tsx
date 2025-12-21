import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Zonas del Cuerpo - Tobillo y pie",
};

export default function AnkleFootPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Tobillo y pie</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Aquí explico cómo evalúo esguinces, tendinopatías y manejo del dolor en
        tobillo y pie.
      </p>
    </Container>
  );
}
