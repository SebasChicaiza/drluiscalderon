import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respondo preguntas frecuentes sobre traumatología, cirugía de rodilla y atención médica en Quito.",
};

const faqs = [
  {
    question: "¿Qué tipo de lesiones trato?",
    answer:
      "Me especializo en lesiones de rodilla (meniscos, ligamentos, artrosis), cirugía robótica y preservación articular. También atiendo cadera, hombro y columna.",
  },
  {
    question: "¿Qué es la cirugía robótica y qué ventajas ofrece?",
    answer:
      "Es una técnica avanzada que utilizo para lograr precisión submilimétrica en la colocación de prótesis, con menos dolor y una recuperación más rápida.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container className="py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Preguntas frecuentes
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Resuelvo dudas comunes sobre tratamientos, cirugía y recuperación.
        </p>

        <div className="mt-10 grid gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[.03]"
            >
              <h2 className="text-base font-semibold tracking-tight">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm text-foreground/70 sm:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
