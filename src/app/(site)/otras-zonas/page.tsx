import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Otras zonas | Traumatología integral",
  description:
    "Traumatología integral para cadera, columna, hombro, codo, muñeca, pie y tobillo en Quito. Diagnóstico preciso y planes personalizados.",
};

const areas = [
  {
    title: "Cadera",
    href: "/otras-zonas/cadera",
    desc: "Prótesis, artrosis y choque femoroacetabular con enfoque conservador y quirúrgico.",
  },
  {
    title: "Columna",
    href: "/otras-zonas/columna",
    desc: "Hernias, ciática y estenosis lumbar. Primero opciones conservadoras, luego cirugía si es necesario.",
  },
  {
    title: "Hombro",
    href: "/otras-zonas/parte-superior",
    desc: "Manguito rotador, luxaciones y lesiones deportivas. Artroscopia mínimamente invasiva.",
  },
  {
    title: "Codo",
    href: "/otras-zonas/parte-superior",
    desc: "Tendinopatías (tenista/golfista) y dolor crónico. Precisión en rehabilitación.",
  },
  {
    title: "Muñeca",
    href: "/otras-zonas/parte-superior",
    desc: "Túnel carpiano y lesiones por esfuerzo. Recupera sensibilidad y fuerza.",
  },
  {
    title: "Pie y tobillo",
    href: "/otras-zonas/pie-y-tobillo",
    desc: "Esguinces, fascitis plantar y deformidades. Rehabilitación funcional y alineación.",
  },
];

export default function OtherAreasPage() {
  return (
    <div className="bg-gradient-to-b from-[#0b1417] via-[#0b1417] to-white text-foreground">
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,151,162,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(11,42,69,0.5),transparent_45%)]" />
        <Container className="relative z-10 grid gap-10 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                Traumatología integral
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Otras zonas del cuerpo, mismo nivel de cuidado.
              </h1>
              <p className="text-lg leading-7 text-white/80 sm:max-w-2xl">
                Evalúo y trato cadera, columna, hombro, codo, muñeca, pie y
                tobillo. Mi enfoque: diagnóstico claro, planes escalonados y
                tecnología cuando suma precisión.
              </p>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                Evaluación personalizada • Cirugía mínimamente invasiva •
                Rehabilitación dirigida
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <Image
                src="/assets/consultorio.webp"
                alt="Consultorio y evaluación integral"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-14 sm:py-18">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Cómo trabajamos
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                Diagnóstico claro, plan escalonado y seguimiento.
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/75">
                <li>
                  • Examen físico detallado y estudios de imagen cuando aporta.
                </li>
                <li>
                  • Tratamientos conservadores primero; cirugía sólo cuando es
                  la mejor opción.
                </li>
                <li>
                  • Rehabilitación guiada para volver a tus actividades con
                  confianza.
                </li>
              </ul>
              <Link
                href="/contacto"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:opacity-90"
              >
                Agenda tu valoración
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area, index) => (
                <Reveal
                  key={`${area.href}-${area.title}`}
                  animationClassName="motion-safe:animate-[fade-up_0.9s_ease-out_both]"
                >
                  <Link
                    href={area.href}
                    style={{ animationDelay: `${index * 80}ms` }}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-lg shadow-black/[.06] transition hover:-translate-y-1 hover:border-brand hover:shadow-2xl"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                          {area.title}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-brand">
                          {area.title}
                        </h3>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">
                      {area.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Ver más →
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
