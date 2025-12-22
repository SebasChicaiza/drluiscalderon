import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Cirugía Robótica de Rodilla en Quito: Precisión milimétrica",
  description:
    "Cirugía robótica de rodilla en Quito guiada por el Dr. Luis Calderón. Menos dolor, recuperación acelerada y tecnología robótica de vanguardia.",
};

const procedureJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Cirugía Robótica de Rodilla",
  bodyLocation: "Knee",
  procedureType: "SurgicalProcedure",
  howPerformed:
    "Mínimamente invasivo asistido por brazo robótico para mayor precisión en la colocación de prótesis.",
  status: "Active",
  performer: {
    "@type": "Physician",
    name: "Dr. Luis Calderón",
    medicalSpecialty: "Orthopedic",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la cirugía robótica de rodilla en Ecuador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo aproximado oscila entre $10,000 y $14,000, dependiendo de la prótesis y la clínica, siendo hasta un 70% más económico que en EE.UU.",
      },
    },
    {
      "@type": "Question",
      name: "¿El seguro médico cubre la cirugía robótica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de seguros privados en Ecuador cubren el procedimiento de prótesis. Nuestro equipo te ayuda con el trámite de reembolso.",
      },
    },
  ],
};

export default function RoboticSurgeryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="space-y-16 sm:space-y-20">
        <section className="relative overflow-hidden rounded-[36px] bg-white px-4 py-14 shadow-2xl sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(43,151,162,0.15),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(11,42,69,0.12),transparent_45%)]" />
          <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand">
                Tecnología robótica
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Cirugía Robótica de Rodilla en Quito: tu implante con precisión
                milimétrica.
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
                Menos dolor, recuperación acelerada y mayor durabilidad de tu
                prótesis. Tecnología de vanguardia guiada por mi experiencia en
                cirugía de rodilla.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80">
                <span className="rounded-full bg-brand/10 px-4 py-2 text-brand">
                  Quito
                </span>
                <span className="rounded-full bg-brand/10 px-4 py-2 text-brand">
                  Fast track
                </span>
                <span className="rounded-full bg-brand/10 px-4 py-2 text-brand">
                  Robot Mako®
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Agendar evaluación
                </Link>
                <Link
                  href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand/5"
                >
                  Descargar guía
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-brand/20 blur-2xl sm:h-36 sm:w-36" />
              <div className="absolute -right-6 bottom-4 h-24 w-24 rounded-full bg-[#0b2a45]/15 blur-2xl sm:h-32 sm:w-32" />
              <div className="relative mx-auto aspect-[4/5] max-w-[360px] overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
                <Image
                  src="/assets/foto-drluis.webp"
                  alt="Dr. Luis Calderón"
                  fill
                  sizes="360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                ¿El robot opera solo?
              </h2>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                <span className="inline-block motion-safe:animate-[typing_1.8s_steps(48)_both]">
                  No es el robot, es el cirujano potenciado por tecnología.
                </span>
              </h3>
              <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                Es un error común pensar que el robot opera solo. Yo tengo el
                control el 100% del tiempo. El brazo robótico es mi asistente
                inteligente: me permite planificar tu cirugía en 3D antes de
                tocarte y asegura que el corte óseo sea exacto, protegiendo los
                tejidos sanos circundantes.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white p-5 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both]">
              <div className="relative h-72 overflow-hidden rounded-[24px] border border-black/5">
                <Image
                  src="/assets/cirugia-robot.webp"
                  alt="Dr. Luis Calderón con visor quirúrgico"
                  fill
                  sizes="520px"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Yo superviso cada paso del procedimiento robótico.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-[#0b2a45] py-14">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4 motion-safe:animate-[fade-up_0.9s_ease-out_both]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/20">
                Comparativa
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Cirugía tradicional vs. cirugía robótica: ¿cuál es la
                diferencia?
              </h2>
              <p className="text-sm text-white/80">
                Alineación perfecta, menos dolor y estancias más cortas. Aquí
                ves las diferencias clave.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur motion-safe:animate-[fade-up_1s_ease-out_both]">
              <table className="w-full text-left text-sm text-white/90">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Característica</th>
                    <th className="px-4 py-3 font-semibold">Tradicional</th>
                    <th className="px-4 py-3 font-semibold">Robótica</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Precisión",
                      "Depende del ojo humano",
                      "Submilimétrica (0.5mm)",
                    ],
                    [
                      "Daño a tejidos",
                      "Mayor manipulación",
                      "Mínimo (protege ligamentos)",
                    ],
                    [
                      "Dolor post-operatorio",
                      "Moderado / Alto",
                      "Reducido significativamente",
                    ],
                    [
                      "Hospitalización",
                      "3 - 4 días",
                      "1 - 2 días (Fast Track)",
                    ],
                    ["Durabilidad", "Estándar", "Mayor (alineación perfecta)"],
                  ].map(([feature, trad, robo]) => (
                    <tr key={feature} className="border-t border-white/10">
                      <td className="px-4 py-3 font-semibold text-white">
                        {feature}
                      </td>
                      <td className="px-4 py-3">{trad}</td>
                      <td className="px-4 py-3 text-brand">{robo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Cirugía robótica de rodilla en Quito: tu inversión inteligente
              </h2>
              <p className="mt-3 text-sm text-foreground/70 sm:text-base">
                Muchos pacientes creen que la robótica es impagable. Si bien la
                tecnología tiene un costo adicional, el ahorro en días de
                hospitalización y terapias a largo plazo compensa la inversión.
              </p>
              <p className="mt-3 rounded-2xl border border-brand/40 bg-brand/5 px-4 py-3 text-sm font-semibold text-brand">
                Mientras que en EE.UU. este procedimiento supera los $35,000, en
                Ecuador el rango de inversión es significativamente menor
                (aprox. $10,000 - $14,000 según el caso y la clínica). Acepto la
                mayoría de seguros médicos con reembolso.
              </p>
              <p className="text-sm text-foreground/70">
                Incluye honorarios quirúrgicos, 1-2 días de hospitalización,
                dispositivos y controles postoperatorios.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_1s_ease-out_both]">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Tu ruta rápida con robótica
              </h3>
              <div className="mt-4 grid gap-3">
                {[
                  {
                    title: "Planificación 3D",
                    desc: "Escaneo y mapeo de tu rodilla para definir cortes milimétricos y elegir el implante ideal.",
                  },
                  {
                    title: "Fast track quirúrgico",
                    desc: "Incisiones precisas, mínimo trauma y balance ligamentario optimizado con el brazo robótico.",
                  },
                  {
                    title: "Recuperación guiada",
                    desc: "Movilización temprana, fisioterapia dirigida y seguimiento cercano para volver a tu ritmo.",
                  },
                ].map((step, i) => (
                  <div
                    key={step.title}
                    className="flex gap-3 rounded-2xl border border-black/5 bg-black/5 px-4 py-3"
                  >
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {step.title}
                      </p>
                      <p className="text-sm text-foreground/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f8fbfc] py-12">
          <Container>
            <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                ¿Quién es candidato ideal para esta tecnología?
              </h2>
              <ul className="mt-4 grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
                {[
                  "Pacientes con artrosis severa (desgaste hueso con hueso).",
                  "Pacientes que buscan volver a hacer deporte o mantener una vida activa.",
                  "Casos complejos con deformidades angulares (piernas en X o en O).",
                  "Personas que temen al dolor postoperatorio excesivo.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-brand/5 px-4 py-3"
                  >
                    <span className="mt-1 h-3 w-3 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="rounded-[36px] border border-brand/30 bg-[#0b2a45] p-8 m-20 text-white shadow-2xl shadow-black/[.35]">
          <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between motion-safe:animate-[fade-up_0.9s_ease-out_both]">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                Recupera tu vida con la mejor tecnología disponible
              </h2>
              <p className="text-sm text-white/80">
                No dejes que el miedo te paralice. La tecnología está aquí para
                ayudarte a caminar de nuevo.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex h-14 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Agendar Evaluación para Robótica
            </Link>
          </Container>
        </section>
      </div>
    </>
  );
}
