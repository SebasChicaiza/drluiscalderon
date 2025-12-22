import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Columna | Dr. Luis Calderón",
  description:
    "Diagnóstico y tratamiento de dolor lumbar, hernias discales y estenosis en Quito. Opciones conservadoras y quirúrgicas según tu caso.",
};

export default function SpinePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f6fbfc] to-white">
      <Container className="py-16 sm:py-20 space-y-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                El eje del cuerpo
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Diagnóstico y tratamiento del dolor de espalda y columna
              </h1>
              <p className="text-base leading-7 text-foreground/75">
                El 80% de las personas sufrirá dolor de espalda en algún momento. No siempre significa cirugía. Mi prioridad es identificar la causa mecánica del dolor y empezar por opciones conservadoras que te den alivio real.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:opacity-90"
                >
                  Agendar valoración
                </Link>
                <Link
                  href="/rodilla"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand hover:bg-brand/10"
                >
                  Ver especialidad en rodilla
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-white p-7 shadow-lg shadow-black/10">
              <h2 className="text-lg font-semibold text-foreground">Patologías lumbares frecuentes</h2>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Evaluamos con examen clínico, pruebas de fuerza y, cuando se requiere, estudios de imagen. Empezamos con lo menos invasivo y escalamos según tu progreso.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                <li>• Dolor lumbar agudo o crónico.</li>
                <li>• Ciática y hormigueo en pierna.</li>
                <li>• Limitación para caminar por pesadez en piernas.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Hernias discales y ciática
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Dolor punzante con “corrientazo”</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                El disco comprime el nervio y envía dolor hacia la pierna. La mayoría mejora con medicación, terapia física o bloqueos.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Cirugía solo cuando no hay alivio o existe pérdida de fuerza.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Estenosis lumbar
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Canal estrecho en mayores de 60</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor o pesadez en piernas al caminar que obliga a sentarte o inclinarte (“signo del carrito de compras”).
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Buscamos liberar el espacio de los nervios para mejorar tu calidad de vida.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Lumbalgia mecánica
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Dolor por postura o sobreesfuerzo</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor localizado por mala postura, sobrecarga o debilidad muscular.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Reeducación postural, fortalecimiento de core y control del dolor agudo.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-r from-[#0b2a45] via-[#0b2a45] to-brand p-6 text-white shadow-2xl shadow-black/25">
            <h3 className="text-lg font-semibold">Visión integral</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">
              ¿Sabías que el cuerpo es una cadena conectada? A veces, una mala pisada afecta tu rodilla, o una cadera rígida provoca dolor lumbar. Como Traumatólogo Especialista en Rodilla y Cirugía Robótica, mi visión es integral: no solo trato el síntoma, busco el origen biomecánico del dolor para ofrecerte una solución definitiva.
            </p>
            <Link
              href="/rodilla"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand px-5 shadow-lg shadow-black/10 hover:bg-white/90"
            >
              Ver mi especialidad principal en Rodilla →
            </Link>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
