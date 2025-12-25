"use client";

import { useState } from "react";

type LiteVideoProps = {
  videoId: string;
  title: string;
  aspect?: "16/9" | "4/3";
};

export function LiteVideo({ videoId, title, aspect = "16/9" }: LiteVideoProps) {
  const [loaded, setLoaded] = useState(false);
  const paddingClass = aspect === "4/3" ? "pt-[75%]" : "pt-[56.25%]";
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-black ${paddingClass}`}>
      {loaded ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 h-full w-full overflow-hidden text-left"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand shadow-xl shadow-black/30 transition group-hover:scale-110">
              ►
            </span>
          </div>
          <span className="sr-only">Reproducir {title}</span>
        </button>
      )}
    </div>
  );
}
