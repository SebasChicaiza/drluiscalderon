import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Miembro superior | Dr. Luis Calderón",
  description:
    "Traumatología de hombro, codo y muñeca en Quito. Manguito rotador, túnel carpiano y lesiones deportivas con enfoque integral.",
};

export default function ShoulderPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f6fbfc] to-white">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_88%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Miembro superior
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Traumatología deportiva y laboral de hombro, codo y muñeca
            </h1>
            <p className="text-base leading-7 text-foreground/75">
              Tus brazos son tu herramienta de trabajo y vida. Desde lanzar una
              pelota hasta usar el mouse, necesitas movimiento sin dolor. Trato
              lesiones agudas (golpes/caídas) y crónicas (desgaste/uso
              repetitivo).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:opacity-90"
              >
                Agenda tu evaluación
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
                  src="/drluis/dolor-muneca.webp"
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
                Hombro: movilidad y fuerza
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Manguito rotador
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor profundo al levantar el brazo o dormir sobre ese lado.
                Puede ser tendinitis o rotura. Muchos casos se resuelven con
                artroscopia (mínimamente invasiva).
              </p>
              <h4 className="mt-4 text-sm font-semibold text-foreground">
                Luxaciones y fracturas
              </h4>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                Tras caídas o deportes de contacto. Buscamos estabilidad y
                evitar que el hombro “se salga” repetidamente.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Codo y precisión
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Epicondilitis
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Dolor en la cara externa o interna del codo por sobreuso.
                Tratamos la inflamación tendinosa para que regreses a tus
                actividades.
              </p>
              <h4 className="mt-4 text-sm font-semibold text-foreground">
                Fracturas y lesiones
              </h4>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                Requieren alineación precisa y rehabilitación para preservar
                fuerza y movilidad.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Muñeca: control y sensibilidad
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Síndrome de túnel carpiano
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Adormecimiento y hormigueo en dedos, común en trabajo de
                oficina. Liberamos el nervio atrapado para recuperar
                sensibilidad.
              </p>
              <h4 className="mt-4 text-sm font-semibold text-foreground">
                Fracturas de muñeca
              </h4>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                Frecuentes tras una caída. Buscamos alineación perfecta para no
                perder fuerza de agarre ni movilidad a futuro.
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
