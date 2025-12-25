import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  const phoneHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${site.contact.whatsapp.replace(
    /[^\d]/g,
    ""
  )}`;
  const emailHref = `mailto:${site.contact.email}`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0b2a45] via-[#0f3b63] to-[#0b2a45]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div className="max-w-3xl space-y-3 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Contacto
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Agenda tu cita o resuelve tus dudas con el equipo.
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-white/75">
            Respondo de forma personalizada. Escríbeme por el medio que
            prefieras o deja tus datos y te contactaré pronto.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-black/30 backdrop-blur">
              <h2 className="text-base font-semibold tracking-tight">
                Datos de contacto
              </h2>
              <dl className="mt-4 grid gap-3 text-sm text-white/80">
                <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <div>
                    <dt className="font-semibold text-white">Teléfono</dt>
                    <dd>{site.contact.phone}</dd>
                  </div>
                  <Link
                    href={phoneHref}
                    className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/25"
                  >
                    Llamar
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <div>
                    <dt className="font-semibold text-white">WhatsApp</dt>
                    <dd>{site.contact.whatsapp}</dd>
                  </div>
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-black/20 transition hover:opacity-90"
                  >
                    Abrir chat
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <div>
                    <dt className="font-semibold text-white">Email</dt>
                    <dd>{site.contact.email}</dd>
                  </div>
                  <Link
                    href={emailHref}
                    className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/25"
                  >
                    Escribir
                  </Link>
                </div>
                <div className="rounded-xl bg-white/5 px-4 py-3">
                  <dt className="font-semibold text-white">Dirección</dt>
                  <dd className="whitespace-pre-line text-white/80">
                    {site.contact.address}
                  </dd>
                </div>
                <div className="rounded-xl bg-white/5 px-4 py-3">
                  <dt className="font-semibold text-white">Horarios</dt>
                  <dd className="text-white/80">
                    Lunes a viernes, 09:00 - 18:00
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-black/30 backdrop-blur">
              <h2 className="text-base font-semibold tracking-tight">
                Ubicación
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Consultorio en Fortune Plaza, Av. Eloy Alfaro N29-235 (Quito).
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30">
                <iframe
                  title="Mapa del consultorio"
                  src="https://www.google.com/maps?q=-0.19319111976258832,-78.49135299097524&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-black/30 backdrop-blur">
              <h2 className="text-base font-semibold tracking-tight">
                Hospitales donde opero
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Realizo cirugías en hospitales de referencia en Quito, según tu
                caso y disponibilidad.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/80">
                <li>Hospital Metropolitano</li>
                <li>Hospital de los Valles</li>
                <li>Otros centros especializados en Quito</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/20 bg-white/10 text-white shadow-2xl shadow-black/30 backdrop-blur transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.35]">
            <div className="border-b border-white/15 px-6 py-4">
              <h2 className="text-base font-semibold tracking-tight">
                Enviarme un mensaje
              </h2>
              <p className="mt-1 text-sm text-white/80">
                El formulario estará disponible pronto. Mientras tanto,
                contáctame por WhatsApp, llamada o email.
              </p>
            </div>
            <div className="p-6">
              <div className="grid gap-3">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:opacity-90"
                >
                  Abrir WhatsApp
                </Link>
                <Link
                  href={phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Llamar ahora
                </Link>
                <Link
                  href={emailHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Escribir email
                </Link>
              </div>
              <Reveal>
                <div className="relative">
                  <div className="relative mx-auto mt-12 h-200 max-w-[520px] overflow-hidden rounded-[32px] border border-white/15 bg-white/10 shadow-xl shadow-black/[.2]">
                    <Image
                      src="/drluis/rodilla-cotopaxi.webp"
                      alt="Dr. Luis Calderón"
                      fill
                      sizes="520px"
                      className="object-cover object-left h-full"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
