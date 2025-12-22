export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category?: string;
  heroImage?: string;
  heroAlt?: string;
  date?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "truena-rodilla-escaleras",
    title: "¿Por qué me truena la rodilla al subir escaleras?",
    excerpt:
      "Te explico las causas del chasquido en la rodilla, señales de alerta y cuándo conviene una valoración.",
    category: "Rodilla",
    heroImage: "/assets/lesion-rodilla.webp",
    heroAlt: "Rodilla con dolor mientras sube escaleras",
    date: "2024-05-12",
    content: [
      "Cuando escuchas un chasquido en la rodilla, suelo relacionarlo con fricción de tejidos, desgaste de cartílago o lesiones de menisco. Si aparece con dolor, inflamación o bloqueo articular, recomiendo una evaluación médica.",
      "En consulta reviso tu alineación, estabilidad y movilidad. Según el caso, solicito radiografías o resonancia para definir el tratamiento adecuado.",
      "El manejo que propongo puede incluir fisioterapia, fortalecimiento muscular y, en casos específicos, procedimientos mínimamente invasivos para corregir la causa.",
    ],
  },
  {
    slug: "guia-ejercicios-postoperatorio-meniscos",
    title: "Guía de ejercicios post-operación de meniscos",
    excerpt:
      "Comparto recomendaciones seguras para recuperar movilidad, fuerza y estabilidad después de una artroscopia.",
    category: "Rehabilitación",
    heroImage: "/assets/lesion-rodilla.webp",
    heroAlt: "Paciente realizando ejercicios de rehabilitación de rodilla",
    date: "2024-04-03",
    content: [
      "Después de una cirugía de meniscos diseño un plan progresivo para recuperar movilidad, controlar el dolor y prevenir rigidez.",
      "En las primeras semanas priorizo ejercicios de rango de movimiento, activación del cuádriceps y caminata controlada.",
      "Siempre indico fisioterapia personalizada para volver a tus actividades con confianza y reducir el riesgo de recaídas.",
    ],
  },
  {
    slug: "dolor-muscular-vs-ligamento",
    title: "Diferencias entre dolor muscular y lesión de ligamento",
    excerpt:
      "Te explico cómo identificar señales de esguince, inestabilidad y cuándo necesitas una evaluación especializada.",
    category: "Lesiones deportivas",
    heroImage: "/assets/lesion-hombro.webp",
    heroAlt: "Lesión deportiva con molestia articular",
    date: "2024-03-18",
    content: [
      "Cuando comparo dolor muscular vs. lesión ligamentaria, me fijo en el tipo de dolor: el muscular suele aparecer tras esfuerzo y mejora con descanso; el ligamentario provoca inestabilidad, inflamación y dolor agudo al mover la articulación.",
      "Si sientes que la articulación falla o se traba, te recomiendo una evaluación clínica y estudios de imagen para descartar lesiones ligamentarias.",
      "Un diagnóstico oportuno me permite elegir entre tratamiento conservador, fisioterapia o cirugía según el grado de lesión.",
    ],
  },
  {
    slug: "dieta-para-cuidar-rodillas",
    title: "Dieta para bajar de peso y cuidar tus rodillas",
    excerpt:
      "Comparto una alimentación antiinflamatoria y hábitos que protegen tus articulaciones y reducen el dolor.",
    category: "Bienestar",
    heroImage: "/assets/consultorio.webp",
    heroAlt: "Consultorio del Dr. Luis Calderón",
    date: "2024-02-10",
    content: [
      "En consulta explico que mantener un peso saludable disminuye la carga sobre la rodilla y reduce el dolor por artrosis. La nutrición es una parte importante del plan de tratamiento.",
      "Te recomiendo priorizar alimentos ricos en omega-3, frutas, verduras y proteínas magras, y evitar exceso de azúcares y ultraprocesados.",
      "Mi enfoque integral combina alimentación, actividad física adecuada y seguimiento médico.",
    ],
  },
];
