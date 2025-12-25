import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rodilla - Reemplazo",
};

export default function KneeReplacementPage() {
  return (
    <Container className="py-16 sm:py-20 space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
      <h1 className="text-3xl font-semibold tracking-tight">Reemplazo</h1>
      <p className="mt-1 max-w-2xl text-foreground/70">
        Aquí explico el reemplazo de rodilla, desde la evaluación hasta la
        cirugía y la rehabilitación.
      </p>
      <div className="mt-6 rounded-[26px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.08] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.14]">
        <p className="text-sm text-foreground/75">
          Personaliza este espacio con los pasos, beneficios y tiempos de
          recuperación del reemplazo de rodilla.
        </p>
      </div>
    </Container>
  );
}
