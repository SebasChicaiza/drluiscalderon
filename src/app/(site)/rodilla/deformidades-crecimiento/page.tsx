import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Deformidades de rodilla en crecimiento",
  description:
    "Corrección de piernas arqueadas y dolor de crecimiento en Quito. Tratamiento temprano para evitar artrosis precoz.",
};

export default function GrowthDeformitiesPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_88%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Deformidades
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Corrección de piernas arqueadas y dolor en adolescentes
              deportistas.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Las piernas en “O” o “X” no son solo estética: aceleran la
              artrosis y afectan el rendimiento. Evaluación temprana, alineación
              guiada y rehabilitación para evitar desgaste prematuro.
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
          <div className="relative motion-safe:animate-[fade-up_1s_ease-out_both]">
            <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
            <div className="absolute -right-4 bottom-6 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
              <Image
                src="/assets/rodillas-valgas.webp"
                alt="Alineación de piernas"
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
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Dolor de crecimiento vs. lesión (Osgood-Schlatter /
              Sinding-Larsen)
            </h2>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              Si tu hijo siente dolor al saltar o correr, puede ser inflamación
              del tendón en crecimiento. Evalúo clínica y radiológicamente para
              definir reposo activo, fisioterapia y contención.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Dolor en tuberosidad tibial al saltar o arrodillarse.",
                "Rigidez matutina y dificultad para el deporte.",
                "Desequilibrio en la marcha por genu varo/valgo.",
                "Antecedente familiar de deformidades o artrosis precoz.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground/75 shadow-sm shadow-black/[.04]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-[#2b97a2] p-7 text-white shadow-2xl shadow-black/[.28] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight">
              Pregunta esencial
            </h3>
            <p className="mt-4 text-sm font-semibold text-white">
              ¿Cuándo debo corregir las piernas arqueadas?
            </p>
            <p className="mt-3 text-sm leading-6 text-white/85">
              Detectar la deformidad antes del desgaste es clave. Si hay dolor,
              desequilibrio en la marcha o limitación deportiva, planifico
              ortesis o cirugía guiada para proteger la articulación.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#f8fbfc] via-white to-[#f4fbfc] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              ¿Por qué conectar con artrosis?
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              Si no se corrige a tiempo, la mala alineación deriva en artrosis
              prematura. Coordino con mi área de artrosis para prevenir
              complicaciones futuras.
            </p>
            <Link
              href="/rodilla/artrosis-protesis"
              className="mt-3 inline-flex text-sm font-semibold text-brand underline"
            >
              Ver soluciones para artrosis →
            </Link>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              Plan de acción
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Evaluación clínica y estudios de imagen.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Órtesis, fisioterapia y control de crecimiento.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Cirugía guiada en casos severos para reorientar la carga.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="mb-16 rounded-[30px] border border-brand/25 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand p-8 text-white shadow-2xl shadow-black/[.25] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Mis recomendaciones
              </p>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                ¿Quieres profundizar? Descarga gratis mi Guía de Rodilla Vol. 1
                - 2024.
              </h3>
              <p className="text-sm text-white/80">
                Explico criterios entre sutura y menisectomía, ejercicios clave
                y preguntas que debes hacer antes de operarte.
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
              <p className="font-semibold">Lo que encontrarás</p>
              <ul className="mt-2 grid gap-2">
                <li>• Señales para operar y cuándo no hacerlo.</li>
                <li>• Rutina de rehabilitación y tiempos estimados.</li>
                <li>• Checklist de preguntas para tu cirujano.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
