import type { Metadata } from "next";
import { DietPageClient } from "./DietPageClient";

const DOCTOR_NAME = "Dr. Luis Calderón";
const CTA_APPOINTMENT_URL = "/contacto";
const PDF_DOWNLOAD_URL = "";
const HERO_IMAGE_URL = "/assets/comida-saludable.webp";

const SITE_BRAND_COLORS = {
  dark: "#003C47",
  teal: "#007E8A",
  light: "#F7FAFB",
  text: "#0B1F24",
};

export const metadata: Metadata = {
  title: "Dieta para bajar de peso sin pasar hambre | Dr. Luis Calderón",
  description:
    "Guía práctica para bajar de peso sin pasar hambre. Plan por grupos alimentarios, porciones claras y menú diario. Clínica del Dr. Luis Calderón.",
  openGraph: {
    title: "Dieta para bajar de peso sin pasar hambre",
    description:
      "Plan por grupos alimentarios, menú diario y CTA para agendar con el Dr. Luis Calderón.",
    url: "https://drluiscalderon.com/recursos/dieta-bajar-peso-sin-hambre",
    siteName: "Dr. Luis Calderón",
    type: "article",
  },
};

const principles = [
  "No es dejar de comer, sino comer inteligentemente.",
  "No hay alimentos malos, sino porciones descontroladas.",
  "Comer bien también significa disfrutar.",
  "Mantén horarios regulares y respeta las porciones.",
  "La disciplina y el ejercicio (al menos 30 minutos 3 veces por semana) son fundamentales.",
];

const groups = [
  {
    key: "lacteos",
    title: "Lácteos y huevos",
    portion: "Máximo 1 porción por comida",
    allowed: [
      "Leche descremada: 1 taza",
      "Leche en polvo descremada: 2 cucharadas",
      "Yogurt dietético: 1 taza",
      "Queso: 1 rodaja",
      "Huevo: 1 unidad",
    ],
    avoid: [],
  },
  {
    key: "verduras",
    title: "Verduras",
    portion: "1 taza cruda o ½ taza cocida por comida",
    allowed: [
      "Acelga, apio, berenjena, brócoli, achocha, cebolla, col blanca, col morada",
      "Alcachofa, col de Bruselas, coliflor, espárragos, espinaca, hongos, lechuga",
      "Nabo, palmito, pepinillos, pimiento, rábanos, zuquini, sambo, tomate, vainita, zanahoria amarilla, zapallo",
    ],
    avoid: ["Remolacha (alto contenido de azúcar)."],
  },
  {
    key: "frutas",
    title: "Frutas",
    portion: "1 porción por comida o colación",
    allowed: [
      "1 taza: melón, papaya, sandía, babaco, guanábana",
      "1 unidad mediana: pera, kiwi, manzana, mandarina, mango pequeño, lima, durazno, toronja, naranja pequeña, guayaba",
      "½ unidad: chirimoya, tomate de árbol, naranjilla",
      "8 a 10 unidades: uvas, frutillas",
    ],
    avoid: ["Mango, uvas pasas, capulí, orito, zapote, mamey, plátano."],
  },
  {
    key: "almidones",
    title: "Almidones",
    portion: "Máximo 2 porciones por comida",
    allowed: [
      "Pan: 1 rebanada de pan cortado o ½ pan redondo",
      "Galletas: 3 unidades de galletas de sal",
      "Mote cocido: ½ taza; Quinua: 2 cucharadas; Arroz cocido: ½ taza; Fideos: ½ taza",
      "Maíz tostado: 3 cucharadas; Choclo tierno: 1 pequeño",
      "Papa o plátano verde: 1 mediana o ¼ mediano",
      "Avena: 2 cucharadas",
    ],
    avoid: [],
  },
  {
    key: "carnes",
    title: "Carnes (Proteínas magras)",
    portion: "75–100 g por porción, máximo 2 porciones por comida",
    allowed: [
      "Pollo sin piel, pavo, sardina, res magra, filete de cerdo",
      "Atún en agua, pescado, ternera",
    ],
    avoid: ["Embutidos, piel de pollo, carnes con grasa, vísceras."],
  },
  {
    key: "grasas",
    title: "Grasas saludables",
    portion: "1 porción por comida",
    allowed: [
      "Aceite de oliva o girasol: 1 cucharada (aderezar, no freír)",
      "Frutos secos: 1 puñado (nueces, almendras, pepas de zambo, semillas de girasol)",
      "Aguacate: ¼ - ½ unidad",
    ],
    avoid: [],
  },
  {
    key: "libre",
    title: "Libre consumo",
    portion: "Sin restricción, sin calorías adicionales",
    allowed: [
      "Agua mineral, aromáticas, consomé sin grasa, café sin azúcar",
      "Limón, mostaza, vinagre, hierbas para sazonar",
      "Gelatina dietética, condimentos naturales",
    ],
    avoid: [],
  },
];

const dailyPlan = [
  {
    title: "Desayuno + colación mañana",
    items: [
      "1 taza de leche descremada o yogurt sin azúcar",
      "1 huevo o 1 rodaja de queso",
      "1 rebanada de pan integral",
      "1 porción de fruta (melón, papaya o kiwi)",
      "Colación: 1 taza de sandía o una manzana",
    ],
  },
  {
    title: "Almuerzo + colación tarde",
    items: [
      "Proteína: pollo sin piel o pescado a la plancha (100 g)",
      "Almidón: ½ taza de arroz o 1 papa mediana",
      "Verduras: ensalada mixta con aceite de oliva (lechuga, tomate, zanahoria)",
      "Fruta: 1 mandarina o ½ taza de frutillas",
      "Colación: 1 fruta o 3 galletas integrales",
    ],
  },
  {
    title: "Cena + colación extra",
    items: [
      "Proteína: atún en agua o pescado a la plancha",
      "Almidón: 1 papa o ½ taza de arroz integral",
      "Verduras: ensalada de tomate con cebolla y vainitas cocidas",
      "Grasa saludable: ¼ de aguacate",
      "Colación opcional: gelatina light",
    ],
  },
];

export default function DietaBajarPesoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Dieta para bajar de peso sin pasar hambre",
    description:
      "Guía práctica por grupos alimentarios y plan diario para bajar de peso sin pasar hambre.",
    about: "Weight loss diet without hunger",
    author: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      medicalSpecialty: "Nutrition",
    },
    publisher: {
      "@type": "Organization",
      name: DOCTOR_NAME,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DietPageClient
        heroImageUrl={HERO_IMAGE_URL}
        appointmentUrl={CTA_APPOINTMENT_URL}
        pdfUrl={PDF_DOWNLOAD_URL}
        principles={principles}
        groups={groups}
        dailyPlan={dailyPlan}
      />
    </>
  );
}
