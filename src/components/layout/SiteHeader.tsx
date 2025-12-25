"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/site";
import { Container } from "./Container";

function isActivePath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8.8 3.5c.5-.4 1.2-.4 1.7.1l1.9 1.9c.5.5.5 1.3.1 1.8l-1.4 1.7c-.3.3-.3.8-.1 1.1c1 1.6 2.4 3 4 4c.3.2.8.2 1.1-.1l1.7-1.4c.6-.4 1.3-.3 1.8.1l1.9 1.9c.5.5.5 1.2.1 1.7l-1.2 1.2c-.8.8-1.9 1.1-3 .9c-8.2-1.3-14.6-7.7-15.9-15.9c-.2-1.1.2-2.2.9-3l1.2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [isSpanish, setIsSpanish] = useState(true);

  const phoneHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const lang = navigator.language?.toLowerCase() || "";
    setIsSpanish(lang.startsWith("es"));
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-brand text-white">
        <Container className="flex items-center justify-center py-2 text-center text-xs font-semibold sm:text-sm">
          <Link
            href={{
              pathname: "/trayectoria",
              query: isSpanish ? undefined : { intl: "1" },
              hash: "turismo-medico",
            }}
            className="hover:opacity-90"
            prefetch
          >
            {isSpanish
              ? "¿Paciente Internacional? Te explico por qué operarte en Quito (Ahorro + Tecnología Robótica) 🇺🇸 🇪🇨"
              : "International patient? I explain why to have surgery in Quito (Savings + Robotic Tech) 🇺🇸 🇪🇨"}
          </Link>
        </Container>
      </div>
      <header className="border-b border-black/10 bg-background/90 backdrop-blur">
        <Container className="flex h-30 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-[220px]">
              <Image
                src={site.logo.src}
                alt={site.logo.alt}
                fill
                priority
                sizes="220px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              const linkClass = `relative inline-flex items-center gap-1 text-[15px] font-semibold tracking-tight transition-colors text-foreground hover:text-brand
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-full after:rounded-full after:bg-brand after:origin-left after:transition-transform ${
                active
                  ? "text-brand after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }`;

              if (item.children?.length) {
                return (
                  <div key={item.href} className="relative group">
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                      <ChevronDownIcon className="h-4 w-4 text-foreground/70 group-hover:text-brand" />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 mt-4 w-[260px] translate-y-1 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="rounded-2xl border border-black/10 bg-background p-2 shadow-xl shadow-black/[.08]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-brand/10 hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-end gap-2 md:flex">
            <div className="flex flex-col items-end gap-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-sm font-semibold leading-tight text-white shadow-sm shadow-black/[.08] hover:opacity-90"
              >
                Agendar cita
              </Link>
              <Link
                href={phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand"
              >
                <PhoneIcon className="h-4 w-4 text-brand" />
                {site.contact.phone}
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-foreground hover:bg-black/[.03]"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d={
                  mobileOpen
                    ? "M6 6L18 18M18 6L6 18"
                    : "M4 7H20M4 12H20M4 17H20"
                }
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Container>

        {mobileOpen ? (
          <div className="md:hidden">
            <div
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-x-0 top-[112px] z-50 px-4 sm:px-6">
              <div className="mx-auto max-w-6xl rounded-2xl border border-black/10 bg-background p-4 shadow-xl shadow-black/[.12]">
                <nav className="grid gap-2">
                  {navigation.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    if (item.children?.length) {
                      const isExpanded = Boolean(expanded[item.href]);
                      return (
                        <div
                          key={item.href}
                          className="rounded-xl border border-black/10"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded((prev) => ({
                                ...prev,
                                [item.href]: !prev[item.href],
                              }))
                            }
                            className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-foreground"
                          >
                            <span className={active ? "text-brand" : undefined}>
                              {item.label}
                            </span>
                            <ChevronDownIcon
                              className={`h-5 w-5 text-foreground/70 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isExpanded ? (
                            <div className="grid gap-1 px-2 pb-2">
                              <Link
                                href={item.href}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-brand/10 hover:text-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                Ver {item.label.toLowerCase()}
                              </Link>
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-brand/10 hover:text-foreground"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold transition-colors ${
                          active
                            ? "border-brand bg-brand/10 text-brand"
                            : "text-foreground hover:bg-black/[.03]"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-4 grid gap-3 border-t border-black/10 pt-4">
                  <Link
                    href="/contacto"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:opacity-90"
                    onClick={() => setMobileOpen(false)}
                  >
                    Agendar cita
                  </Link>
                  <Link
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold text-foreground hover:bg-black/[.03]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <PhoneIcon className="h-4 w-4 text-brand" />
                    {site.contact.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
}
