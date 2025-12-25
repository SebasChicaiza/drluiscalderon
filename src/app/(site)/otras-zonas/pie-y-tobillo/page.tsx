import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pie y tobillo | Dr. Luis Calderón",
  description:
    "Especialista en pie y tobillo en Quito. Esguinces, fascitis plantar, juanetes y fracturas con enfoque funcional para volver a caminar sin dolor.",
};

export default function FootAnklePage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f5fbfb] to-white">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_88%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              La base de todo
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Soluciones para lesiones de pie y tobillo
            </h1>
            <p className="text-base leading-7 text-foreground/75">
              Cada paso soporta el peso de tu cuerpo. Un dolor en el pie altera
              tu forma de caminar y puede afectar rodilla o cadera. Trato desde
              el deportista que se torció el tobillo hasta deformidades
              crónicas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:opacity-90"
              >
                Agenda valoración
              </Link>
              <Link
                href="/rodilla"
                className="inline-flex h-11 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand hover:bg-brand/10"
              >
                Ver especialidad en rodilla
              </Link>
            </div>
          </div>
          <div className="relative motion-safe:animate-[fade-up_1s_ease-out_both]">
            <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
            <div className="absolute -right-4 bottom-6 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12] p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a45]/85 via-[#0b2a45]/75 to-brand/80" />
              <div className="relative space-y-3 text-white">
                <h2 className="text-xl font-semibold">Diagnóstico funcional</h2>
                <p className="text-sm text-white/85">
                  Evaluación de marcha, estabilidad y alineación. Objetivo:
                  volver a caminar sin dolor y evitar secuelas en cadena.
                </p>
                <ul className="space-y-2 text-sm leading-6">
                  <li>• Esguinces y tendinitis.</li>
                  <li>• Fascitis plantar y deformidades.</li>
                  <li>
                    • Fracturas de tobillo y pie con planificación precisa.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-16 sm:pb-20 space-y-16">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Lesiones deportivas y agudas
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Esguinces de tobillo</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                La lesión deportiva #1. No es “solo una torcedura”. Un esguince mal curado lleva a inestabilidad crónica y desgaste temprano.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Implemento rehabilitación funcional para recuperar estabilidad.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Fracturas y alineación
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Fracturas de tobillo y pie</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Requieren manejo preciso para asegurar que la articulación quede alineada y evitar artrosis post-traumática.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Plan quirúrgico o conservador según la estabilidad de la fractura.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Problemas crónicos y deformidades
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Fascitis plantar y deformidades</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor punzante en el talón, especialmente al despertar. También corrijo juanetes y dedos en garra cuando el dolor limita tu vida diaria.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Terapias de estiramiento, plantillas y, si es necesario, corrección quirúrgica.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-r from-[#0b2a45] via-[#0b2a45] to-brand p-6 text-white shadow-2xl shadow-black/25">
            <h3 className="text-lg font-semibold">Visión integral</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">
              ¿Sabías que el cuerpo es una cadena conectada? A veces, una mala pisada afecta tu rodilla, o una cadera rígida provoca dolor lumbar. Como traumatólogo y ortopedista, experto en cirugía de rodilla y robótica, mi visión es integral: no solo trato el síntoma, busco el origen biomecánico del dolor para ofrecerte una solución definitiva.
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
