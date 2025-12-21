import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <Container className="flex flex-col gap-4 py-10 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/privacidad" className="hover:text-foreground">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-foreground">
            Términos
          </Link>
        </div>
      </Container>
    </footer>
  );
}

