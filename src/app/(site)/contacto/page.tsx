import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  const phoneHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${site.contact.whatsapp.replace(/[^\d]/g, "")}`;
  const emailHref = `mailto:${site.contact.email}`;

  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Escríbenos para agendar una cita o resolver tus dudas.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="grid gap-6">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
            <h2 className="text-base font-semibold tracking-tight">
              Datos de contacto
            </h2>
            <dl className="mt-4 grid gap-3 text-sm text-foreground/70">
              <div className="flex flex-col gap-1">
                <dt className="font-medium text-foreground">Teléfono</dt>
                <dd>
                  <Link href={phoneHref} className="hover:text-foreground">
                    {site.contact.phone}
                  </Link>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-medium text-foreground">WhatsApp</dt>
                <dd>
                  <Link
                    href={whatsappHref}
                    className="hover:text-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.contact.whatsapp}
                  </Link>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-medium text-foreground">Email</dt>
                <dd>
                  <Link href={emailHref} className="hover:text-foreground">
                    {site.contact.email}
                  </Link>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-medium text-foreground">Dirección</dt>
                <dd className="whitespace-pre-line">{site.contact.address}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-medium text-foreground">Horarios</dt>
                <dd>Lunes a viernes, 09:00 - 18:00</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
            <h2 className="text-base font-semibold tracking-tight">Ubicación</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Consultorio en Fortune Plaza, Av. Eloy Alfaro N29-235 (Quito).
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
              <iframe
                title="Mapa del consultorio"
                src="https://www.google.com/maps?q=-0.19319111976258832,-78.49135299097524&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
            <h2 className="text-base font-semibold tracking-tight">
              Hospitales donde opera
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Cirugías en hospitales de referencia en Quito, según tu caso y
              disponibilidad.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/70">
              <li>Hospital Metropolitano</li>
              <li>Hospital de los Valles</li>
              <li>Otros centros especializados en Quito</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none">
          <h2 className="text-base font-semibold tracking-tight">
            Enviar un mensaje
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Completa el formulario y te responderemos lo antes posible.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
