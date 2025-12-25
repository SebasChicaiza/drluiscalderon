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
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Trabajo con todos los seguros mediante reembolso.
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
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12] transition-transform duration-700 ease-out hover:-translate-y-1">
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
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
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
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground/75 shadow-sm shadow-black/[.04] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.08]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-[#2b97a2] p-7 text-white shadow-2xl shadow-black/[.28] motion-safe:animate-[fade-up_1s_ease-out_both] flex flex-col justify-center h-full transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.34]">
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
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.12]">
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
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.12]">
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
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Cirugía guiada y cuidados
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              ¿Cómo corrijo las deformidades y qué pasa después?
            </h2>
            <div className="grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
              {[
                [
                  "Guías de crecimiento",
                  "Hemiepifisiodesis para redirigir el crecimiento en niños y adolescentes.",
                ],
                [
                  "Osteotomías",
                  "Cortes precisos para reorientar la carga y proteger el cartílago.",
                ],
                [
                  "Rehabilitación",
                  "Fisioterapia, plantillas y control de marcha para consolidar la corrección.",
                ],
                [
                  "Seguimiento",
                  "Rx seriadas hasta cierre de fisis o consolidación completa.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm shadow-black/[.04] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.08]"
                >
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#f8fbfc] p-7 shadow-lg shadow-black/[.08] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.14]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Preguntas clave de los padres
            </h3>
            <ul className="mt-3 grid gap-3 text-sm text-foreground/70">
              <li>
                • ¿Afecta la estatura final? Planeo para no comprometer el
                crecimiento global.
              </li>
              <li>
                • ¿Cuánto tiempo usa ortesis? Depende del grado y la respuesta;
                lo reviso en controles.
              </li>
              <li>
                • ¿Cuándo puede volver al deporte? Según alineación y fuerza;
                usualmente tras completar la rehabilitación.
              </li>
            </ul>
            <div className="relative h-90 mt-4 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60 transition-transform duration-700 ease-out hover:-translate-y-1">
              <Image
                src="/drluis/drluis-conferencia-caminando.webp"
                alt="Placeholder trauma de rodilla"
                fill
                className="object-cover opacity-90 object-[50%_85%]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden relative overflow-hidden bg-gradient-to-br from-[#f8fbfc] via-white to-[#f4fbfc] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.08]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Historias de corrección
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Reemplaza este bloque con fotos de alineación pre y post
              corrección, y seguimiento de crecimiento.
            </p>
          </div>
          <div className="relative rounded-[26px] border border-dashed border-black/15 bg-white/60 p-4 shadow-inner shadow-black/5">
            <p className="text-sm text-foreground/60 text-center">
              Coloca aquí tu imagen de corrección de deformidades.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
