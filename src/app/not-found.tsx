import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFoundPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        La página que buscas no existe o fue movida.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </Container>
  );
}

