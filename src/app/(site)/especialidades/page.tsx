import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { specialties } from "@/content/especialidades";

export const metadata: Metadata = {
  title: "Especialidades",
};

export default function SpecialtiesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Especialidades</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Selecciona un área para ver más detalles.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((specialty) => (
          <Link
            key={specialty.slug}
            href={`/especialidades/${specialty.slug}`}
            className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] transition-colors hover:bg-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none dark:hover:bg-white/[.06]"
          >
            <h2 className="text-base font-semibold tracking-tight group-hover:underline">
              {specialty.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              {specialty.summary}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}

