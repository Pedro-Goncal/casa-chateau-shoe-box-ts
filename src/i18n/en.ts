import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    title: {
      en: "Casa Chatou — Todos Santos, Baja California Sur",
      es: "Casa Chatou — Todos Santos, Baja California Sur",
    },
    description: {
      en: "A quiet showcase home between the desert and the Pacific in Todos Santos, Baja California Sur.",
      es: "Una casa de ensueño entre el desierto y el Pacífico en Todos Santos, Baja California Sur.",
    },
  },
  skipToContent: {
    en: "Skip to content",
    es: "Saltar al contenido",
  },
  nav: [
    {
      id: "welcome",
      label: { en: "About", es: "Acerca" },
    },
    {
      id: "spaces",
      label: { en: "Spaces", es: "Espacios" },
    },
    {
      id: "amenities",
      label: { en: "The Details", es: "Los detalles" },
    },
    {
      id: "gallery",
      label: { en: "Gallery", es: "Galería" },
    },
    {
      id: "contact",
      label: { en: "Contact", es: "Contacto" },
    },
  ],
  navMenu: {
    open: {
      en: "Open menu",
      es: "Abrir menú",
    },
    close: {
      en: "Close menu",
      es: "Cerrar menú",
    },
  },
  hero: {
    title: {
      en: "Your Little Slice of Baja",
      es: "Tu pedacito de Baja",
    },
    leaseLine: {
      en: "Furnished home for lease",
      es: "Casa amueblada en renta",
    },
    location: {
      en: "La Ahorcadita · Todos Santos\nBaja California Sur",
      es: "La Ahorcadita · Todos Santos\nBaja California Sur",
    },
    scrollCue: {
      en: "Scroll",
      es: "Desliza",
    },
  },
  welcome: {
    title: {
      en: "Off-Grid Living with Stunning Views",
      es: "Vida off-grid con vistas impresionantes",
    },
    paragraph: {
      en: "This home is fully off-grid and powered by solar. Living here means being mindful of energy and resources — and in return, you get quiet, privacy, wide-open views, and some pretty incredible sunsets over the Pacific.",
      es: "Esta casa es totalmente off-grid y funciona con energía solar. Vivir aquí implica ser consciente del uso de energía y recursos — y a cambio, disfrutas de quietud, privacidad, vistas amplias y atardeceres increíbles sobre el Pacífico.",
    },
    imageId: "welcome-outdoors",
  },
  spaces: {
    title: {
      en: "Take a Look Inside",
      es: "Mira adentro",
    },
    intro: {
      en: "Fully furnished with a large kitchen, dedicated office and TV room, private laundry, and plenty of storage.",
      es: "Materiales sencillos, aperturas generosas y espacios que fluyen de la sombra al sol.",
    },
    items: [
      {
        id: "kitchen",
        name: { en: "Kitchen", es: "Cocina" },
        imageId: "space-kitchen",
      },
      {
        id: "bedroom",
        name: { en: "Bedroom", es: "Recámara" },
        imageId: "space-bedroom",
      },
      {
        id: "living",
        name: { en: "Office & TV Room", es: "Oficina y sala de TV" },
        imageId: "space-living",
      },
      {
        id: "bathroom",
        name: { en: "Bathroom", es: "Baño" },
        imageId: "space-bathroom",
      },
      {
        id: "pantry",
        name: { en: "Pantry", es: "Despensa" },
        imageId: "space-pantry",
      },
      {
        id: "outdoors",
        name: { en: "Covered Patio", es: "Patio cubierto" },
        imageId: "space-outdoors",
      },
      {
        id: "terrace",
        name: { en: "Rooftop Terrace", es: "Terraza en azotea" },
        imageId: "space-terrace",
      },
    ],
  },
  amenities: {
    title: {
      en: "The Details",
      es: "Los detalles",
    },
    locationLabel: {
      en: "La Ahorcadita · Todos Santos",
      es: "La Ahorcadita · Todos Santos",
    },
    groups: [
      {
        id: "interior",
        title: { en: "Inside the Home", es: "Dentro de la casa" },
        items: [
          { id: "furnished", label: { en: "Fully furnished", es: "Totalmente amueblada" } },
          { id: "bedroom", label: { en: "1 bedroom with floor-to-ceiling closets", es: "1 recámara con clósets de piso a techo" } },
          { id: "tv-office", label: { en: "TV room/office with built-in desk, TV, and floor-to-ceiling closet", es: "Sala de TV / oficina con escritorio, TV y clóset de piso a techo" } },
          { id: "bathroom", label: { en: "1 bathroom", es: "1 baño" } },
          { id: "kitchen", label: { en: "Large kitchen with island & lots of cabinet space", es: "Cocina amplia con isla y mucho espacio de gabinetes" } },
          { id: "gas-stove", label: { en: "Gas stove", es: "Estufa de gas" } },
          { id: "pantry", label: { en: "Pantry", es: "Despensa" } },
          { id: "laundry", label: { en: "Laundry room with washer and dryer", es: "Cuarto de lavado con lavadora y secadora" } },
          { id: "ac", label: { en: "AC (both rooms)", es: "Aire acondicionado (en ambos cuartos)" } },
          { id: "fans", label: { en: "Ceiling fans", es: "Ventiladores de techo" } },
          { id: "water-heater", label: { en: "On-demand gas water heater", es: "Calentador de gas instantáneo" } },
          { id: "starlink", label: { en: "Starlink internet", es: "Internet Starlink" } },
        ],
      },
      {
        id: "property",
        title: { en: "The Property", es: "La propiedad" },
        items: [
          { id: "fenced", label: { en: "Fully fenced property (1000 m2)", es: "Propiedad totalmente cercada (1000 m2)" } },
          { id: "landscaped", label: { en: "Professionally landscaped", es: "Jardinería profesional" } },
          { id: "parking", label: { en: "Secure parking inside the property", es: "Estacionamiento seguro dentro de la propiedad" } },
          { id: "terrace", label: { en: "Covered terrace", es: "Terraza cubierta" } },
          { id: "rooftop", label: { en: "Covered rooftop with 360° views", es: "Azotea cubierta con vistas 360°" } },
          { id: "ocean-views", label: { en: "Ocean & mountain views", es: "Vistas al mar y a las montañas" } },
          { id: "sunsets", label: { en: "Beautiful sunsets over the Pacific", es: "Atardeceres hermosos sobre el Pacífico" } },
          { id: "lime-trees", label: { en: "Lime trees", es: "Árboles de limón" } },
          { id: "herb-garden", label: { en: "Herb garden", es: "Huerto de hierbas" } },
          { id: "irrigation", label: { en: "Irrigation system", es: "Sistema de riego" } },
        ],
      },
      {
        id: "off-grid",
        title: { en: "Off-Grid Features", es: "Características off-grid" },
        items: [
          { id: "solar", label: { en: "Fully off-grid solar power", es: "Energía solar totalmente off-grid" } },
          { id: "greywater", label: { en: "Greywater system that captures laundry water for reuse", es: "Sistema de aguas grises que reutiliza el agua de lavandería" } },
        ],
      },
      {
        id: "pets",
        title: { en: "Pet Policy", es: "Política de mascotas" },
        items: [
          { id: "dogs", label: { en: "Well-behaved dogs welcome (sorry, no cats)", es: "Perros bien educados son bienvenidos (lo sentimos, no gatos)" } },
        ],
      },
    ],
  },
  rental: {
    title: {
      en: "Rental Details",
      es: "Detalles de renta",
    },
    items: [
      {
        id: "available",
        label: { en: "Available", es: "Disponible" },
        value: { en: "October 1, 2026", es: "1 de octubre de 2026" },
      },
      {
        id: "minimum-term",
        label: { en: "Minimum rental period", es: "Renta mínima" },
        value: { en: "6 months", es: "6 meses" },
      },
      {
        id: "rent",
        label: { en: "Monthly rent", es: "Renta mensual" },
        value: { en: "$23,000 MXN", es: "$23,000 MXN" },
      },
      {
        id: "move-in",
        label: { en: "Move-in costs", es: "Costos de entrada" },
        value: {
          en: "One month's rent as security deposit + first month's rent",
          es: "Un mes de renta como depósito en garantía + primer mes de renta",
        },
      },
      {
        id: "occupancy",
        label: { en: "Maximum occupancy", es: "Ocupación máxima" },
        value: { en: "2 people", es: "2 personas" },
      },
      {
        id: "household-water",
        label: { en: "Household water", es: "Agua para uso doméstico" },
        value: { en: "Renter responsible", es: "A cargo del inquilino" },
      },
      {
        id: "irrigation-water",
        label: { en: "Irrigation water", es: "Agua de riego" },
        value: { en: "Included", es: "Incluida" },
      },
      {
        id: "internet",
        label: { en: "Starlink internet", es: "Internet Starlink" },
        value: { en: "Included", es: "Incluido" },
      },
      {
        id: "electricity",
        label: { en: "Electricity", es: "Electricidad" },
        value: { en: "Included (Solar)", es: "Incluida (solar)" },
      },
      {
        id: "gas",
        label: { en: "Gas", es: "Gas" },
        value: { en: "Renter responsible", es: "A cargo del inquilino" },
      },
      {
        id: "dogs",
        label: { en: "Dogs", es: "Perros" },
        value: {
          en: "Well-behaved dogs welcome (sorry, no cats)",
          es: "Perros bien educados son bienvenidos (lo sentimos, no gatos)",
        },
      },
      {
        id: "smoking",
        label: { en: "Smoking", es: "Fumar" },
        value: { en: "No smoking indoors", es: "No se permite fumar adentro" },
      },
    ],
  },
  gallery: {
    eyebrow: {
      en: "Gallery",
      es: "Galería",
    },
    title: {
      en: "Photos",
      es: "Fotos",
    },
    openPhoto: {
      en: "Open photo",
      es: "Abrir foto",
    },
  },
  contact: {
    title: {
      en: "Get in Touch",
      es: "Contáctanos",
    },
    phoneLabel: {
      en: "Phone",
      es: "Teléfono",
    },
    whatsappLabel: {
      en: "WhatsApp",
      es: "WhatsApp",
    },
  },
  footer: {
    rights: {
      en: "All rights reserved.",
      es: "Todos los derechos reservados.",
    },
  },
  language: {
    switchTo: {
      en: "Español",
      es: "English",
    },
    current: {
      en: "English",
      es: "Español",
    },
  },
};
