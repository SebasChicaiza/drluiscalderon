import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadera | Dr. Luis Calderón",
  description:
    "Cirugía y tratamiento especializado de cadera en Quito. Artrosis, choque femoroacetabular y fracturas con enfoque conservador o quirúrgico.",
};

export default function HipPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f7fbfc] to-white">
      <Container className="py-16 sm:py-20 space-y-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Articulación de carga
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Cirugía y tratamiento especializado de cadera en Quito
              </h1>
              <p className="text-base leading-7 text-foreground/75">
                La cadera es el eje de tu movimiento. Cuando falla, actividades simples como caminar, atarte los zapatos o dormir de lado se vuelven imposibles. Mi enfoque busca eliminar el dolor preservando la mayor cantidad de tejido posible.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:opacity-90"
                >
                  Agendar una cita
                </Link>
                <Link
                  href="/rodilla/cirugia-robotica"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand hover:bg-brand/10"
                >
                  Ver tecnología
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand p-8 text-white shadow-2xl shadow-black/20">
              <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-brand/30 blur-3xl" />
              <h2 className="text-xl font-semibold">¿Qué condiciones tratamos?</h2>
              <p className="mt-3 text-sm text-white/80">
                Usamos un enfoque escalonado: primero diagnóstico, luego tratamiento.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/90">
                <li>• Artrosis de cadera y choque femoroacetabular.</li>
                <li>• Fracturas de cadera y urgencias en adulto mayor.</li>
                <li>• Plan de preservación articular siempre que sea posible.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/[0.05]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">1. Artrosis de cadera</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Dolor inguinal y rigidez</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Desgaste del cartílago con roce “hueso con hueso”. Dolor en ingle que irradia a muslo o rodilla y rigidez al levantarte.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Solución: manejo con infiltraciones en etapas iniciales y Prótesis Total de Cadera en casos avanzados con implantes de alta durabilidad.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/[0.05]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">2. Choque femoroacetabular</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">El dolor del joven adulto</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Roce anormal entre cabeza del fémur y pelvis. Común en deportistas jóvenes con “pinchazos” en la ingle tras el ejercicio.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Solución: diagnóstico temprano, corrección de la forma ósea (a menudo vía artroscopia) y prevención del desgaste prematuro.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/[0.05]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">3. Fracturas de cadera</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Urgencia en adulto mayor</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Una caída puede derivar en fractura grave. El tiempo es oro para evitar complicaciones por postración.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Solución: estabilización quirúrgica rápida para que el paciente se ponga de pie lo antes posible y reduzca riesgos.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 shadow-inner shadow-black/5">
              <h3 className="text-lg font-semibold text-foreground">Señales de alerta: ¿es cadera o columna?</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Muchas veces el dolor de cadera se confunde con ciática. Realizo un examen físico exhaustivo y estudios de imagen para no tratar la zona equivocada.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                <li>• Dolor en ingle que aumenta al rotar la pierna: probable cadera.</li>
                <li>• Dolor con corrientazo que baja por la pierna: evaluar columna.</li>
                <li>• Rigidez matutina y chasquidos al caminar: posible artrosis.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/[0.07]">
              <h3 className="text-lg font-semibold text-foreground">Tu plan, paso a paso</h3>
              <ol className="mt-3 space-y-3 text-sm leading-6 text-foreground/75">
                <li>1) Diagnóstico preciso con examen clínico e imagen.</li>
                <li>2) Opciones conservadoras: fisioterapia, bloqueos, analgésicos selectivos.</li>
                <li>3) Decisión quirúrgica cuando el dolor limita tu vida diaria.</li>
                <li>4) Rehabilitación guiada para volver a caminar sin dolor.</li>
              </ol>
              <Link
                href="/rodilla"
                className="mt-4 inline-flex text-sm font-semibold text-brand underline underline-offset-4"
              >
                Ver mi especialidad principal en Rodilla →
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[26px] border border-black/10 bg-gradient-to-r from-[#0b2a45] via-[#0b2a45] to-brand p-6 text-white shadow-2xl shadow-black/25">
            <h3 className="text-lg font-semibold">Visión integral</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">
              ¿Sabías que el cuerpo es una cadena conectada? A veces, una mala pisada afecta tu rodilla, o una cadera rígida provoca dolor lumbar. Como Traumatólogo Especialista en Rodilla y Cirugía Robótica, mi visión es integral: no solo trato el síntoma, busco el origen biomecánico del dolor para ofrecerte una solución definitiva.
            </p>
            <Link
              href="/rodilla"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand px-5 shadow-lg shadow-black/10 hover:bg-white/90"
            >
              Ver mi especialidad principal en Rodilla →
            </Link>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
