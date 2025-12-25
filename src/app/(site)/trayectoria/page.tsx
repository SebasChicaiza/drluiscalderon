import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { Container } from "@/components/layout/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryCarousel } from "@/components/trayectoria/GalleryCarousel";

export const metadata: Metadata = {
  title: "Trayectoria | Dr. Luis Calderón",
  description:
    "Conoce la trayectoria del Dr. Luis Calderón: traumatólogo, cirujano y profesor universitario en Quito con más de 15 años formando especialistas.",
};

const statsEs = [
  { value: 15, prefix: "+", label: "Años de experiencia clínica" },
  { value: 300, prefix: "+", label: "Cirugías anuales" },
  { value: 2500, prefix: "+", label: "Pacientes atendidos al año" },
  { value: 100, suffix: "%", label: "Compromiso académico" },
];

const statsEn = [
  { value: 15, prefix: "+", label: "Years of clinical experience" },
  { value: 300, prefix: "+", label: "Surgeries each year" },
  { value: 2500, prefix: "+", label: "Patients treated per year" },
  { value: 100, suffix: "%", label: "Academic commitment" },
];

const timelineEs = [
  {
    year: "2025",
    title: "Máster en Cirugía Avanzada de Rodilla",
    desc: "Formación completa en técnicas complejas, navegación y preservación articular.",
  },
  {
    year: "2024",
    title: "Máster en Educación Mediada por TIC - PUCE",
    desc: "Integré tecnología educativa para formar mejor a residentes y pacientes.",
  },
  {
    year: "2022",
    title: "Experto universitario en Ecografía Musculoesquelética - UNIR",
    desc: "Diagnóstico inmediato en consultorio para decisiones más precisas.",
  },
  {
    year: "2014 - Presente",
    title:
      "Director y Profesor de Posgrado de Traumatología (USFQ) y Tutor UCE",
    desc: "Formando a la siguiente generación de especialistas.",
  },
  {
    year: "2018",
    title: "Miembro ISAKOS",
    desc: "Estándares internacionales en artroscopia y cirugía de rodilla.",
  },
  {
    year: "2015",
    title: "Delegado de Educación AO Foundation",
    desc: "Líder en educación de trauma y preservación articular.",
  },
  {
    year: "2014 - 2015",
    title:
      "Jefe del Servicio de Traumatología y Ortopedia, Hospital Carlos Andrade Marín (HECAM)",
    desc: "Liderazgo en cirugía de alta complejidad.",
  },
  {
    year: "2003",
    title: "Mejor egresado – Doctor en Medicina y Cirugía (PUCE)",
    desc: "Excelencia académica desde el inicio.",
  },
];

const timelineEn = [
  {
    year: "2025",
    title: "Master in Advanced Knee Surgery",
    desc: "Training in complex techniques, navigation and joint preservation.",
  },
  {
    year: "2024",
    title: "Master in Tech-Enhanced Education - PUCE",
    desc: "Integrated educational tech to better train residents and patients.",
  },
  {
    year: "2022",
    title: "MSK Ultrasound Expert - UNIR",
    desc: "Instant in-office diagnosis for sharper decisions.",
  },
  {
    year: "2014 - Present",
    title: "Program Director & Professor of Trauma (USFQ) and UCE Tutor",
    desc: "Training the next generation of specialists.",
  },
  {
    year: "2018",
    title: "ISAKOS Member",
    desc: "International standards in arthroscopy and knee surgery.",
  },
  {
    year: "2015",
    title: "AO Foundation Education Delegate",
    desc: "Leader in trauma education and joint preservation.",
  },
  {
    year: "2014 - 2015",
    title: "Head of Orthopaedics, Carlos Andrade Marín Hospital",
    desc: "Leadership in high-complexity surgery.",
  },
  {
    year: "2003",
    title: "Top graduate – MD (PUCE)",
    desc: "Academic excellence from the start.",
  },
];

const gallery = [
  {
    src: "/drluis/drluis-colegas.webp",
    alt: "Dr. Luis con colegas",
    captionEs: "Congreso internacional de cirugía de rodilla",
    captionEn: "International knee surgery congress",
  },
  {
    src: "/drluis/drluis-conferencia.webp",
    alt: "Dr. Luis dando una conferencia",
    captionEs: "Conferencia internacional de rodilla",
    captionEn: "International knee conference",
  },
  {
    src: "/drluis/drluis-en-quirofano.webp",
    alt: "Dr. Luis en quirófano",
    captionEs: "Artroscopia con equipo multidisciplinario",
    captionEn: "Arthroscopy with a multidisciplinary team",
  },
  {
    src: "/drluis/dr-operando.webp",
    alt: "Dr. Luis operando",
    captionEs: "Cirugía robótica y navegación en acción",
    captionEn: "Robotic and navigation surgery in action",
  },
];

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Dr. Luis Calderón",
    jobTitle: "Traumatólogo y Profesor Universitario",
    worksFor: [
      {
        "@type": "Organization",
        name: "Universidad San Francisco de Quito (USFQ)",
      },
      {
        "@type": "Hospital",
        name: "Hospital Carlos Andrade Marín (Ex-Jefe Servicio)",
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Pontificia Universidad Católica del Ecuador",
      },
      { "@type": "CollegeOrUniversity", name: "AO Foundation" },
    ],
    memberOf: [
      { "@type": "Organization", name: "ISAKOS" },
      { "@type": "Organization", name: "AO Trauma Ecuador" },
    ],
  },
};

export default async function CareerPage() {
  const headersList = await headers();
  const acceptLanguage =
    typeof headersList?.get === "function"
      ? headersList.get("accept-language")?.toLowerCase() || ""
      : "";
  const intlParam = headersList.get("x-internal-intl") || "";
  const forcedIntl = intlParam === "en";
  const isSpanish = !forcedIntl && acceptLanguage.startsWith("es");
  if (!isSpanish) return <CareerPageEn />;
  return (
    <div className="bg-white text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <section className="relative overflow-hidden bg-[#0b1417] text-white">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url(/assets/consultorio.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        <Container className="relative z-10 grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                El maestro detrás del bisturí
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Dr. Luis Calderón: Traumatólogo, Cirujano y Profesor
                Universitario en Quito.
              </h1>
              <p className="text-lg leading-7 text-white/80 sm:max-w-2xl">
                Más de 15 años formando a nuevos especialistas y devolviendo la
                movilidad a mis pacientes con rigor científico y calidad humana.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
                >
                  Agenda una cita
                </Link>
                <Link
                  href="/rodilla/cirugia-robotica"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Ver tecnología
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <Image
                src="/assets/foto-drluis.webp"
                alt="Dr. Luis Calderón en acción"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand">
        <Container className="py-10 sm:py-14">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statsEs.map((item) => (
                <Counter
                  key={item.label}
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  label={item.label}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-14 sm:py-18 space-y-14">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Mi filosofía
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Tratarte como a mi propia familia.
              </h2>
              <p className="text-base leading-7 text-foreground/75">
                Entiendo que operarse es una decisión difícil. Mi promesa es
                simple: ética y claridad. No recibirás términos médicos
                confusos, sino una explicación precisa de tu diagnóstico.
              </p>
              <p className="text-base leading-7 text-foreground/75">
                Como profesor universitario, mi vocación es enseñar; te
                explicaré tu lesión para decidir juntos la mejor ruta,
                cuidándote con la misma dedicación que ofrecería a mis seres
                queridos.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-[420px] rounded-full bg-brand p-5 sm:max-w-[480px] sm:p-6">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white/10">
                  <Image
                    src="/drluis/drluis-selfie.webp"
                    alt="Dr. Luis Calderón selfie"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-lg shadow-black/[.06]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Trayectoria académica
            </p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
              <div className="relative hidden lg:block">
                <div className="absolute left-4 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-brand via-brand/60 to-brand/20" />
              </div>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={item.title} className="relative pl-8">
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(43,151,162,0.15)]" />
                    <p className="text-sm font-semibold text-brand">
                      {item.year}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">
                      {item.desc}
                    </p>
                    {idx !== timeline.length - 1 ? (
                      <div className="absolute left-1.5 top-6 h-[90%] w-px bg-brand/30" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <section className="space-y-3">
            <div className="space-y-1 text-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Trayectoria
              </p>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Momentos que cuentan la historia
              </h2>
              <p className="text-sm text-foreground/70">
                Fotos dentro del quirófano, congresos y equipo.
              </p>
            </div>
            <GalleryCarousel items={gallery} />
          </section>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[26px] border border-black/10 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand p-7 text-white shadow-2xl shadow-black/20">
              <h2 className="text-2xl font-semibold">
                Diagnóstico preciso con tecnología avanzada.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Además de la cirugía, cuento con certificación en Ecografía
                Musculoesquelética (UNIR). Esto me permite diagnosticar lesiones
                de tejidos blandos en el consultorio, sin esperas,
                complementando mi práctica en cirugía robótica.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/80">
                La tecnología es una extensión de mi ojo clínico: combina
                ecografía, planeación 3D y cirugía asistida para resultados más
                seguros.
              </p>
              <Link
                href="/rodilla/cirugia-robotica"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand shadow-lg shadow-black/15 hover:bg-white/90"
              >
                Ver cirugía robótica
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-lg shadow-black/[.08]">
              <Image
                src="/assets/consultorio.webp"
                alt="Tecnología y diagnóstico en consultorio"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </Container>

      <section className="bg-[#f3f5f6]">
        <Container className="py-10 sm:py-12">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
              <Image
                src="/assets/logo-usfq1.webp"
                alt="USFQ"
                width={140}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/assets/ao-fundation.webp"
                alt="AO Foundation"
                width={120}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/assets/isakos.webp"
                alt="ISAKOS"
                width={160}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/assets/logodrluis.webp"
                alt="HECAM"
                width={120}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

function CareerPageEn() {
  return (
    <div className="bg-white text-foreground">
      <section className="relative overflow-hidden bg-[#0b1417] text-white">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url(/assets/consultorio.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        <Container className="relative z-10 grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
                The surgeon behind the scalpel
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Dr. Luis Calderón: Knee Surgeon and Professor in Quito.
              </h1>
              <p className="text-lg leading-7 text-white/80 sm:max-w-2xl">
                15+ years training new specialists and restoring mobility with
                science, technology, and a human touch.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
                >
                  Book an appointment
                </Link>
                <Link
                  href="/rodilla/cirugia-robotica"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  See the tech
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <Image
                src="/assets/foto-drluis.webp"
                alt="Dr. Luis Calderón"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand">
        <Container className="py-10 sm:py-14">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statsEn.map((item) => (
                <Counter
                  key={item.label}
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  label={item.label}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-14 sm:py-18 space-y-14">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Philosophy
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Treat you like family.
              </h2>
              <p className="text-base leading-7 text-foreground/75">
                Surgery is a big decision. You’ll get clear, honest
                explanations, not jargon. We decide together the best route for
                you.
              </p>
              <p className="text-base leading-7 text-foreground/75">
                As a university professor, teaching is my vocation. I explain
                your injury so you can choose confidently, with the same care
                I’d want for my own family.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-[420px] rounded-full bg-brand p-5 sm:max-w-[480px] sm:p-6">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white/10">
                  <Image
                    src="/drluis/drluis-selfie.webp"
                    alt="Dr. Luis Calderón"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-lg shadow-black/[.06]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Academic path
            </p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
              <div className="relative hidden lg:block">
                <div className="absolute left-4 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-brand via-brand/60 to-brand/20" />
              </div>
              <div className="space-y-6">
                {timelineEn.map((item, idx) => (
                  <div key={item.title} className="relative pl-8">
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(43,151,162,0.15)]" />
                    <p className="text-sm font-semibold text-brand">
                      {item.year}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">
                      {item.desc}
                    </p>
                    {idx !== timelineEn.length - 1 ? (
                      <div className="absolute left-1.5 top-6 h-[90%] w-px bg-brand/30" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <section className="space-y-3">
            <div className="space-y-1 text-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Highlights
              </p>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Moments that tell the story
              </h2>
              <p className="text-sm text-foreground/70">
                Surgeries, conferences, and team milestones.
              </p>
            </div>
            <GalleryCarousel
              items={gallery.map((item) => ({
                src: item.src,
                alt: item.alt,
                caption: item.captionEn,
              }))}
            />
          </section>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[26px] border border-black/10 bg-gradient-to-br from-[#0b2a45] via-[#0b2a45] to-brand p-7 text-white shadow-2xl shadow-black/20">
              <h2 className="text-2xl font-semibold">
                Precise diagnosis with advanced tech.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Certified in MSK ultrasound and experienced in robotic surgery.
                I combine imaging, 3D planning, and navigation to protect
                healthy tissue and improve outcomes.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Technology extends the clinical eye: ultrasound, 3D planning,
                and robotic assistance for safer, more predictable results.
              </p>
              <Link
                href="/rodilla/cirugia-robotica"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand shadow-lg shadow-black/15 hover:bg-white/90"
              >
                See robotic surgery
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-lg shadow-black/[.08]">
              <Image
                src="/assets/consultorio.webp"
                alt="Clinic tech"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </Container>

      <section className="bg-[#f3f5f6]">
        <Container className="py-10 sm:py-12">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
              <Image
                src="/assets/logo-usfq1.webp"
                alt="USFQ"
                width={140}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/assets/ao-fundation.webp"
                alt="AO Foundation"
                width={120}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/assets/isakos.webp"
                alt="ISAKOS"
                width={160}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/assets/logodrluis.webp"
                alt="HECAM"
                width={120}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
