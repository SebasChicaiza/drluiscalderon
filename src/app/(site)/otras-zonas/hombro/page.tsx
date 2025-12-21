import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Hombro",
  description:
    "Tratamiento de hombro: manguito rotador, lesiones deportivas y dolor crónico en Quito.",
};

export default function ShoulderPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Hombro</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Manejo de lesiones del manguito rotador, tendinopatías y dolor de
        hombro con enfoque integral.
      </p>
    </Container>
  );
}

