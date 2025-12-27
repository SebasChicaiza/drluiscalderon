"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

const LiteMap = dynamic(
  () => import("../ui/LiteMap").then((mod) => mod.LiteMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-56 w-full rounded-2xl bg-white/5 animate-pulse" />
    ),
  }
);

export function SiteFooter() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${site.contact.whatsapp.replace(
    /[^\d]/g,
    ""
  )}`;
  const emailHref = `mailto:${site.contact.email}`;
  const mapHref =
    "https://www.google.com/maps?q=-0.19319111976258832,-78.49135299097524";

  return (
    <footer className="bg-[#0b2a45] text-white">
      <Container className="py-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-32 w-[220px] sm:h-36 sm:w-[260px]">
            <Image
              src="/assets/logodrluis-blanco.webp"
              alt="Logo Dr. Luis Calderón"
              fill
              sizes="260px"
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            {site.profession}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            {site.description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-70 sm:gap-10">
          <Image
            src="/assets/ao-logoblanco.webp"
            alt="AO Foundation"
            width={72}
            height={72}
            className="h-10 w-auto object-contain sm:h-20"
          />
          <Image
            src="/assets/logo-isakosblanco.webp"
            alt="ISAKOS"
            width={140}
            height={72}
            className="h-9 w-auto object-contain sm:h-20"
          />
          <Image
            src="/assets/logousfq-blanco.webp"
            alt="USFQ"
            width={200}
            height={100}
            className="h-12 w-auto object-contain sm:h-25"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Consultorio
            </h3>
            <div
              className="mt-4 space-y-2 text-sm text-white/80"
              itemScope
              itemType="https://schema.org/Physician"
            >
              <h3
                className="text-base font-semibold text-white"
                itemProp="name"
              >
                Dr. Luis Calderón
              </h3>
              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className="space-y-1"
              >
                <p itemProp="streetAddress">
                  Av. Eloy Alfaro N143 y Los Shyris, Edificio Fortune Plaza
                </p>
                <p>
                  <span itemProp="addressLocality">Quito</span>,{" "}
                  <span itemProp="postalCode">170102</span>
                </p>
              </div>
              <p>
                Tel:{" "}
                <a
                  href="tel:+593998041843"
                  itemProp="telephone"
                  className="font-semibold text-white"
                >
                  099 804 1843
                </a>
              </p>
              <p className="text-white/70">
                Horario: {site.consultation.schedule}
              </p>
            </div>
            <div className="mt-4">
              <LiteMap
                title="Mapa del consultorio - Fortune Plaza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8978098653345!2d-78.49249024751127!3d-0.19327694996126887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bff1c4fd471%3A0x314c7a94aa6219e2!2sFortune%20Plaza%20Business%20Center!5e0!3m2!1sen!2sec!4v1766333177124!5m2!1sen!2sec"
                staticImage="/assets/consultorio.webp"
                openLink={mapHref}
              />
            </div>
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-white hover:opacity-90"
            >
              Ver en Google Maps →
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Hospitales donde opero
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li>Hospital Metropolitano</li>
              <li>Hospital de los Valles</li>
              <li>Centros especializados en Quito</li>
            </ul>
            <p className="mt-4 text-sm text-white/70">
              Coordino cirugías según tu diagnóstico.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Contacto directo
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <a href={phoneHref} className="font-semibold text-white">
                {site.contact.phone}
              </a>
              <span className="hover:text-white">
                drluiscalderon [arroba] gmail [punto] com
              </span>
              <a href={whatsappHref} className="hover:text-white">
                WhatsApp directo
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                Redes
              </h4>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-white/80">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white hover:opacity-90"
              >
                Agendar cita
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white/80 hover:border-white hover:text-white"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <Link href="/trayectoria" className="hover:text-white">
                Trayectoria
              </Link>
              <Link href="/privacidad" className="hover:text-white">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
