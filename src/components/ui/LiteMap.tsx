"use client";

import { useState } from "react";

type LiteMapProps = {
  title: string;
  src: string;
  staticImage?: string;
  openLink?: string;
};

export function LiteMap({
  title,
  src,
  staticImage = "/assets/consultorio.webp",
  openLink,
}: LiteMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30">
      {loaded ? (
        <iframe
          title={title}
          src={src}
          className="h-64 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="relative h-64 w-full">
          <img
            src={staticImage}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow-lg shadow-black/30 transition hover:translate-y-[-1px]"
            >
              Ver mapa
            </button>
          </div>
          {openLink ? (
            <a
              href={openLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 text-xs font-semibold text-white underline"
            >
              Abrir en Google Maps
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}
