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
      "Causas frecuentes del chasquido en la rodilla, señales de alerta y cuándo consultar a un traumatólogo.",
    content: [
      "El ruido o chasquido en la rodilla puede estar relacionado con fricción de tejidos, desgaste de cartílago o lesiones de menisco. Si se acompaña de dolor, inflamación o bloqueo articular, es importante una evaluación médica.",
      "En consulta revisamos la alineación, estabilidad y movilidad. Dependiendo del caso se solicitan radiografías o resonancia para definir el tratamiento adecuado.",
      "El manejo puede incluir fisioterapia, fortalecimiento muscular y, en casos específicos, procedimientos mínimamente invasivos para corregir la causa.",
    ],
  },
  {
    slug: "guia-ejercicios-postoperatorio-meniscos",
    title: "Guía de ejercicios post-operación de meniscos",
    excerpt:
      "Recomendaciones seguras para recuperar movilidad, fuerza y estabilidad después de una artroscopia.",
    content: [
      "La recuperación después de una cirugía de meniscos requiere un plan progresivo. El objetivo es recuperar movilidad, controlar el dolor y prevenir rigidez.",
      "En las primeras semanas se priorizan ejercicios de rango de movimiento, activación del cuádriceps y caminata controlada.",
      "La fisioterapia personalizada es clave para volver a tus actividades con confianza y reducir el riesgo de recaídas.",
    ],
  },
  {
    slug: "dolor-muscular-vs-ligamento",
    title: "Diferencias entre dolor muscular y lesión de ligamento",
    excerpt:
      "Cómo identificar señales de esguince, inestabilidad y cuándo necesitas una evaluación especializada.",
    content: [
      "El dolor muscular suele aparecer tras esfuerzo y mejora con descanso, mientras que una lesión de ligamento puede generar inestabilidad, inflamación y dolor agudo al mover la articulación.",
      "Si sientes que la articulación falla o se traba, es recomendable una evaluación clínica y estudios de imagen para descartar lesiones ligamentarias.",
      "Un diagnóstico oportuno permite elegir entre tratamiento conservador, fisioterapia o cirugía según el grado de lesión.",
    ],
  },
  {
    slug: "dieta-para-cuidar-rodillas",
    title: "Dieta para bajar de peso y cuidar tus rodillas",
    excerpt:
      "Alimentación antiinflamatoria y hábitos que protegen tus articulaciones y reducen el dolor.",
    content: [
      "Mantener un peso saludable disminuye la carga sobre la rodilla y reduce el dolor por artrosis. La nutrición es una parte importante del plan de tratamiento.",
      "Prioriza alimentos ricos en omega-3, frutas, verduras y proteínas magras. Evita exceso de azúcares y ultraprocesados.",
      "Un enfoque integral combina alimentación, actividad física adecuada y seguimiento médico.",
    ],
  },
];

