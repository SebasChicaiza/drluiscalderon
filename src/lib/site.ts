export const site = {
  name: "Dr. Luis Calderón",
  profession: "Traumatólogo - Cirugía de Rodilla",
  description:
    "Traumatólogo en Quito especializado en cirugía de rodilla, artroscopia y preservación articular. Atención médica centrada en el paciente.",
  url: "https://drluiscalderon.com",
  image: "/assets/foto-drluis.webp",
  logo: {
    src: "/assets/logodrluis.webp",
    alt: "Dr. Luis Calderón",
  },
  consultation: {
    modality: "Presencial y online",
    location:
      "Av. Eloy Alfaro N29-235 entre Alemania e Italia. Fortune Plaza, piso 11.",
    schedule: "Lun–Vie 09:00–18:00",
  },
  contact: {
    phone: "+593 998041843",
    whatsapp: "+593 998041843",
    email: "drluiscalderon@gmail.com",
    address:
      "Av. Eloy Alfaro N29-235 entre Alemania e Italia.\nEdificio Fortune Plaza. Piso 11. Oficina 1103.\nQuito – Ecuador.",
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
    label: "Otras Zonas",
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
