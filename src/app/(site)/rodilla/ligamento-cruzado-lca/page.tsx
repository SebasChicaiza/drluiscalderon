import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Medicina deportiva y LCA",
  description:
    "Medicina deportiva para ligamentos de rodilla (LCA) en Quito. Protocolos acelerados, retorno seguro y tecnología asistida.",
};

export default function LigamentPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(43,151,162,0.2),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Medicina deportiva
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Reconstrucción de LCA y retorno al deporte.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              La rotura del LCA es la pesadilla del deportista: giros bruscos,
              hinchazón inmediata y sensación de “rodilla floja”. Te acompaño
              con protocolos acelerados para volver con confianza. Analizo tu
              biomecánica, ajusto los injertos y defino hitos antes del retorno
              al juego.
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Trabajo con todos los seguros mediante reembolso.
            </p>
          </div>
          <div className="relative motion-safe:animate-[fade-up_1s_ease-out_both]">
            <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
            <div className="absolute -right-4 bottom-6 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
              <Image
                src="/assets/lca.webp"
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
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Inestabilidad rotuliana: ¿sientes que la rodilla “se te sale”?
            </h2>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              En jóvenes y mujeres es común que la rótula no deslice en su
              surco. Fortalecimiento, alineación precisa y, si es necesario,
              reconstrucción anatómica del LCA para estabilizar.
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Tendinopatías: no todo es hueso
            </h3>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              El dolor frontal puede ser tendinitis rotuliana. Diferenciarlo es
              clave para definir reposo activo, fisioterapia o cirugía.
            </p>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#0b2a45] p-6 text-white shadow-xl shadow-black/[.18] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight">
              Pregunta crucial
            </h3>
            <p className="mt-3 text-sm text-white/80">
              ¿Cuánto tiempo tomo volver a jugar después de reconstruir el LCA?
            </p>
            <p className="mt-3 text-sm text-white/80">
              Con protocolos acelerados recuperas estabilidad en 4-6 meses según
              tu deporte. Incluye fisioterapia guiada, ortesis y monitoreo
              cercano para evitar recaídas.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fbfc] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
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
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              Mi enfoque integral
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              Cirugía mínimamente invasiva, rehabilitación temprana y coaching
              de retorno deportivo para que vuelvas a competir con seguridad.
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
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Elección del injerto
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              ¿Hueso-tendón-hueso, isquiotibiales o aloinjerto?
            </h2>
            <div className="grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
              {[
                [
                  "Autoinjerto HTH",
                  "Ideal para alta demanda; fijación rápida y retorno sólido.",
                ],
                [
                  "Isquiotibiales",
                  "Menos dolor anterior, buen rendimiento en deportistas recreativos.",
                ],
                [
                  "Aloinjeto",
                  "Útil en revisiones o cuando quiero evitar morbilidad del sitio donante.",
                ],
                [
                  "Refuerzos internos",
                  "Cintas y guías para proteger la plastia en las primeras semanas.",
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
          <div className="rounded-[26px] border border-black/10 bg-[#f8fbfc] p-7 shadow-lg shadow-black/[.08]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Métricas de retorno deportivo
            </h3>
            <ul className="mt-3 grid gap-3 text-sm text-foreground/70">
              <li>• Fuerza cuádriceps &gt;=90% respecto a la pierna sana.</li>
              <li>
                • Pruebas de salto y estabilidad sin asimetrías significativas.
              </li>
              <li>
                • Control neuromuscular y confianza reportada por el paciente.
              </li>
            </ul>
            <div className="relative h-60 mt-4 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60">
              <Image
                src="/drluis/adultos-corriendo-maraton.webp"
                alt="Placeholder trauma de rodilla"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className=" hidden relative overflow-hidden bg-gradient-to-br from-[#f8fbfc] via-white to-[#f4fbfc] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.08]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Historias de retorno deportivo
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Reemplaza este bloque con fotos o métricas de atletas que
              volvieron a su nivel tras LCA.
            </p>
          </div>
          <div className="rounded-[26px] border border-dashed border-black/15 bg-white/60 p-4 text-center shadow-inner shadow-black/5">
            <p className="text-sm text-foreground/60">
              Coloca aquí tu imagen o datos de progreso.
            </p>
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
