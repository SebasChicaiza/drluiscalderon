import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { blogPosts } from "@/content/blog";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos que escribo sobre traumatología, rodilla, recuperación y bienestar articular.",
};

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-[#0b1417] via-[#0b1417] to-white text-foreground">
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(43,151,162,0.45),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(11,42,69,0.45),transparent_40%)]" />
        <Container className="relative z-10 py-14 sm:py-18">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                  Blog médico
                </p>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  Aprende a cuidar tus articulaciones con guía médica confiable.
                </h1>
                <p className="text-lg leading-7 text-white/80 sm:max-w-2xl">
                  Comparto recomendaciones prácticas sobre rodilla, columna y
                  hábitos de bienestar. Útiles para aclarar dudas y ayudarte a
                  decidir con información clara.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  Creado por Dr. Luis Calderón
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-black/30">
                <Image
                  src="/assets/consultorio.webp"
                  alt="Consultorio del Dr. Luis Calderón"
                  width={1200}
                  height={800}
                  className="h-full w-full rounded-[26px] object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-[26px] bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-14 sm:py-18">
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => {
              const hero = post.heroImage || "/assets/consultorio.webp";
              const dateLabel = post.date
                ? new Intl.DateTimeFormat("es-EC", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(post.date))
                : "Actualizado";
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-lg shadow-black/[.08] transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={hero}
                      alt={post.heroAlt || post.title}
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover transition duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-brand shadow-md shadow-black/15">
                      {post.category || "Traumatología"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="text-xs font-medium text-foreground/60">
                      {dateLabel}
                    </div>
                    <h2 className="text-lg font-semibold leading-tight text-foreground group-hover:text-brand">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-6 text-foreground/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Leer artículo →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
