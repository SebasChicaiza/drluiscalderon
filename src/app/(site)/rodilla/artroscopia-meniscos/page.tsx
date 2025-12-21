import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Artroscopia y meniscos",
  description:
    "Cirugía de meniscos y artroscopia en Quito. Procedimientos mínimamente invasivos con recuperación rápida y segura.",
};

export default function ArthroscopyMeniscusPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Meniscos y artroscopia
        </h1>
        <p className="mt-4 text-sm text-foreground/70 sm:text-base">
          Realizo artroscopia como cirugía mínimamente invasiva para tratar
          lesiones de menisco y limpiar la articulación con dos incisiones
          pequeñas.
        </p>
        <p className="mt-3 text-sm text-foreground/70 sm:text-base">
          Resuelvo casos de costo operacion menisco y limpieza articular con un
          enfoque seguro, rápido y personalizado.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            ¿Qué esperar?
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/70">
            <li>Procedimiento ambulatorio en la mayoría de casos.</li>
            <li>Camina el mismo día con indicaciones médicas.</li>
            <li>Menos dolor y menor tiempo de recuperación.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            Recuperación
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            El plan se personaliza según tu lesión, con fisioterapia guiada para
            volver a tus actividades lo antes posible.
          </p>
        </div>
      </div>
    </Container>
  );
}
