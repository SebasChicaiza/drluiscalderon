import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Centro de rodilla en Quito",
  description:
    "Centro especializado en cirugía y rehabilitación de rodilla en Quito. Tecnologías robóticas, artroscopia y preservación articular.",
};

const sections = [
  {
    title: "Meniscos y artroscopia",
    href: "/rodilla/artroscopia-meniscos",
    summary:
      "Decido entre sutura preservadora o menisectomía parcial según tu lesión y resonancia.",
  },
  {
    title: "Ligamentos y lesiones deportivas",
    href: "/rodilla/ligamento-cruzado-lca",
    summary:
      "Reconstrucción de LCA con protocolos acelerados para volver al deporte con confianza.",
  },
  {
    title: "Artrosis y prótesis",
    href: "/rodilla/artrosis-protesis",
    summary:
      "Alternativas conservadoras y cirugía robótica cuando el desgaste ya limita tu vida diaria.",
  },
  {
    title: "Deformidades y crecimiento",
    href: "/rodilla/deformidades-crecimiento",
    summary:
      "Corrección de genu varo/valgo y dolor de crecimiento para evitar artrosis precoz.",
  },
];

export default function KneePage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70">
          Rodilla
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Centro Especializado en Cirugía y Rehabilitación de Rodilla en Quito
        </h1>
        <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
          Las rodillas son clave para tu movilidad. Desde lesiones deportivas
          hasta desgaste por edad, mi enfoque combina tecnología robótica con
          preservación articular y rehabilitación personalizada.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-[28px] border border-foreground/10 bg-white px-6 py-8 text-left shadow-xl shadow-black/[.07] transition hover:-translate-y-1 hover:border-brand"
          >
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {section.title}
            </h2>
            <p className="mt-3 text-sm text-foreground/70">{section.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Leer más →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-foreground/70 shadow-sm shadow-black/[.03]">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            Pregunta que recibo a diario
          </h3>
          <p className="mt-3 text-sm text-foreground/80">
            ¿Cuánto cuesta una operación de meniscos en Quito?
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            El costo varía según la técnica (sutura-preservadora vs.
            menisectomía parcial) y si necesitas estudios de imagen adicionales.
            En mi consultorio trabajo con seguros privados, planes internacionales
            y pago directo para que tengas claridad desde el principio.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-foreground/70 shadow-sm shadow-black/[.03]">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            ¿Quieres profundizar?
          </h3>
          <p className="mt-3 text-sm text-foreground/70">
            Descarga gratis mi Guía de Rodilla Vol. 1 - 2024, donde explico cuándo
            operar, cómo manejar la rehabilitación y qué esperar de cada
            procedimiento.
          </p>
          <a
            href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            target="_blank"
            rel="noreferrer"
          >
            Descargar guía
          </a>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-[32px] border border-brand/30 bg-gradient-to-br from-[#f4fcfe] to-[#e0f1f3] p-8 shadow-2xl shadow-brand/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand/70">
              Lead magnet
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              ¿Quieres profundizar? Descarga mi guía gratuita de rodilla.
            </h2>
            <p className="mt-3 text-sm text-foreground/70">
              Incluyo ejercicios, ejemplos de protocolos y respuestas a las
              preguntas que más recibo. La puedes leer ahora mismo o imprimir.
            </p>
          </div>
          <a
            href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full border border-brand bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand/80"
          >
            Descargar guía
          </a>
        </div>
      </div>
    </Container>
  );
}
