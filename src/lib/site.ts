export const site = {
  name: "Dr. Luis Calderón",
  profession: "Traumatólogo - Cirugía de Rodilla",
  description:
    "Atención médica centrada en el paciente, con enfoque preventivo, diagnóstico oportuno y seguimiento continuo.",
  logo: {
    src: "/assets/logodrluis.webp",
    alt: "Dr. Luis Calderón",
  },
  consultation: {
    modality: "Presencial y online",
    location: "Ciudad / Clínica (actualiza esta información)",
    schedule: "Lun–Vie 09:00–18:00 (actualiza esta información)",
  },
  contact: {
    phone: "+593 998041843",
    whatsapp: "+593 998041843",
    email: "drluiscalderon@gmail.com",
    address:
      "Av. Eloy Alfaro N29-235 entre Alemania e Italia. Edificio Fortune Plaza. Piso 11. Oficina 1103. Quito – Ecuador.",
  },
} as const;

export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Rodilla",
    href: "/rodilla",
    children: [
      { label: "Cirugía robótica", href: "/rodilla/cirugia-robotica" },
      { label: "Prótesis y artrosis", href: "/rodilla/protesis-artrosis" },
      { label: "Meniscos y artroscopia", href: "/rodilla/artroscopia-meniscos" },
    ],
  },
  {
    label: "Otras zonas",
    href: "/otras-zonas",
    children: [
      { label: "Cadera", href: "/otras-zonas/cadera" },
      { label: "Columna", href: "/otras-zonas/columna" },
      { label: "Hombro", href: "/otras-zonas/hombro" },
      { label: "Codo", href: "/otras-zonas/codo" },
      { label: "Muñeca", href: "/otras-zonas/muneca" },
      { label: "Pie y tobillo", href: "/otras-zonas/pie-y-tobillo" },
    ],
  },
  { label: "Trayectoria", href: "/trayectoria" },
  { label: "Blog", href: "/blog" },
];
