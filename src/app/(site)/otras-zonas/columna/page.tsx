import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Columna | Dr. Luis Calderón",
  description:
    "Diagnóstico y tratamiento de dolor lumbar, hernias discales y estenosis en Quito. Opciones conservadoras y quirúrgicas según tu caso.",
};

export default function SpinePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f6fbfc] to-white">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_88%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Columna - El eje del cuerpo
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Diagnóstico y tratamiento del dolor de espalda y columna
            </h1>
            <p className="text-base leading-7 text-foreground/75">
              El 80% de las personas sufrirá dolor de espalda en algún momento.
              No siempre significa cirugía. Mi prioridad es identificar la causa
              mecánica y empezar por opciones conservadoras que te den alivio
              real.
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
          <Reveal>
            <div className="relative">
              <div className="relative mx-auto h-100 max-w-[600px] overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
                <Image
                  src="/drluis/dolor-espalda.webp"
                  alt="Dr. Luis Calderón"
                  fill
                  sizes="1000px"
                  className="object-cover object-left"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="pb-16 sm:pb-20 space-y-16">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Hernias discales y ciática
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Dolor punzante con “corrientazo”
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                El disco comprime el nervio y envía dolor hacia la pierna. La
                mayoría mejora con medicación, terapia física o bloqueos.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Cirugía solo cuando no hay alivio o existe pérdida de fuerza.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Estenosis lumbar
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Canal estrecho en mayores de 60
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor o pesadez en piernas al caminar que obliga a sentarte o
                inclinarte (“signo del carrito de compras”).
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Buscamos liberar el espacio de los nervios para mejorar tu
                calidad de vida.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Lumbalgia mecánica
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Dolor por postura o sobreesfuerzo
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor localizado por mala postura, sobrecarga o debilidad
                muscular.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Reeducación postural, fortalecimiento de core y control del
                dolor agudo.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-r from-[#0b2a45] via-[#0b2a45] to-brand p-6 text-white shadow-2xl shadow-black/25">
            <h3 className="text-lg font-semibold">Visión integral</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">
              ¿Sabías que el cuerpo es una cadena conectada? A veces, una mala
              pisada afecta tu rodilla, o una cadera rígida provoca dolor
              lumbar. Como traumatólogo y ortopedista, experto en cirugía de
              rodilla y robótica, mi visión es integral: no solo trato el
              síntoma, busco el origen biomecánico del dolor para ofrecerte una
              solución definitiva.
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
