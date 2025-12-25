import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Tratamiento de meniscos",
  description:
    "Tratamiento de meniscos y artroscopia en Quito. Evaluación de roturas deportivas o por desgaste y decisiones entre sutura o menisectomía.",
};

export default function ArthroscopyMeniscusPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(43,151,162,0.2),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(11,42,69,0.1),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Meniscos y artroscopia
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Tratamiento de Meniscos: ¿Reparar o Recortar?
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              El menisco es el amortiguador de tu rodilla. Las roturas pueden
              ser traumáticas o por desgaste y generan atrapamiento o bloqueo.
              Decido entre sutura preservadora o menisectomía parcial según tu
              resonancia.
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
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
            <div className="absolute -right-4 bottom-6 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
              <Image
                src="/assets/lesion-rodilla.webp"
                alt="Dolor de menisco en la rodilla"
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
              ¿Cuándo necesitas cirugía de menisco?
            </h2>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              No todas las lesiones requieren quirófano. Con tu resonancia
              decido si una sutura preserva el menisco o si una menisectomía
              parcial es la mejor opción. Preservar protege el cartílago y la
              estabilidad.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Bloqueo o atrapamiento al caminar.",
                "Dolor al girar o ponerse en cuclillas.",
                "Derrames frecuentes y sensación de inestabilidad.",
                "Roturas complejas o asociadas a artrosis.",
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
          <div className="rounded-[26px] border border-black/10 bg-[#0b2a45] p-6 text-white shadow-xl shadow-black/[.18] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight">
              Pregunta frecuente
            </h3>
            <p className="mt-3 text-sm text-white/80">
              ¿Cuánto cuesta una operación de meniscos en Quito?
            </p>
            <p className="mt-3 text-sm text-white/80">
              El costo varía según la técnica (sutura preservadora vs.
              menisectomía parcial) y estudios de imagen. Acepto seguros
              privados, planes internacionales y pago directo para darte
              claridad desde la primera consulta.
            </p>
            <div className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white">
              Guía práctica: criterios para operar y plan de rehabilitación.
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#f8fbfc] via-white to-[#f4fbfc] py-12">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Protocolos mínimamente invasivos
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              Trabajo con artroscopia dirigida, dos pequeñas incisiones y visión
              directa. Evaluamos, limpiamos la articulación y reparamos el
              menisco con menos dolor y un retorno más rápido a tus rutinas.
            </p>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Recuperación guiada
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              Incluye fisioterapia dirigida, fortalecimiento del cuádriceps y
              seguimiento para ayudarte a recuperar la marcha, correr o jugar
              con confianza.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Carga progresiva y control de inflamación.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Reeducación de la marcha y propiocepción.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Plan de retorno deportivo con hitos claros.
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
