"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryCarouselProps = {
  items: GalleryItem[];
  intervalMs?: number;
};

export function GalleryCarousel({
  items,
  intervalMs = 3800,
}: GalleryCarouselProps) {
  const total = items.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % total),
      intervalMs
    );
    return () => clearInterval(id);
  }, [total, intervalMs]);

  const slides = useMemo(() => {
    return items.map((item, i) => {
      const offset = (i - index + total) % total;
      const isCenter = offset === 0;
      const isRight = offset === 1;
      const isLeft = offset === total - 1;

      const translate = isCenter ? 0 : isRight ? 220 : isLeft ? -220 : 0;
      const scale = isCenter ? 1 : 0.92;
      const opacity = isCenter ? 1 : isRight || isLeft ? 0.6 : 0;
      const blur = isCenter ? "blur(0px)" : "blur(8px)";
      const zIndex = isCenter ? 30 : isRight || isLeft ? 20 : 10;

      return (
        <div
          key={item.src}
          className="absolute inset-x-4 inset-y-3 mx-auto flex items-center justify-center transition duration-700 ease-out sm:inset-x-6 sm:inset-y-4"
          style={{
            transform: `translateX(${translate}px) scale(${scale})`,
            opacity,
            filter: blur,
            zIndex,
          }}
        >
          <div className="relative h-[60vh] w-full max-w-[620px] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl shadow-black/40 lg:h-[55vh]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 620px, 90vw"
              className="object-cover"
              priority={isCenter}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-sm font-semibold text-white drop-shadow-md">
                {item.caption}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }, [items, index, total]);

  return (
    <div className="relative mx-auto flex h-[60vh] max-h-[560px] min-h-[360px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-black via-[#0b1417] to-black px-6 py-8 shadow-2xl shadow-black/40 lg:h-[55vh]">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      {slides}
    </div>
  );
}
