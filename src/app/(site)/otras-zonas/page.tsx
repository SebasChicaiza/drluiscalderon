import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Otras zonas",
};

const areas = [
  { title: "Cadera", href: "/otras-zonas/cadera", desc: "Prótesis y choque femoroacetabular." },
  { title: "Columna", href: "/otras-zonas/columna", desc: "Hernias, dolor lumbar y evaluación integral." },
  { title: "Hombro", href: "/otras-zonas/hombro", desc: "Manguito rotador y lesiones deportivas." },
  { title: "Codo", href: "/otras-zonas/codo", desc: "Tendinopatías y dolor crónico." },
  { title: "Muñeca", href: "/otras-zonas/muneca", desc: "Túnel carpiano y lesiones por esfuerzo." },
  { title: "Pie y tobillo", href: "/otras-zonas/pie-y-tobillo", desc: "Esguinces, deformidades y dolor persistente." },
];

export default function OtherAreasPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Otras zonas</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Traumatología integral para diferentes articulaciones y lesiones del
        aparato locomotor.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03] hover:bg-black/[.02]"
          >
            <h2 className="text-base font-semibold tracking-tight">
              {area.title}
            </h2>
            <p className="mt-2 text-sm text-foreground/70">{area.desc}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}

