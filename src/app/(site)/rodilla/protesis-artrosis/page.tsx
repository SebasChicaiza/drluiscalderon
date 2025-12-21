import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Prótesis y artrosis de rodilla",
  description:
    "Tratamiento de artrosis y prótesis de rodilla en Quito. Diagnóstico, opciones de reemplazo total o parcial y acompañamiento integral.",
};

export default function KneeArthrosisPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Prótesis y artrosis de rodilla
        </h1>
        <p className="mt-4 text-sm text-foreground/70 sm:text-base">
          La artrosis es el desgaste progresivo del cartílago que causa dolor,
          rigidez y limitación para caminar. Evalúo tu caso para determinar si
          necesitas tratamiento conservador o cirugía de reemplazo.
        </p>
        <p className="mt-3 text-sm text-foreground/70 sm:text-base">
          Si presentas dolor rodilla adultos mayores o buscas información sobre
          protesis de rodilla costo, agenda una valoración conmigo en Quito.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            Prótesis total vs. prótesis parcial
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/70">
            <li>
              <span className="font-semibold text-foreground">Total:</span>{" "}
              reemplazo de toda la articulación cuando el desgaste es severo.
            </li>
            <li>
              <span className="font-semibold text-foreground">Parcial:</span>{" "}
              reemplazo de una sola zona cuando el daño es localizado.
            </li>
            <li>
              La elección depende de edad, actividad, dolor y estudios de
              imagen.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
          <h2 className="text-base font-semibold tracking-tight">
            Testimonio de paciente
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Aquí compartiré el testimonio de un paciente mayor que volvió a
            caminar sin dolor tras su cirugía de rodilla conmigo.
          </p>
          <div className="mt-4 rounded-xl border border-dashed border-black/20 p-4 text-sm text-foreground/50">
            Testimonio en preparación
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]">
        <h2 className="text-base font-semibold tracking-tight">
          Señales de alerta
        </h2>
        <ul className="mt-4 grid gap-2 text-sm text-foreground/70 sm:grid-cols-2">
          <li>Dolor persistente al caminar o subir escaleras.</li>
          <li>Inflamación frecuente en la rodilla.</li>
          <li>Rigidez matutina o pérdida de movilidad.</li>
          <li>Dolor nocturno que interrumpe el descanso.</li>
        </ul>
      </div>
    </Container>
  );
}
