import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { site } from "@/lib/site";

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Luis Calderón",
  image: new URL(site.image, site.url).toString(),
  description:
    "Traumatólogo y ortopedista, experto en cirugía de rodilla, artroscopia y cirugía robótica en Quito. Profesor de la USFQ con más de 15 años de experiencia.",
  medicalSpecialty: ["Orthopedic", "Toxicologic"],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Cirugía Robótica de Rodilla",
    },
    {
      "@type": "MedicalProcedure",
      name: "Artroscopia de Rodilla",
    },
    {
      "@type": "MedicalProcedure",
      name: "Prótesis de Rodilla",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Av. Eloy Alfaro N29-235, Edificio Fortune Plaza, Piso 11, Oficina 1103",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    postalCode: "170102",
    addressCountry: "EC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.19319111976258832,
    longitude: -78.49135299097524,
  },
  telephone: site.contact.phone.replace(/\s+/g, ""),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  memberOf: [
    { "@type": "Organization", name: "USFQ" },
    { "@type": "Organization", name: "AO Foundation" },
    { "@type": "Organization", name: "ISAKOS" },
  ],
  url: site.url,
};

const traumaAreas = [
  {
    title: "Problemas de rodilla",
    href: "/rodilla",
    image: "/assets/lesion-rodilla.webp",
    tone: "#268b95",
  },
  {
    title: "Problemas de cadera y columna",
    href: "/otras-zonas/columna",
    image: "/assets/lesion-cadera.webp",
    tone: "#34a6b1",
  },
  {
    title: "Problemas hombro, codo y muñeca",
    href: "/otras-zonas/hombro",
    image: "/assets/lesion-hombro.webp",
    tone: "#8ed3dc",
  },
  {
    title: "Problemas de pierna, pie y tobillo",
    href: "/otras-zonas/pie-y-tobillo",
    image: "/assets/lesion-tobillo.webp",
    tone: "#6fc1cc",
  },
];

const testimonials = [
  {
    name: "C. C.",
    title: "Me encantó el profesionalismo",
    body: "Me dio un diagnóstico completo a mi molestia y gracias a sus tratamientos he podido recuperarme. Su atención es personalizada y amable. Gracias Doctor Calderón. Totalmente recomendado.",
  },
  {
    name: "C. O.",
    title: "Excelente médico, muy comprometido con su vocación y sus pacientes",
    body: "Además de ser un gran ser humano, operó el brazo roto de mi hijo y quedó perfecto.",
  },
  {
    name: "M. V.",
    title: "Atención personalizada con una explicación clara sobre el problema",
    body: "Buenas recomendaciones con nada de medicina y bien aconsejado. Gracias Doctor Calderón.",
  },
  {
    name: "R. Q.",
    title: "Atención increíble y personalizada",
    body: "Su atención fue increíble y muy personalizada. Me ayudó a resolver el problema que tenía. Se nota su experiencia y trayectoria. Estoy muy contento con su ayuda, Dr. Calderón.",
  },
  {
    name: "P. M.",
    title: "Nos sentimos muy cómodas con su atención",
    body: 'Atendió a mis 2 hijas por dolor de rodillas. Ellas dijeron: "Mami nos gustó mucho la atención del doctor, mantiene su profesionalismo, es chistoso y nos quitó el miedo". Super recomendado.',
  },
  {
    name: "F. B.",
    title: "Recuperación y progreso real",
    body: "Tenía un problema en la rodilla y no mejoraba con otros médicos. El Dr. Calderón me examinó a fondo, revisó exámenes y explicó el plan de recuperación. Hoy veo progreso real y estoy mejor. Excelente médico.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <section className="border-b border-black/10">
        <div className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-[70vh] lg:min-h-[75vh]">
          <Image
            src="/assets/heroimgcouple.webp"
            alt="Pareja caminando en la playa al atardecer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-10 flex min-h-[70vh] items-end px-4 pb-8 sm:min-h-[70vh] sm:px-10 sm:pb-12 lg:min-h-[75vh] lg:px-16">
            <div className="flex w-full max-w-[320px] flex-col gap-4 sm:max-w-md">
              <div className="rounded-[26px] bg-[#c9b3a1]/85 p-6 text-white shadow-lg shadow-black/[.12] backdrop-blur-sm sm:p-8">
                <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  <span className="block">Recupera tu movilidad</span>
                  <span className="block">y vive sin dolor</span>
                </h1>
                <p className="mt-3 text-sm font-medium leading-6 text-white/90 sm:text-base sm:mr-20">
                  Soy el Dr. Luis Calderón, especialista en traumatología y
                  ortopedia, experto en cirugía y preservación de rodilla en
                  Quito.
                </p>
              </div>
              <Link
                href="/contacto"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-white shadow-md shadow-black/[.12] hover:opacity-90 sm:w-[20rem] sm:text-lg"
              >
                Agendar Valoración
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand -mt-2 flex items-center py-10 sm:min-h-[90vh] sm:py-16">
        <div className="w-full px-4 sm:pl-8 sm:pr-0 lg:pl-10">
          <div className="flex w-full rounded-[28px] bg-white px-6 py-10 shadow-xl shadow-black/[.08] sm:ml-auto sm:min-h-[70vh] sm:items-center sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <div className="grid w-full gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Sobre mi trayectoria
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Tu bienestar es mi prioridad — traumatología con enfoque
                  humano y precisión científica.
                </h2>
                <p className="mt-4 text-sm font-semibold text-foreground sm:text-base">
                  Hola, soy el Dr. Luis Calderón.
                </p>
                <div className="mt-4 space-y-4 text-sm leading-6 text-foreground/70 sm:text-base">
                  <p>
                    Soy traumatólogo y ortopedista en Quito con más de 15 años
                    de experiencia, profesor de la USFQ y experto en cirugía de
                    rodilla, cadera, hombro y tobillo.
                  </p>
                  <p>
                    Mi formación en la Universidad San Francisco de Quito como
                    traumatólogo, sumada a cursos en Europa, Estados Unidos y
                    América Latina, me han dado la capacidad para manejar
                    cualquier problema de rodilla.
                  </p>
                  <p>
                    Soy miembro activo de AO Foundation (educación global en
                    trauma y ortopedia) e ISAKOS (cirugía artroscópica y de
                    rodilla). Trabajo con cirugía asistida por navegación o
                    robot, artroscopia y preservación articular.
                  </p>
                  <p>
                    Me comprometo a darte el mejor tratamiento y acompañarte
                    para que recuperes tu movilidad con opciones realistas, sin
                    promesas vacías. Atiendo pacientes de todos los seguros
                    mediante reembolsos y facilito el proceso.
                  </p>
                  <p className="font-semibold text-foreground">
                    Porque tú no eres un caso clínico: eres una persona que
                    merece recuperar su vida.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 opacity-50 sm:gap-6 md:gap-8 md:max-w-lg">
                  <Image
                    src="/assets/ao-fundation.webp"
                    alt="AO Foundation"
                    width={80}
                    height={80}
                    className="h-14 w-auto object-contain sm:h-16"
                  />
                  <Image
                    src="/assets/isakos.webp"
                    alt="ISAKOS"
                    width={150}
                    height={80}
                    className="h-12 w-auto object-contain sm:h-14"
                  />
                  <Image
                    src="/assets/logo-usfq1.webp"
                    alt="USFQ"
                    width={150}
                    height={80}
                    className="h-12 w-auto object-contain sm:h-14"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="aspect-square w-full max-w-[360px] rounded-full bg-brand p-5 sm:max-w-[420px] sm:p-6 lg:max-w-[520px] lg:p-7 xl:max-w-[560px]">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-white/20">
                    <Image
                      src="/assets/foto-drluis.webp"
                      alt="Dr. Luis Calderón"
                      fill
                      sizes="(min-width: 1280px) 560px, (min-width: 1024px) 520px, (min-width: 640px) 420px, 360px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
              Atención de primera
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Especialidades en{" "}
              <span className="italic text-foreground/80">traumatología</span>
            </h2>
          </div>
        </Container>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {traumaAreas.map((area) => (
            <div key={area.title} className="h-full">
              <Link
                href={area.href}
                style={{
                  backgroundColor: area.tone,
                }}
                className="group relative block h-full min-h-[320px] overflow-hidden px-8 py-12 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[500px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 sm:group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${area.image})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.55))] opacity-40 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                    {area.title}
                  </h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-lg transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <div className="relative z-10 mt-10 flex justify-center" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b2a45] py-16 sm:py-20">
        <Image
          src="/assets/consultorio.webp"
          alt="Consultorio del Dr. Luis Calderón"
          fill
          sizes="100vw"
          className="object-cover opacity-90 z-0"
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(11,42,69,0.35),rgba(11,42,69,0.65))]" />
        <Container className="relative z-20">
          <div className="text-center text-white">
            <p className="text-sm italic text-white/80">Testimonios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Los mejores resultados
            </h2>
          </div>

          <div className="mt-10">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f4fbfc] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,151,162,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(11,42,69,0.15),transparent_45%)]" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] bg-[#0b2a45] p-8 text-white shadow-2xl shadow-black/[.2] sm:p-10">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand/40 blur-2xl" />
                <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Guía de Rodilla Vol. 1 - 2024
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  Recupera tu movilidad con ejercicios prácticos y consejos
                  médicos.
                </h3>
                <p className="mt-4 text-sm text-white/75">
                  Preparé esta guía para que entiendas tu dolor de rodilla y
                  empieces a mejorar desde casa con respaldo médico.
                </p>
                <a
                  href="/assets/Cuida tus rodillas con el Dr. Luis Calderón.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/20"
                >
                  PDF gratuito
                  <span className="text-[0.65em] text-white/60">VER</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                Mis recomendaciones
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                ¿Te duele la rodilla? Descarga mi guía gratuita con ejercicios y
                consejos.
              </h2>
              <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
                Además recibirás mi dieta para reducir inflamación y un video
                donde te explico cómo acelerar tu recuperación.
              </p>

              <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  className="h-12 w-full rounded-full border border-black/10 bg-white px-5 text-sm outline-none focus:border-black/30"
                />
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:opacity-90"
                >
                  Descargar guía
                </button>
              </form>
              <p className="mt-3 text-xs text-foreground/60">
                Sin spam. Puedes darte de baja cuando quieras.
              </p>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                <Link
                  href="/recursos/dieta-bajar-peso-sin-hambre"
                  className="relative block rounded-2xl border border-black/20 bg-white p-5 shadow-sm shadow-black/[.03] transition hover:-translate-y-0.5 hover:border-brand"
                >
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    Dieta creada para ti
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Plan alimenticio para reducir inflamación y proteger tus
                    articulaciones sin pasar hambre.
                  </p>
                  <div className="mt-4 inline-flex h-9 items-center justify-center rounded-full bg-brand/10 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Ver dieta completa
                  </div>
                </Link>
                <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm shadow-black/[.03]">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    Video exclusivo
                  </h3>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-black/5 bg-black/5">
                    <iframe
                      className="h-40 w-full"
                      src="https://www.youtube.com/embed/STM0fe1r1qU"
                      title="Video del Dr. Luis Calderón - Cirugía de rodilla"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 text-sm text-foreground/70">
                    Explicación clara sobre cuidados, ejercicios y cómo puedes
                    cuidar tu rodilla.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=STM0fe1r1qU"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-brand underline"
                  >
                    Ver en YouTube →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
