import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Soluciones para artrosis de rodilla",
  description:
    "Soluciones para la artrosis de rodilla en Quito: alternativas conservadoras, artroscopia, prótesis total o parcial y cirugía robótica.",
};

export default function KneeArthrosisPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Artrosis
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Soluciones para la Artrosis de Rodilla: vive sin dolor.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              El desgaste cartilaginoso causa rigidez y crujidos, pero no tienes
              que resignarte. Diagnóstico temprano, fortalecimiento y, cuando se
              necesita, prótesis robótica para recuperar tu movilidad.
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
            <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-brand/20 blur-2xl" />
            <div className="absolute -right-6 bottom-10 h-20 w-20 rounded-full bg-[#0b2a45]/15 blur-2xl" />
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
              <Image
                src="/assets/adultos-trotando.webp"
                alt="Caminar sin dolor de rodilla"
                width={900}
                height={720}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              ¿Es la prótesis mi única opción?
            </h2>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              Explico los grados de artrosis. Con diagnóstico temprano y cambios
              de estilo de vida (fortalecimiento, peso saludable, fisioterapia)
              podemos detener el progreso. La prótesis llega cuando hay dolor
              constante y restricción funcional.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Enfoque conservador: fisioterapia, control del peso, analgésicos.",
                "Infiltraciones selectivas para aliviar dolor y ganar movilidad.",
                "Cirugía de preservación articular en casos localizados.",
                "Prótesis parcial o total si el cartílago ya está agotado.",
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
              Cirugía Robótica: tu as bajo la manga
            </h3>
            <p className="mt-3 text-sm text-white/80">
              La robótica optimiza la colocación de la prótesis para que dure
              más y duela menos. Reproduce tu biomecánica y mejora el balance
              ligamentario.
            </p>
            <Link
              href="/rodilla/cirugia-robotica"
              className="mt-4 inline-flex text-sm font-semibold text-white underline decoration-white/60 decoration-2 underline-offset-4"
            >
              Conoce cómo el robot mejora tu prótesis →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fbfc] py-12">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              Pregunta frecuente
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              ¿Qué opciones tengo además de una prótesis?
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Conservo tu rodilla a través de fisioterapia especializada,
              infiltraciones y cirugía de preservación articular. Solo cuando el
              cartílago ya está severamente dañado propongo reemplazo total o
              parcial.
            </p>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              Testimonio de pacientes mayores
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              Controlamos el dolor y retomamos movilidad antes de pensar en
              cirugía. Cuando es el momento, usamos tecnología robótica para un
              resultado duradero.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[26px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.08] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Señales de alerta y fases de dolor
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Dolor al arrancar a caminar, rigidez matutina, crujidos y pérdida
              de movilidad progresiva son signos de desgaste. Si hay dolor
              nocturno o limitación funcional, evaluamos prótesis parcial o
              total.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3">
                <p className="font-semibold text-foreground">Dolor mecánico</p>
                <p>Empeora con actividad, mejora con reposo y analgésicos.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3">
                <p className="font-semibold text-foreground">
                  Dolor inflamatorio
                </p>
                <p>Rigidez matutina prolongada o derrames frecuentes.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-[#2b97a2] p-7 text-white shadow-2xl shadow-black/[.25] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight">
              FAQ rápido sobre artrosis
            </h3>
            <div className="mt-3 grid gap-3 text-sm text-white/85">
              <div>
                <p className="font-semibold">¿Siempre necesito prótesis?</p>
                <p>
                  No. Primero uso medidas conservadoras y preservación articular
                  cuando es posible.
                </p>
              </div>
              <div>
                <p className="font-semibold">¿Cuándo la robótica es ideal?</p>
                <p>
                  En desgaste avanzado o ejes complejos, la robótica mejora
                  alineación y reduce dolor postoperatorio.
                </p>
              </div>
              <div>
                <p className="font-semibold">¿Cuánto tiempo estaré en casa?</p>
                <p>
                  Con protocolos fast track, 1-2 días de hospitalización y
                  rehabilitación inmediata.
                </p>
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
                ¿Quieres profundizar? Descarga mi Guía de Rodilla Vol. 1 - 2024.
              </h3>
              <p className="text-sm text-white/80">
                Cómo preparar tu rodilla, qué ejercicios hacer y cuándo la
                prótesis robótica es la mejor opción.
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
                <li>• Señales de progresión de artrosis.</li>
                <li>• Estrategias de alivio conservador.</li>
                <li>• Checklist para decidir prótesis robótica.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
