import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Cirugía robótica de rodilla",
  description:
    "Cirugía robótica de rodilla en Quito: precisión, menos dolor y recuperación acelerada. Conoce beneficios, comparativa y rangos de inversión.",
};

const procedureJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Cirugía Robótica de Rodilla",
  bodyLocation: "Knee",
  procedureType: "SurgicalProcedure",
  howPerformed:
    "Mínimamente invasivo asistido por brazo robótico para mayor precisión en la colocación de prótesis.",
  status: "Active",
  performer: {
    "@type": "Physician",
    name: "Dr. Luis Calderón",
    medicalSpecialty: "Orthopedic",
  },
};

export default function RoboticSurgeryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }}
      />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            Cirugía robótica de rodilla
          </h1>
        <p className="mt-4 text-sm text-foreground/70 sm:text-base">
          Utilizo cirugía robótica para lograr una alineación milimétrica y un
          abordaje más preciso, lo que se traduce en menos dolor y una
          recuperación más rápida. Es ideal para casos de artrosis o desgaste
          avanzado.
        </p>
        <p className="mt-3 text-sm text-foreground/70 sm:text-base">
          Si buscas información sobre cirugia robotica rodilla precio o
          beneficios robotica ecuador, puedo orientarte con una guía clara y
          personalizada según tu caso.
        </p>
        </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            Video explicativo
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Inserta aquí mi video explicando el uso del robot y el proceso
            quirúrgico.
          </p>
          <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-dashed border-black/20 text-sm text-foreground/50">
            Video en preparación
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">Beneficios</h2>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/70">
            <li>Menor dolor postoperatorio.</li>
            <li>Alta precisión en alineación y balance articular.</li>
            <li>Recuperación acelerada y mejor movilidad.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            Cirugía tradicional vs. robótica
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-black/[.03]">
                <tr>
                  <th className="px-4 py-2 font-semibold">Aspecto</th>
                  <th className="px-4 py-2 font-semibold">Tradicional</th>
                  <th className="px-4 py-2 font-semibold">Robótica</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                <tr className="border-t border-black/10">
                  <td className="px-4 py-2">Precisión</td>
                  <td className="px-4 py-2">Estándar</td>
                  <td className="px-4 py-2">Milimétrica</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-4 py-2">Dolor</td>
                  <td className="px-4 py-2">Moderado</td>
                  <td className="px-4 py-2">Menor</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-4 py-2">Recuperación</td>
                  <td className="px-4 py-2">Más lenta</td>
                  <td className="px-4 py-2">Más rápida</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            Rangos de inversión
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            El valor depende del grado de desgaste, tipo de implante y plan
            quirúrgico. Incluye mis honorarios, hospitalización y controles.
          </p>
          <div className="mt-4 rounded-xl border border-black/10 bg-black/[.02] p-4 text-sm text-foreground/70">
            Agenda una valoración para recibir un rango personalizado.
          </div>
          <Link
            href="/contacto"
            className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white hover:opacity-90"
          >
            Agendar cita
          </Link>
        </div>
      </div>
      </Container>
    </>
  );
}
