"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

type Group = {
  key: string;
  title: string;
  portion: string;
  allowed: string[];
  avoid?: string[];
};

type DailyBlock = { title: string; items: string[] };

type Props = {
  heroImageUrl: string;
  appointmentUrl: string;
  pdfUrl: string;
  principles: string[];
  groups: Group[];
  dailyPlan: DailyBlock[];
};

export function DietPageClient({
  heroImageUrl,
  appointmentUrl,
  pdfUrl,
  principles,
  groups,
  dailyPlan,
}: Props) {
  const [activeTab, setActiveTab] = useState(groups[0]?.key ?? "");
  const activeGroup = useMemo(
    () => groups.find((g) => g.key === activeTab) ?? groups[0],
    [activeTab, groups],
  );

  return (
    <div className="bg-[var(--bg,#f7fafb)] text-[var(--text,#0b1f24)]">
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,126,138,0.12),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(0,60,71,0.12),transparent_45%)]" />
        <Container className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              <Link href="/" className="hover:text-brand/70">
                Inicio
              </Link>
              <span className="text-foreground/40">/</span>
              <Link href="/recursos" className="hover:text-brand/70">
                Recursos
              </Link>
              <span className="text-foreground/40">/</span>
              <span className="text-brand">Dieta</span>
            </nav>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Dieta para bajar de peso sin pasar hambre
            </h1>
            <p className="text-lg font-semibold text-brand">
              Comer bien no es comer menos: es comer mejor.
            </p>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Guía estructurada por grupos alimentarios, con porciones claras y
              un plan diario práctico. Guía general. No reemplaza una consulta.
              Ajustar en casos especiales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={appointmentUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Agenda una cita
              </Link>
              {pdfUrl ? (
                <Link
                  href={pdfUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand/5"
                >
                  Descargar PDF
                </Link>
              ) : (
                <Link
                  href="/contacto"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand/5"
                >
                  Solicitar PDF
                </Link>
              )}
            </div>
          </div>
          <div className="grid gap-4 lg:justify-items-end">
            <div className="overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-xl shadow-black/[.12]">
              <Image
                src={heroImageUrl}
                alt="Alimentos saludables"
                width={900}
                height={650}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-[22px] border border-black/10 bg-white p-5 shadow-md shadow-black/[.08]">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                Principios clave
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-foreground/75">
                {principles.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7fafb] py-12">
        <Container className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            ¿Por qué es importante?
          </h2>
          <p className="max-w-4xl text-sm leading-7 text-foreground/70 sm:text-base">
            Sobrepeso u obesidad afectan tu salud física y autoestima. El IMC es
            solo una referencia: si es mayor a 25, conviene mejorar hábitos para
            prevenir enfermedades y vivir mejor.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Plan según grupos alimentarios
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Navega por pestañas para ver porciones, permitidos y alimentos a
              evitar (cuando aplique).
            </p>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-lg shadow-black/[.08]">
            <div className="flex gap-2 overflow-x-auto border-b border-black/10 bg-[#f7fafb] px-3 py-2 text-sm">
              {groups.map((g) => (
                <button
                  key={g.key}
                  onClick={() => setActiveTab(g.key)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 font-semibold transition ${
                    activeTab === g.key
                      ? "bg-brand text-white"
                      : "bg-white text-foreground/80 hover:bg-brand/10"
                  }`}
                  aria-pressed={activeTab === g.key}
                >
                  {g.title}
                </button>
              ))}
            </div>
            <div className="grid gap-4 bg-gradient-to-br from-[#003c47] via-[#0b2a45] to-[#007e8a] p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {activeGroup.title}
                  </p>
                  <h3 className="text-2xl font-semibold">
                    {activeGroup.title}
                  </h3>
                </div>
                <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {activeGroup.portion}
                </span>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm shadow-black/10">
                  <p className="text-sm font-semibold text-white">Permitidos</p>
                  <ul className="mt-3 grid gap-2 text-sm text-white/80">
                    {activeGroup.allowed.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {activeGroup.avoid && activeGroup.avoid.length > 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-black/10">
                    <p className="text-sm font-semibold text-white">Evitar</p>
                    <ul className="mt-3 grid gap-2 text-sm text-white/80">
                      {activeGroup.avoid.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#f6c344]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    Sin alimentos prohibidos en este grupo.
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7fafb] py-12">
        <Container className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Plan de alimentación diaria
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {dailyPlan.map((block, idx) => (
              <div
                key={block.title}
                style={{ animationDelay: `${idx * 80}ms` }}
                className="rounded-[24px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.06] motion-safe:animate-[fade-up_0.9s_ease-out_both]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {block.title}
                </h3>
                <ul className="mt-3 grid gap-2 text-sm text-foreground/70">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="rounded-[28px] border border-brand/20 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-[#007e8a] p-8 text-white shadow-2xl shadow-black/[.25]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                ¿Quieres que adaptemos esta guía a tu caso?
              </p>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Agenda una cita y personalizamos tu dieta.
              </h3>
              <p className="text-sm text-white/80">
                Guía general. No reemplaza una consulta. Ajustar en casos
                especiales.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={appointmentUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-brand transition hover:bg-white/90"
              >
                Agenda una cita
              </Link>
              {pdfUrl ? (
                <Link
                  href={pdfUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Descargar PDF
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0b2a45] py-8 text-white">
        <Container className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">
            Dr. Luis Calderón – Traumatología / Cirugía de Rodilla
          </p>
          <p>Guía general. No reemplaza una consulta. Ajustar en casos especiales.</p>
        </Container>
      </section>
    </div>
  );
}
