import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <Container className="py-16 sm:py-20">
      <Link
        href="/blog"
        className="text-sm font-medium text-foreground/70 hover:text-foreground"
      >
        ← Volver al blog
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-foreground/70 sm:text-base">
        {post.excerpt}
      </p>

      <div className="mt-8 grid gap-4 text-sm leading-6 text-foreground/70 sm:text-base">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}

