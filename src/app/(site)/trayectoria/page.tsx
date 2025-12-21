import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trayectoria",
};

export default function CareerPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid gap-12">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Sobre el Dr. Luis Calderón
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trayectoria y enfoque médico
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-foreground/70 sm:text-base">
            Traumatólogo con más de 15 años de experiencia, profesor de la USFQ
            y miembro de AO Foundation e ISAKOS. Especialista en cirugía de
            rodilla, cadera, hombro y tobillo, con enfoque en artroscopia,
            preservación articular y cirugía robótica.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-foreground/70 sm:text-base">
            No me conformo con operar. Me comprometo a que vuelvas a vivir sin
            dolor con precisión científica, tecnología avanzada y un plan
            personalizado para tu recuperación.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-foreground/70 sm:text-base">
            {site.description}
          </p>
        </section>

        <section
          id="turismo-medico"
          className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-8 shadow-sm shadow-black/[.04] sm:p-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Atención de Clase Mundial en Quito
          </h2>
          <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
            Quito ofrece tecnología médica avanzada y costos más accesibles para
            pacientes internacionales. Aquí recibes atención especializada con
            estándares comparables a clínicas de Estados Unidos, con un ahorro
            aproximado del 60% al 70%.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-black/[.03] text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Servicio</th>
                  <th className="px-4 py-3 font-semibold">Estados Unidos</th>
                  <th className="px-4 py-3 font-semibold">Quito</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                <tr className="border-t border-black/10">
                  <td className="px-4 py-3">Cirugía de rodilla</td>
                  <td className="px-4 py-3">USD 30k - 60k</td>
                  <td className="px-4 py-3">USD 10k - 20k</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-4 py-3">Artroscopia / meniscos</td>
                  <td className="px-4 py-3">USD 12k - 25k</td>
                  <td className="px-4 py-3">USD 4k - 9k</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-4 py-3">Prótesis total</td>
                  <td className="px-4 py-3">USD 40k - 80k</td>
                  <td className="px-4 py-3">USD 12k - 25k</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-background p-6">
              <h3 className="text-base font-semibold tracking-tight">
                Logística para pacientes internacionales
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-foreground/70">
                <li>Hoteles cercanos: Swissotel, Dann Carlton, Go Quito.</li>
                <li>Zona segura y de fácil acceso desde el aeropuerto.</li>
                <li>Acompañamiento en tu proceso pre y post operatorio.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-background p-6">
              <h3 className="text-base font-semibold tracking-tight">Idiomas</h3>
              <p className="mt-3 text-sm text-foreground/70">
                Atención en español. Coordinamos asistencia en inglés si lo
                necesitas.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 bg-background p-6">
          <h2 className="text-base font-semibold tracking-tight">
            Agenda tu valoración
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Si buscas una evaluación especializada o planeas tu cirugía en
            Quito, agenda una cita y recibe una propuesta personalizada.
          </p>
        </section>
      </div>
    </Container>
  );
}
