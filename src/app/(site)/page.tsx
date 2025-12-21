import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { specialties } from "@/content/especialidades";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="relative w-full overflow-hidden lg:h-160 sm:h-100">
          <Image
            src="/assets/heroimgcouple.webp"
            alt="Pareja caminando en la playa al atardecer"
            fill
            priority
            sizes="200vw"
            className="object-cover"
          />
          <div className="relative ml-20 z-10 flex min-h-[360px] items-end sm:min-h-[440px] lg:min-h-[520px] ">
            <div className="m-4 flex max-w-sm flex-col gap-4 sm:m-10 sm:max-w-md">
              <div className="rounded-[26px] bg-[#c9b3a1]/85 p-6 text-white shadow-lg shadow-black/[.12] backdrop-blur-sm sm:p-8">
                <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  <span className="block">Recupera tu movilidad</span>
                  <span className="block">y vive sin dolor</span>
                </h1>
                <p className="mt-3 text-sm font-medium leading-6 text-white/90 sm:text-base sm:mr-20">
                  Dr. Luis Calderón: Especialista en Cirugía y Preservación de
                  Rodilla en Quito.
                </p>
              </div>
              <Link
                href="/contacto"
                className="inline-flex h-12 w-[20rem] items-center justify-center rounded-full bg-brand px-8 text-[1.2rem] font-semibold text-white shadow-md shadow-black/[.12] hover:opacity-90"
              >
                Agendar Valoración
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand -mt-2 flex min-h-[90vh] items-center py-10 sm:py-16">
        <div className="w-full pl-4 sm:pl-8 lg:pl-10 pr-0">
          <div className="ml-auto flex min-h-[70vh] w-full max-w-[100rem] items-center rounded-[36px] bg-white px-6 py-12 shadow-xl shadow-black/[.08] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
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
                    Traumatólogo en Quito con más de 15 años de experiencia,
                    profesor de la USFQ y especialista en cirugía de rodilla,
                    cadera, hombro y tobillo.
                  </p>
                  <p>
                    No me conformo con operar: me comprometo a que vuelvas a
                    caminar, correr, jugar y vivir sin dolor, con un plan
                    personalizado, tecnología avanzada y seguimiento cercano.
                  </p>
                  <p>
                    Mi formación con AO Foundation e ISAKOS, y mi experiencia en
                    cirugía robótica, artroscopia y preservación articular, me
                    permiten ofrecer resultados seguros y duraderos.
                  </p>
                  <p className="font-semibold text-foreground">
                    Porque tú no eres un caso clínico: eres una persona que
                    merece recuperar su vida.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 opacity-50 sm:gap-15 md:max-w-lg">
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

      <section>
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Especialidades
              </h2>
              <p className="mt-2 text-foreground/70">
                Áreas de atención y enfoque clínico.
              </p>
            </div>
            <Link
              href="/especialidades"
              className="text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Ver todas
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.slice(0, 3).map((specialty) => (
              <div
                key={specialty.slug}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[.02] dark:border-white/10 dark:bg-white/[.03] dark:shadow-none"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {specialty.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {specialty.summary}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
