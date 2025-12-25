import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Trauma de rodilla | Dr. Luis Calderón",
  description:
    "Fracturas, luxaciones y lesiones complejas de rodilla atendidas con reducción anatómica, artroscopia y navegación para proteger la articulación.",
};

export default function KneeInjuriesPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(43,151,162,0.2),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(11,42,69,0.12),transparent_45%)]" />
        <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Trauma de rodilla
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Fracturas, luxaciones y lesiones complejas atendidas con precisión
              y rehabilitación guiada.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Prioridad: reducir, estabilizar y proteger el cartílago. Uso
              fijación estable, artroscopia y cuando aplica navegación para
              recuperar el eje y evitar artrosis temprana.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 transition hover:opacity-90"
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Trabajo con todos los seguros mediante reembolso.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative rounded-[26px] border border-black/10 bg-white/60 shadow-lg shadow-black/[.08] backdrop-blur motion-safe:animate-[fade-up_1s_ease-out_both]">
              <div className="relative h-96 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60 transition-transform duration-700 ease-out hover:-translate-y-1">
                <Image
                  src="/drluis/dr-luis-sonriendo.webp"
                  alt="Placeholder trauma de rodilla"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0b2a45] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/30 text-gray-100">
              Qué abordo en trauma de rodilla
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Experiencia en casos complejos y combinados
            </h2>
            <div className="grid gap-10 text-sm text-white/85 sm:grid-cols-1 w-128 mt-18">
              {[
                [
                  "Fracturas complejas",
                  "Platillos tibiales, rótula, fémur distal. Reducción anatómica y fijación estable para proteger el cartílago.",
                ],
                [
                  "Lesiones combinadas",
                  "Ligamentos + menisco + cartílago. Abordaje con artroscopia y protocolos de rehabilitación acelerada.",
                ],
                [
                  "Luxaciones",
                  "Reducción urgente, evaluación vascular y reconstrucción ligamentaria cuando es necesario.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-sm shadow-black/20 transition duration-500 ease-out hover:-translate-y-1 hover:bg-white/15"
                >
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 leading-6 text-white/80">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[26px] border border-white/25 bg-white/10 p-4 shadow-inner shadow-black/25 motion-safe:animate-[fade-up_1s_ease-out_both]">
            <div className="relative h-200 w-full overflow-hidden rounded-[18px] bg-white/20 transition-transform duration-700 ease-out hover:-translate-y-1">
              <video
                src="/drluis/dr-rehabilitacion-rodilla.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full rounded-lg"
                preload="metadata"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Protocolo de atención
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Paso a paso para estabilizar y recuperar tu rodilla
            </h2>
            <div className="grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
              {[
                [
                  "1) Diagnóstico inmediato",
                  "Examen físico, Rx, TAC o RM para definir el plan sin perder tiempo crítico.",
                ],
                [
                  "2) Reducción y fijación",
                  "Alineo la articulación con placas, tornillos o clavos según el caso.",
                ],
                [
                  "3) Reparación artroscópica",
                  "Cuando hay menisco o cartílago afectados, uso artroscopia para preservar tejido.",
                ],
                [
                  "4) Rehabilitación guiada",
                  "Fisioterapia temprana, control del dolor y seguimiento radiográfico hasta la consolidación.",
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
            <div className="relative h-70 mt-4 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60">
              <Image
                src="/drluis/drluis-con-rodilla-centrado.webp"
                alt="Dr Luis con rodilla real"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#f8fbfc] p-7 shadow-lg shadow-black/[.08] transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-black/[.12] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Tecnología que suma
            </h3>
            <p className="mt-3 text-sm leading-6 text-foreground/70">
              Uso navegación quirúrgica cuando aplica para reconstruir el eje y
              proteger la biomecánica de la rodilla. En casos seleccionados,
              combino con cirugía robótica en la etapa de prótesis.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
              <li>• Planeación 3D para cortes precisos.</li>
              <li>• Evaluación de ligamentos con tests dinámicos.</li>
              <li>
                • Coordinación con medicina deportiva para retorno seguro.
              </li>
            </ul>
            <div className="relative h-96 mt-4 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60">
              <Image
                src="/drluis/dr-operando.webp"
                alt="Placeholder trauma de rodilla"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand py-12 text-white">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Seguimiento cercano
            </p>
            <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Comunicación directa y control de progresos
            </h3>
            <p className="text-sm text-white/80">
              Mantengo contacto durante tu recuperación, ajusto carga y
              ejercicio según imágenes y evolución clínica. Atiendo con
              reembolso de todos los seguros y doy soporte administrativo.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/15 bg-white/10 px-4 py-5 text-sm text-white/85 shadow-lg shadow-black/[.2]">
            <p className="font-semibold">Indicadores que monitoreo</p>
            <ul className="mt-2 grid gap-2">
              <li>• Consolidación ósea y alineación en controles.</li>
              <li>• Rango de movimiento y fuerza cuádriceps/isquiotibiales.</li>
              <li>• Estabilidad ligamentaria y ausencia de derrames.</li>
            </ul>
            <Link
              href="/rodilla/ligamento-cruzado-lca"
              className="mt-4 inline-flex text-sm font-semibold text-white underline decoration-white/70 underline-offset-4"
            >
              Ver mi ruta de medicina deportiva →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Recuperación en casa
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Qué puedes esperar las primeras semanas
            </h2>
            <div className="grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
              {[
                [
                  "Dolor y control de inflamación",
                  "Frío local, analgésicos y elevación; evito antiinflamatorios si retrasan consolidación.",
                ],
                [
                  "Apoyo al caminar",
                  "Uso muletas hasta que la fijación y el dolor permitan carga segura.",
                ],
                [
                  "Citas de control",
                  "Radiografías seriadas para confirmar que todo cicatriza alineado.",
                ],
                [
                  "Señales de alerta",
                  "Aumento brusco de dolor, fiebre o adormecimiento requieren valoración inmediata.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm shadow-black/[.04]"
                >
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#f8fbfc] p-7 text-sm text-foreground/75 shadow-lg shadow-black/[.08]">
            <p className="text-lg font-semibold text-foreground">
              Preguntas rápidas
            </p>
            <ul className="mt-3 grid gap-3">
              <li>
                <span className="font-semibold text-foreground">
                  ¿Cuándo conduzco?
                </span>{" "}
                Cuando apoyas sin dolor y tienes control muscular (suele ser 4-6
                semanas según la lesión).
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  ¿Puedo viajar?
                </span>{" "}
                Evito vuelos largos en las primeras 3-4 semanas por riesgo de
                trombosis; si es necesario, planifico profilaxis.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  ¿Queda material?
                </span>{" "}
                Uso implantes biocompatibles; solo retiro si generan molestia.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#f8fbfc] via-white to-[#f4fbfc] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.08]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Historias de recuperación
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Reemplaza este bloque con testimonios y fotos de casos de trauma
              que quieras mostrar.
            </p>
          </div>
          <div className="relative rounded-[26px] border border-dashed border-black/15 bg-white/60 p-4 shadow-inner shadow-black/5">
            <div className="relative h-64 w-full overflow-hidden rounded-[18px] bg-white/70">
              <Image
                src="/assets/placeholder-trauma-gallery.webp"
                alt="Placeholder galería trauma"
                fill
                className="object-cover opacity-40"
              />
            </div>
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Coloca aquí tu imagen de caso real
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
