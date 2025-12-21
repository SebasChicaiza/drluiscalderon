"use client";

import { useMemo, useState } from "react";

type Testimonial = {
  name: string;
  title: string;
  body: string;
};

function chunk<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const pages = useMemo(() => chunk(items, 3), [items]);
  const [index, setIndex] = useState(0);
  const total = pages.length;

  if (total === 0) return null;

  const go = (direction: number) => {
    setIndex((prev) => (prev + direction + total) % total);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full shrink-0"
              aria-hidden={pageIndex !== index}
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.map((item, cardIndex) => (
                  <article
                    key={`${item.name}-${cardIndex}`}
                    style={{ animationDelay: `${cardIndex * 140}ms` }}
                    className="rounded-[28px] bg-white p-6 text-foreground shadow-xl shadow-black/[.2] transition-transform duration-300 motion-safe:animate-[fade-up_0.9s_ease-out_both] hover:-translate-y-1 sm:p-7"
                  >
                    <div className="flex items-center gap-1 text-brand">
                      <span aria-hidden="true">★★★★★</span>
                      <span className="sr-only">5 de 5 estrellas</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">
                      {item.body}
                    </p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {item.name}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Ver testimonios anteriores"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-transform duration-300 hover:-translate-x-1"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Ver más testimonios"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-transform duration-300 hover:translate-x-1"
        >
          →
        </button>
      </div>
    </div>
  );
}

