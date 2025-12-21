import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rodilla",
};

export default function KneePage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Rodilla</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Tratamientos, diagnósticos y procedimientos especializados para dolor
        de rodilla, artrosis, lesiones de menisco y cirugía de reemplazo.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/rodilla/cirugia-robotica"
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03] hover:bg-black/[.02]"
        >
          <h2 className="text-base font-semibold tracking-tight">
            Cirugía robótica
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Alta precisión, menor dolor y recuperación más rápida.
          </p>
        </Link>
        <Link
          href="/rodilla/protesis-artrosis"
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03] hover:bg-black/[.02]"
        >
          <h2 className="text-base font-semibold tracking-tight">
            Prótesis y artrosis
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Soluciones para desgaste severo y dolor persistente.
          </p>
        </Link>
        <Link
          href="/rodilla/artroscopia-meniscos"
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03] hover:bg-black/[.02]"
        >
          <h2 className="text-base font-semibold tracking-tight">
            Meniscos y artroscopia
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Procedimientos mínimamente invasivos y recuperación ágil.
          </p>
        </Link>
      </div>
    </Container>
  );
}
