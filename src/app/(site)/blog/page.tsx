import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre traumatología, rodilla, recuperación y bienestar articular.",
};

export default function BlogPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Información médica confiable para cuidar tus articulaciones y prevenir
        lesiones.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03] hover:bg-black/[.02]"
          >
            <h2 className="text-base font-semibold tracking-tight">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}

