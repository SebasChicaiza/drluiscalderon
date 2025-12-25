import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muñeca",
  description:
    "Tratamiento de muñeca: túnel carpiano, lesiones por esfuerzo y dolor persistente en Quito.",
};

export default function WristPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f7fbfc] to-white">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_88%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Muñeca
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Sensibilidad y fuerza sin hormigueo ni dolor
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Trato túnel carpiano, lesiones ligamentosas y dolor por esfuerzo
              repetitivo. Busco liberar el nervio atrapado y estabilizar la
              articulación para que vuelvas a trabajar y entrenar cómodo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 transition hover:opacity-90"
              >
                Agenda valoración
              </Link>
              <Link
                href="/otras-zonas/parte-superior"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Ver miembro superior
              </Link>
            </div>
          </div>
          <div className="relative motion-safe:animate-[fade-up_1s_ease-out_both]">
            <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
            <div className="absolute -right-4 bottom-6 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12] p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a45]/85 via-[#0b2a45]/75 to-brand/80" />
              <div className="relative space-y-3 text-white">
                <h2 className="text-xl font-semibold">Qué abordo</h2>
                <ul className="space-y-2 text-sm leading-6">
                  <li>• Síndrome de túnel carpiano y atrapamientos nerviosos.</li>
                  <li>• Lesiones de ligamentos y dolor post-caída.</li>
                  <li>• Dolor por sobreuso en oficina o deporte.</li>
                </ul>
                <p className="text-sm text-white/85">
                  Tratamiento desde férulas y fisioterapia hasta liberación
                  quirúrgica mínima cuando es necesario.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-16 sm:pb-20 space-y-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-lg shadow-black/[0.06] motion-safe:animate-[fade-up_0.9s_ease-out_both] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[0.12]">
          <h2 className="text-lg font-semibold text-foreground">
            Recupera la funcionalidad
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Enfoque funcional para que vuelvas a escribir, entrenar o tocar
            instrumentos sin hormigueo ni dolor.
          </p>
        </div>
      </Container>
    </div>
  );
}
