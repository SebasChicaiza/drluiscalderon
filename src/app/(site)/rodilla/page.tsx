import type { Metadata } from "next";
import Image from "next/image";
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
      <div className="max-w-4xl motion-safe:animate-[fade-up_0.9s_ease-out_both]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70">
          Rodilla
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Especializado en Cirugía y Rehabilitación de Rodilla
        </h1>
        <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
          Las rodillas son clave para tu movilidad. Desde lesiones deportivas
          hasta desgaste por edad, mi enfoque combina tecnología robótica con
          preservación articular y rehabilitación personalizada.
        </p>
      </div>

      <section className="mt-12 grid gap-10 rounded-[32px] bg-gradient-to-br from-white via-[#f4fbfc] to-white p-4 lg:grid-cols-[1.05fr_1.15fr] lg:items-start lg:p-6">
        <div className="space-y-6 motion-safe:animate-[fade-up_1s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Especializado en cirugía y rehabilitación
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Plan de rodilla integral con tecnología, precisión y cuidado
              humano.
            </h2>
            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
              Organizo tu diagnóstico, tratamiento y recuperación en cuatro
              grandes áreas: meniscos, ligamentos, artrosis y deformidades.
              Elige la ruta que necesitas y acompaño cada paso con protocolos
              claros.
            </p>
          </div>
          <div className="hidden w-full max-w-md lg:block">
            <Image
              src="/assets/cirugia-rodilla.webp"
              alt="Cirugía de rodilla"
              width={600}
              height={480}
              className="h-auto w-full rounded-[28px] object-cover shadow-xl shadow-black/[.12]"
            />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((section, idx) => (
            <Link
              key={section.href}
              href={section.href}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="group rounded-[26px] border border-black/8 bg-white px-6 py-7 text-left shadow-lg shadow-black/[.08] transition hover:-translate-y-1 hover:border-brand motion-safe:animate-[fade-up_0.9s_ease-out_both]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {section.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/70">
                {section.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Leer más →
              </span>
            </Link>
          ))}
          <Link
            href="/rodilla/cirugia-robotica"
            style={{ animationDelay: `${sections.length * 80}ms` }}
            className="group sm:col-span-2 rounded-[26px] border border-black/8 bg-white px-6 py-7 text-left shadow-lg shadow-black/[.08] transition hover:-translate-y-1 hover:border-brand motion-safe:animate-[fade-up_0.9s_ease-out_both]"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Cirugía robótica
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              Precisión milimétrica, menos dolor y recuperación acelerada para
              implantes de rodilla con tecnología asistida.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Leer más →
            </span>
          </Link>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-[#0b2a45] py-14">
        <Container className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              El núcleo
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Principales patologías y rutas de solución
            </h2>
            <p className="max-w-4xl text-sm leading-7 text-white/75 sm:text-base">
              Seis focos clave para abordar tu dolor o inestabilidad de rodilla.
              Cada tarjeta resume el problema y te lleva a la solución adecuada.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Rotura de LCA e inestabilidad",
                text: "La pesadilla del deportista. Giros bruscos o aterrizajes causan hinchazón e inestabilidad ('rodilla floja').",
                link: "/rodilla/ligamento-cruzado-lca",
                cta: "Ver recuperación LCA →",
              },
              {
                title: "Lesiones meniscales",
                text: "El menisco amortigua tu rodilla. Una rotura puede dar dolor, bloqueos o atrapamiento. Evaluamos si suturar o limpiar.",
                link: "/rodilla/artroscopia-meniscos",
                cta: "Tratamientos de menisco →",
              },
              {
                title: "Tendinitis y dolor anterior",
                text: "Inflamación del tendón rotuliano o cuadricipital. Dolor al saltar, subir escaleras o correr; requiere manejo específico.",
                link: "/rodilla/ligamento-cruzado-lca",
                cta: "Terapias para tendones →",
              },
              {
                title: "Artrosis y desgaste de cartílago",
                text: "Rigidez, crujidos y dolor progresivo. Con diagnóstico temprano o robótica puedes vivir sin dolor.",
                link: "/rodilla/artrosis-protesis",
                cta: "Conoce la prótesis robótica →",
              },
              {
                title: "Deformidades angulares",
                text: "Piernas en X u O aceleran el desgaste y la artrosis futura. Corregir alinea la carga y protege la articulación.",
                link: "/rodilla/deformidades-crecimiento",
                cta: "Corrección de deformidades →",
              },
              {
                title: "Dolor en adolescentes",
                text: "Osgood-Schlatter o Sinding-Larsen en deportistas jóvenes. Manejo para evitar secuelas en el cartílago de crecimiento.",
                link: "/rodilla/deformidades-crecimiento",
                cta: "Traumatología adolescente →",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group flex flex-col justify-between rounded-[26px] border border-white/20 bg-white/95 px-6 py-7 text-left shadow-lg shadow-black/[.18] transition hover:-translate-y-1 hover:border-brand motion-safe:animate-[fade-up_0.9s_ease-out_both]"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.text}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  {item.cta}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-14 bg-[#f8fbfc] py-12">
        <Container className="space-y-6 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Guía rápida
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              ¿Qué sientes en tu rodilla?
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Selecciona el síntoma que más se parezca a lo que sientes para
              orientar el diagnóstico.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              {
                q: "Siento que la rodilla se me sale o falsea",
                a: "Puede ser inestabilidad rotuliana o rotura de LCA. Sucede cuando la rótula no desliza bien en su surco o el ligamento se ha roto.",
              },
              {
                q: "Me truena o se me traba al caminar",
                a: "Típico de una lesión de menisco (atrapamiento) o cuerpos libres dentro de la articulación. Evalúo con resonancia y pruebas específicas.",
              },
              {
                q: "Me duele justo debajo de la rótula al saltar",
                a: "Probable tendinopatía rotuliana (rodilla del saltador). Es degeneración del tendón y requiere tratamiento específico, no solo reposo.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm shadow-black/[.04] transition hover:border-brand/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-foreground">
                  {item.q}
                  <span className="text-foreground/50 transition group-open:rotate-180">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-sm text-foreground/70">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white">
        <Container className="mb-16 rounded-[30px] border border-brand/25 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand p-8 text-white shadow-2xl shadow-black/[.25]">
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
    </Container>
  );
}
