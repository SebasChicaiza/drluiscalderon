import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Reconstrucción de LCA",
  description:
    "Reconstrucción del ligamento cruzado anterior en Quito. Protocolos acelerados para deportistas y atención de inestabilidad rotuliana.",
};

export default function LigamentPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(43,151,162,0.2),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Ligamentos
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Reconstrucción de LCA y retorno al deporte.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              La rotura del LCA es la pesadilla del deportista: giros bruscos,
              hinchazón inmediata y sensación de “rodilla floja”. Te acompaño con
              protocolos acelerados para volver con confianza.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Agendar valoración
              </Link>
              <a
                href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Descargar guía
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
            <div className="absolute -right-4 bottom-6 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
              <Image
                src="/assets/lesion-hombro.webp"
                alt="Lesión deportiva"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Inestabilidad rotuliana: ¿sientes que la rodilla “se te sale”?
            </h2>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              En jóvenes y mujeres es común que la rótula no deslice en su surco.
              Fortalecimiento, alineación precisa y, si es necesario, reconstrucción
              anatómica del LCA para estabilizar.
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Tendinopatías: no todo es hueso
            </h3>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              El dolor frontal puede ser tendinitis rotuliana. Diferenciarlo es
              clave para definir reposo activo, fisioterapia o cirugía.
            </p>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#0b2a45] p-6 text-white shadow-xl shadow-black/[.18]">
            <h3 className="text-lg font-semibold tracking-tight">
              Pregunta crucial
            </h3>
            <p className="mt-3 text-sm text-white/80">
              ¿Cuánto tiempo tomo volver a jugar después de reconstruir el LCA?
            </p>
            <p className="mt-3 text-sm text-white/80">
              Con protocolos acelerados recuperas estabilidad en 4-6 meses según
              tu deporte. Incluye fisioterapia guiada, ortesis y monitoreo cercano
              para evitar recaídas.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fbfc] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              Protocolos de recuperación acelerada
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Fase 1: control de inflamación y movilidad inicial.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Fase 2: fuerza y estabilidad con propiocepción.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Fase 3: retorno progresivo al deporte con métricas claras.
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              Mi enfoque integral
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              Cirugía mínimamente invasiva, rehabilitación temprana y coaching de
              retorno deportivo para que vuelvas a competir con seguridad.
            </p>
            <Link
              href="/contacto"
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Agenda tu plan de retorno
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="rounded-[30px] border border-brand/25 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand p-8 text-white shadow-2xl shadow-black/[.25]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Lead magnet
              </p>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Descarga mi Guía de Rodilla Vol. 1 - 2024.
              </h3>
              <p className="text-sm text-white/80">
                Plan de recuperación del LCA, cuidados, ejercicios y checklist
                antes de volver a la cancha.
              </p>
              <a
                href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-brand transition hover:bg-white/90 sm:w-auto sm:px-6"
              >
                Descargar guía gratis
              </a>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white/10 px-4 py-5 text-sm text-white/85">
              <p className="font-semibold">Incluye</p>
              <ul className="mt-2 grid gap-2">
                <li>• Línea de tiempo de rehabilitación.</li>
                <li>• Ejercicios clave por fases.</li>
                <li>• Señales de alerta para no recaer.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
