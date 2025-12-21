import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Cadera",
  description:
    "Evaluación y tratamiento de cadera: prótesis, dolor inguinal y choque femoroacetabular en Quito.",
};

export default function HipPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Cadera</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Evalúo dolor de cadera, indico prótesis cuando corresponde y manejo
        choque femoroacetabular con enfoque conservador o quirúrgico.
      </p>
    </Container>
  );
}
