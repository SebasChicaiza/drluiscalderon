import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { specialties } from "@/content/especialidades";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const specialty = specialties.find((item) => item.slug === params.slug);
  if (!specialty) return { title: "Especialidad" };
  return { title: specialty.title };
}

export default function SpecialtyDetailPage({ params }: Props) {
  const specialty = specialties.find((item) => item.slug === params.slug);
  if (!specialty) notFound();

  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-col gap-3">
        <Link
          href="/especialidades"
          className="text-sm font-medium text-foreground/70 hover:text-foreground"
        >
          ← Volver a especialidades
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">
          {specialty.title}
        </h1>
      </div>

      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
        <p className="text-sm leading-6 text-foreground/70">{specialty.detail}</p>
      </div>
    </Container>
  );
}

