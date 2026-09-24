export const site = {
  name: "COTA Construcción",
  tagline: "Construimos con método. Entregamos con detalle.",
  city: "Madrid",
  url: "https://cota-construccion.example.com",
  category: "Empresa constructora",
  businessType: "GeneralContractor",
  email: "hola@ejemplo.com",
  services: [
  { slug: "obra-nueva", nav: "Construcción de obra nueva en Madrid", title: "Empresa de obra nueva en Madrid", description: "Ejecución de viviendas y proyectos residenciales desde cimentación hasta acabados, con coordinación técnica de todas las fases.", body: "La obra nueva exige continuidad entre proyecto, planificación y ejecución. En COTA Construcción coordinamos los trabajos desde el replanteo y la cimentación hasta estructura, cerramientos, instalaciones y acabados. Nuestro enfoque busca anticipar interferencias entre gremios y mantener una secuencia de obra comprensible para propiedad y dirección facultativa." },
  { slug: "rehabilitacion-edificios", nav: "Rehabilitación de edificios en Madrid", title: "Rehabilitación de edificios en Madrid", description: "Intervenciones de rehabilitación para actualizar envolventes, zonas comunes, cubiertas y elementos constructivos deteriorados.", body: "La rehabilitación parte de un edificio existente y, por tanto, requiere estudiar lo que ya hay antes de intervenir. Analizamos el alcance con la documentación disponible y coordinamos demoliciones, refuerzos, reparación de fachadas, impermeabilización, cubiertas y acabados según las necesidades del inmueble." },
  { slug: "estructuras-hormigon", nav: "Estructuras de hormigón en Madrid", title: "Estructuras de hormigón en Madrid", description: "Ejecución y coordinación de estructuras de hormigón armado para proyectos residenciales y de construcción.", body: "Una estructura de hormigón requiere precisión en replanteo, encofrado, ferralla, vertido y curado. La coordinación entre estas fases condiciona geometría, tiempos y la correcta continuidad con el resto de sistemas constructivos. Trabajamos con planificación de fases y revisión de puntos singulares antes de avanzar." }
  ]
} as const;

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}
