export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "truena-rodilla-escaleras",
    title: "¿Por qué me truena la rodilla al subir escaleras?",
    excerpt:
      "Te explico las causas del chasquido en la rodilla, señales de alerta y cuándo conviene una valoración.",
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
    content: [
      "En consulta explico que mantener un peso saludable disminuye la carga sobre la rodilla y reduce el dolor por artrosis. La nutrición es una parte importante del plan de tratamiento.",
      "Te recomiendo priorizar alimentos ricos en omega-3, frutas, verduras y proteínas magras, y evitar exceso de azúcares y ultraprocesados.",
      "Mi enfoque integral combina alimentación, actividad física adecuada y seguimiento médico.",
    ],
  },
];
