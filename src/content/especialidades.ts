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
    summary: "Evaluación integral, prevención y manejo de enfermedades comunes.",
    detail:
      "Consulta inicial, control de signos y síntomas, chequeos preventivos y derivación oportuna a subespecialidades cuando se requiera.",
  },
  {
    slug: "salud-ocupacional",
    title: "Salud ocupacional",
    summary: "Aptitud médica, seguimiento y orientación para salud en el trabajo.",
    detail:
      "Evaluaciones periódicas, recomendaciones preventivas y apoyo en el control de factores de riesgo laborales.",
  },
  {
    slug: "control-cronicos",
    title: "Control de enfermedades crónicas",
    summary: "Seguimiento de hipertensión, diabetes, dislipidemia y más.",
    detail:
      "Planes de control, ajustes terapéuticos y educación en hábitos saludables para mejorar calidad de vida.",
  },
];

