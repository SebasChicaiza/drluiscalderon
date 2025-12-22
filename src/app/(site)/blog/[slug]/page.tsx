import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { blogPosts } from "@/content/blog";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.heroImage ? [{ url: post.heroImage, alt: post.heroAlt }] : [],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const heroImg = post.heroImage || "/assets/consultorio.webp";
  const heroAlt = post.heroAlt || post.title;
  const category = post.category || "Traumatología";
  const formattedDate = post.date
    ? new Intl.DateTimeFormat("es-EC", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(post.date))
    : null;

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-[#0b1417] text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(43,151,162,0.4),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(11,42,69,0.45),transparent_40%)]" />
        <Container className="relative z-10 grid gap-10 py-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-18">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              {category}
              <span className="text-white/70">• Blog</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="text-lg leading-7 text-white/80 sm:max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="font-semibold text-white">Dr. Luis Calderón</span>
              <span className="text-white/50">|</span>
              <span>{formattedDate || "Actualizado recientemente"}</span>
            </div>
            <Link
              href="/blog"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              ← Volver al blog
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-white/5 shadow-2xl shadow-black/40">
            <Image
              src={heroImg}
              alt={heroAlt}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </Container>
      </section>

      <Container className="prose prose-lg prose-neutral mx-auto max-w-5xl py-14 sm:py-18">
        <div className="relative mb-6 flex items-center gap-3 text-sm text-foreground/60">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span>{category}</span>
          {formattedDate ? (
            <>
              <span>•</span>
              <span>{formattedDate}</span>
            </>
          ) : null}
        </div>
        <article className="grid gap-6 text-lg leading-8 text-foreground/80">
          {post.content.map((paragraph, idx) => (
            <p
              key={paragraph}
              className={`${
                idx === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-semibold first-letter:text-brand"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </article>
        <div className="mt-10 rounded-2xl border border-black/10 bg-brand/5 p-5 text-sm text-foreground/70">
          <p className="font-semibold text-brand">Recuerda:</p>
          <p className="mt-1">
            Esta información es educativa y no reemplaza una consulta. Si tienes dolor o dudas, agenda una evaluación personalizada.
          </p>
        </div>
      </Container>
    </div>
  );
}
