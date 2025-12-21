import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rodilla - Artroscopia",
};

export default function KneeArthroscopyPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Artroscopia</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Aquí explico la artroscopia de rodilla, sus indicaciones, el
        procedimiento y los cuidados posteriores.
      </p>
    </Container>
  );
}
