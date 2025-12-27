import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso de drluiscalderon.com, límites de responsabilidad y pautas para solicitar citas con el Dr. Luis Calderón.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Términos y condiciones
          </h1>
          <p className="max-w-3xl text-foreground/70">
            Reglas de uso del sitio, limitaciones de responsabilidad y pautas
            para solicitar atención médica con el Dr. Luis Calderón.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Última actualización: 25/12/2025
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Objeto del sitio</h2>
          <p className="max-w-4xl text-foreground/70">
            drluiscalderon.com ofrece información general sobre traumatología y
            rodilla, y canales para solicitar citas. No sustituye la valoración
            médica presencial ni constituye diagnóstico o prescripción.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Uso permitido</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>Está dirigido a mayores de 18 años o menores acompañados por su representante.</li>
            <li>No usar el sitio para emergencias. Ante una urgencia acude a un servicio de emergencias.</li>
            <li>No está permitido el uso con fines ilícitos, spam o suplantación de identidad.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Citas y comunicación</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>Las solicitudes de cita se confirman solo cuando el consultorio responde y agenda fecha.</li>
            <li>WhatsApp, teléfono o email se usan para coordinar; guarda los horarios de atención indicados.</li>
            <li>La información que envíes debe ser veraz para poder darte indicaciones correctas.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Contenidos y propiedad intelectual</h2>
          <p className="max-w-4xl text-foreground/70">
            Textos, imágenes y logotipos pertenecen al Dr. Luis Calderón o se
            usan con autorización. No se permite su reproducción sin permiso
            expreso.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Enlaces externos</h2>
          <p className="max-w-4xl text-foreground/70">
            El sitio puede contener enlaces a terceros (p. ej. YouTube, Google
            Maps). No me responsabilizo por sus contenidos o políticas; revísalas
            antes de usarlos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Limitación de responsabilidad</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>La información es orientativa y no sustituye una consulta médica.</li>
            <li>No me responsabilizo por daños derivados de un uso inadecuado del sitio o por interrupciones técnicas.</li>
            <li>Las decisiones clínicas se toman solo tras evaluación profesional.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Cambios en los términos</h2>
          <p className="max-w-3xl text-foreground/70">
            Puedo actualizar estos términos por cambios legales o de servicio.
            La fecha de vigencia se mostrará al inicio del documento.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Contacto</h2>
          <p className="max-w-3xl text-foreground/70">
            Para consultas sobre estos términos: drluiscalderon [arroba] gmail
            [punto] com · Tel/WhatsApp <a href="tel:+593998041843" className="font-semibold text-brand">+593 998 041 843</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Ley aplicable</h2>
          <p className="max-w-3xl text-foreground/70">
            Estos términos se rigen por la legislación ecuatoriana. Cualquier
            disputa se resolverá en los tribunales competentes de Quito, salvo
            norma imperativa distinta.
          </p>
        </section>
      </Container>
    </div>
  );
}
