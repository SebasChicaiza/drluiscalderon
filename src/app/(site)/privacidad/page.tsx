import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo recopilo, uso y protejo tus datos en drluiscalderon.com. Información de contacto, cookies y derechos ARCO.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Política de privacidad
          </h1>
          <p className="max-w-3xl text-foreground/70">
            Aquí encontrarás cómo recolecto, uso, protejo y conservo tus datos
            personales cuando visitas drluiscalderon.com o te comunicas conmigo.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Última actualización: 25/12/2025
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Responsable</h2>
          <p className="max-w-4xl text-foreground/70">
            Dr. Luis Calderón, traumatólogo en Quito. Contacto principal:
            <br />
            Teléfono/WhatsApp: <a href="tel:+593998041843" className="font-semibold text-brand">+593 998 041 843</a>{" "}
            · Correo: drluiscalderon [arroba] gmail [punto] com
            <br />
            Dirección: Edificio Fortune Plaza, Av. Eloy Alfaro N29-235, Quito.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Datos que puedo recopilar</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>Datos de contacto: nombre, teléfono, correo (cuando los envías por formulario o WhatsApp).</li>
            <li>Datos de consulta: motivo de cita o breve descripción de síntomas que compartes voluntariamente.</li>
            <li>Datos técnicos mínimos: dirección IP abreviada y métricas básicas de uso para seguridad y analítica interna.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Para qué uso tus datos</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>Responder solicitudes de cita o información.</li>
            <li>Gestionar recordatorios y seguimiento de atención.</li>
            <li>Mejorar la seguridad y rendimiento del sitio.</li>
            <li>Cumplir obligaciones legales y regulatorias.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Base legal</h2>
          <p className="max-w-3xl text-foreground/70">
            Tu consentimiento al enviarme datos, el interés legítimo en la
            seguridad del sitio y el cumplimiento de obligaciones médicas o
            legales según aplique en Ecuador.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Conservación</h2>
          <p className="max-w-3xl text-foreground/70">
            Conservo los datos solo el tiempo necesario para la finalidad
            indicada o para cumplir requisitos legales. Si una ley exige plazos
            mayores (p. ej. historias clínicas), se aplicarán esos plazos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Con quién comparto datos</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>Proveedores tecnológicos que alojan el sitio o correo.</li>
            <li>Servicios de mensajería (WhatsApp) cuando eliges ese canal.</li>
            <li>No vendo ni cedo datos a terceros con fines comerciales.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cookies y analítica</h2>
          <p className="max-w-3xl text-foreground/70">
            Uso cookies técnicas para que el sitio funcione y métricas básicas
            para mejorar la experiencia. Puedes ajustar cookies desde la
            configuración de tu navegador.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Tus derechos</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/70">
            <li>Acceso, rectificación, actualización o eliminación de tus datos.</li>
            <li>Oposición o limitación de uso cuando proceda.</li>
            <li>Retirar tu consentimiento en cualquier momento.</li>
          </ul>
          <p className="max-w-3xl text-foreground/70">
            Para ejercerlos, escríbeme a drluiscalderon [arroba] gmail [punto] com o al
            WhatsApp indicado. Responderé en el menor tiempo posible.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Actualizaciones</h2>
          <p className="max-w-3xl text-foreground/70">
            Puedo ajustar esta política para reflejar cambios legales o de
            servicios. Publicaré la versión vigente con la fecha de última
            actualización.
          </p>
        </section>
      </Container>
    </div>
  );
}
