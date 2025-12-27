export const site = {
  name: "Dr. Luis Calderón",
  profession: "Traumatólogo - Cirugía de Rodilla",
  description:
    "Soy traumatólogo y ortopedista en Quito, experto en cirugía de rodilla, artroscopia y preservación articular. Atiendo con un enfoque centrado en cada paciente.",
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
  social: {
    instagram: "https://www.instagram.com/drluiscalderons/",
    facebook: "https://www.facebook.com/dr.artroscopia",
    youtube: "https://www.youtube.com/@luisrenecalderon7900",
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
      {
        label: "Cirugía robótica y prótesis",
        href: "/rodilla/cirugia-robotica",
      },
      { label: "Trauma de rodilla", href: "/rodilla/lesiones" },
      { label: "Medicina deportiva", href: "/rodilla/ligamento-cruzado-lca" },
      { label: "Artroscopia", href: "/rodilla/artroscopia" },
      {
        label: "Trastornos degenerativos",
        href: "/rodilla/artrosis-protesis",
      },
      {
        label: "Deformidades y crecimiento",
        href: "/rodilla/deformidades-crecimiento",
      },
    ],
  },
  {
    label: "Otras Zonas",
    href: "/otras-zonas",
    children: [
      { label: "Cadera", href: "/otras-zonas/cadera" },
      { label: "Columna", href: "/otras-zonas/columna" },
      { label: "Hombro, codo y muñeca", href: "/otras-zonas/parte-superior" },
      { label: "Pie y tobillo", href: "/otras-zonas/pie-y-tobillo" },
    ],
  },
  { label: "Trayectoria", href: "/trayectoria" },
  { label: "Blog", href: "/blog" },
];
