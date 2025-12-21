import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre mí",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Sobre mí</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Aquí puedes contar tu trayectoria, enfoque de atención, formación y
        experiencia. Este texto es un placeholder para que lo reemplaces con la
        información real del doctor.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
          <h2 className="text-base font-semibold tracking-tight">Enfoque</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/70">
            {site.description}
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
          <h2 className="text-base font-semibold tracking-tight">Consulta</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/70">
            Modalidad: {site.consultation.modality}. Horarios:{" "}
            {site.consultation.schedule}.
          </p>
        </div>
      </div>
    </Container>
  );
}

