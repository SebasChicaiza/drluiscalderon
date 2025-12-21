import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trayectoria",
};

export default function CareerPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Trayectoria</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Placeholder para formación, experiencia y enfoque del doctor. Reemplaza
        este texto con la información real.
      </p>

      <div className="mt-10 rounded-2xl border border-black/10 bg-background p-6">
        <h2 className="text-base font-semibold tracking-tight">Enfoque</h2>
        <p className="mt-2 text-sm leading-6 text-foreground/70">
          {site.description}
        </p>
      </div>
    </Container>
  );
}

