import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Artroscopia de rodilla | Dr. Luis Calderón",
  description:
    "Artroscopia de rodilla mínimamente invasiva para meniscos, cartílago y pinzamientos. Recuperación guiada y precisión con navegación cuando aplica.",
};

export default function KneeArthroscopyPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden bg-white py-14 mb-20 rounded-[36px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(43,151,162,0.18),transparent_45%),radial-gradient(circle_at_85%_12%,rgba(11,42,69,0.12),transparent_40%)]" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Artroscopia
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Cirugía mínimamente invasiva para preservar tu rodilla.
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
              Dos pequeñas incisiones, cámara HD y microinstrumentos para
              reparar meniscos, cartílago o retirar cuerpos libres. Busco
              preservar tejido y acelerar tu recuperación.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 transition hover:opacity-90"
              >
                Agendar valoración
              </Link>
              <a
                href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Descargar guía
              </a>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Trabajo con todos los seguros mediante reembolso.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative rounded-[26px] border border-black/10 bg-white/60 shadow-lg shadow-black/[.08] backdrop-blur motion-safe:animate-[fade-up_1s_ease-out_both]">
              <div className="relative h-110 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60 transition-transform duration-700 ease-out hover:-translate-y-1">
                <Image
                  src="/drluis/drluis-con-herramientasquirofano.webp"
                  alt="Placeholder trauma de rodilla"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0b2a45] py-12">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/30 text-white">
              Indicaciones frecuentes
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Qué trato con artroscopia
            </h2>
            <div className="grid gap-10 text-md text-white/85 sm:grid-cols-1 mt-10 m-5">
              {[
                [
                  "Lesiones meniscales",
                  "Sutura o menisectomía parcial según la zona vascular y tu actividad.",
                ],
                [
                  "Lesiones de cartílago",
                  "Microfracturas, condroplastia o trasplante de cartílago cuando aplica.",
                ],
                [
                  "Pinzamientos y cuerpos libres",
                  "Retiro de fragmentos que bloquean la articulación y generan dolor.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-sm shadow-black/20 transition duration-500 ease-out hover:-translate-y-1 hover:bg-white/15"
                >
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 leading-6 text-white/80">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[26px] border border-white/25 bg-white/10 p-4 shadow-inner shadow-black/25 hidden sm:block motion-safe:animate-[fade-up_1s_ease-out_both]">
            <div className="relative h-200 w-full overflow-hidden rounded-[18px] bg-white/20 transition-transform duration-700 ease-out hover:-translate-y-1">
              <video
                src="/drluis/dr-rehabilitacion-rodilla.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full rounded-lg"
                preload="metadata"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Cómo la realizo
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Precisión, preservación y rehabilitación guiada
            </h2>
            <div className="grid gap-3 text-md text-foreground/75 sm:grid-cols-2 mt-25">
              {[
                [
                  "Planeación",
                  "Resonancia y examen físico para definir si suturamos o limpiamos.",
                ],
                [
                  "Navegación cuando aplica",
                  "Guío mis cortes y orientación para proteger el cartílago sano.",
                ],
                [
                  "Incisiones mínimas",
                  "Dos puertos de 5-7 mm con cámara HD para ver todo dentro de la rodilla.",
                ],
                [
                  "Rehabilitación",
                  "Carga progresiva, control de inflamación y propiocepción para volver con confianza.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm shadow-black/[.04] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.08]"
                >
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#f8fbfc] p-7 shadow-lg shadow-black/[.08] transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-black/[.12] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Beneficios para ti
            </h3>
            <ul className="mt-3 grid gap-3 text-sm text-foreground/70">
              <li>• Menos dolor postoperatorio y estancias cortas.</li>
              <li>• Preservación de tejido sano para retrasar la artrosis.</li>
              <li>
                • Retorno más rápido a deporte o trabajo con protocolos claros.
              </li>
            </ul>
            <Link
              href="/rodilla/ligamento-cruzado-lca"
              className="mt-4 inline-flex text-sm font-semibold text-brand underline underline-offset-4"
            >
              Ver ruta de medicina deportiva →
            </Link>
            <div className="relative h-90 mt-4 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60 transition-transform duration-700 ease-out hover:-translate-y-1">
              <Image
                src="/drluis/drluis-en-quirofano.webp"
                alt="Placeholder trauma de rodilla"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand py-12 text-white">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Seguimiento
            </p>
            <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Controles programados y comunicación directa
            </h3>
            <p className="text-sm text-white/80">
              Ajusto tu rehabilitación según evolución y exámenes. Atiendo con
              reembolso de todos los seguros y doy soporte en los trámites.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/15 bg-white/10 px-4 py-5 text-sm text-white/85 shadow-lg shadow-black/[.2] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.28]">
            <p className="font-semibold">Hitos de recuperación</p>
            <ul className="mt-2 grid gap-2">
              <li>• 0-2 semanas: control de dolor e inflamación.</li>
              <li>• 3-6 semanas: fuerza y rango de movimiento.</li>
              <li>• 6+ semanas: retorno progresivo a deporte o trabajo.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center motion-safe:animate-[fade-up_0.9s_ease-out_both]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Preparación y cuidados
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Antes, durante y después de la artroscopia
            </h2>
            <div className="grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
              {[
                [
                  "Previo a la cirugía",
                  "Ayuno, suspensión segura de anticoagulantes y checklist de exámenes.",
                ],
                [
                  "El día de la artroscopia",
                  "Procedimiento ambulatorio, anestesia regional y alta temprana.",
                ],
                [
                  "Ejercicios iniciales",
                  "Movilización pasiva, activación de cuádriceps y apoyo progresivo.",
                ],
                [
                  "Control del dolor",
                  "Protocolo multimodal para reducir opioides y acelerar la marcha.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm shadow-black/[.04] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-black/[.08]"
                >
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-[#f8fbfc] p-7 shadow-lg shadow-black/[.08] transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-black/[.12] motion-safe:animate-[fade-up_1s_ease-out_both]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              FAQ rápida
            </h3>
            <ul className="mt-3 grid gap-3 text-sm text-foreground/70">
              <li>
                <span className="font-semibold text-foreground">
                  ¿Cuándo vuelvo a trabajar?
                </span>{" "}
                Oficio de escritorio: 3-7 días; trabajo físico: según evolución
                y rol, usualmente 3-6 semanas.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  ¿Quedan cicatrices?
                </span>{" "}
                Dos incisiones de 5-7 mm, cierro con puntos reabsorbibles o
                grapas según el caso.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  ¿Puedo nadar?
                </span>{" "}
                Tras retirar puntos y con herida cerrada (aprox. 2-3 semanas).
              </li>
            </ul>
            <div className="relative h-90 mt-4 w-full overflow-hidden rounded-[18px] border border-black/15 bg-white/60 transition-transform duration-700 ease-out hover:-translate-y-1">
              <Image
                src="/drluis/dr-con-radiografias.webp"
                alt="Placeholder trauma de rodilla"
                fill
                className="object-cover opacity-90 object-[50%_85%]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white hidden">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-lg shadow-black/[.08]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Historias de recuperación
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Reemplaza este bloque con testimonios y fotos de pacientes de
              artroscopia (antes/después o en rehabilitación).
            </p>
          </div>
          <div className="relative rounded-[26px] border border-dashed border-black/15 bg-white/60 p-4 shadow-inner shadow-black/5">
            <div className="relative h-64 w-full overflow-hidden rounded-[18px] bg-white/70">
              <Image
                src="/assets/placeholder-artroscopia-gallery.webp"
                alt="Placeholder galería artroscopia"
                fill
                className="object-cover opacity-40"
              />
            </div>
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Coloca aquí tu imagen de caso real
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
