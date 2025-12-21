export type Specialty = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
};

export const specialties: Specialty[] = [
  {
    slug: "medicina-general",
    title: "Medicina general",
    summary: "Realizo evaluación integral, prevención y manejo de enfermedades comunes.",
    detail:
      "Ofrezco consulta inicial, control de signos y síntomas, chequeos preventivos y derivación oportuna a subespecialidades cuando se requiera.",
  },
  {
    slug: "salud-ocupacional",
    title: "Salud ocupacional",
    summary: "Evalúo aptitud médica, seguimiento y orientación para salud en el trabajo.",
    detail:
      "Realizo evaluaciones periódicas, recomendaciones preventivas y apoyo en el control de factores de riesgo laborales.",
  },
  {
    slug: "control-cronicos",
    title: "Control de enfermedades crónicas",
    summary: "Doy seguimiento a hipertensión, diabetes, dislipidemia y más.",
    detail:
      "Defino planes de control, ajustes terapéuticos y educación en hábitos saludables para mejorar tu calidad de vida.",
  },
];
