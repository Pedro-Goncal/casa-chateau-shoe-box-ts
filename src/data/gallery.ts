export type GalleryImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: Record<"en" | "es", string>;
  caption: Record<"en" | "es", string>;
  photographer: string;
  featured?: boolean;
  folder?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "space-bathroom",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0121-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "bathroom",
    alt: {
      en: "Bathroom with concrete vanity, round mirror, and green tile shower",
      es: "Baño con lavabo de concreto, espejo redondo y regadera de azulejo verde"
    },
    caption: {
      en: "Bathroom",
      es: "Baño"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "bathroom-img_0116",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0116-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "bathroom",
    alt: {
      en: "Walk-in shower with green tile and glass surround",
      es: "Regadera con azulejo verde y cancel de cristal"
    },
    caption: {
      en: "Bathroom",
      es: "Baño"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "bathroom-img_0115",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0115-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "bathroom",
    alt: {
      en: "Bathroom at Casa Chatou",
      es: "Baño en Casa Chatou"
    },
    caption: {
      en: "Bathroom",
      es: "Baño"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "space-kitchen",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0124-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "kitchen",
    alt: {
      en: "Concrete island with bar stools under pendant lights",
      es: "Isla de concreto con bancos bajo lámparas colgantes"
    },
    caption: {
      en: "Gathering around the island",
      es: "Reuniéndose en la isla"
    },
    photographer: "Casa Chatou",
    featured: true
  },
  {
    id: "kitchen-img_0123",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0123-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "kitchen",
    alt: {
      en: "Kitchen with concrete island and wood cabinetry",
      es: "Cocina con isla de concreto y carpintería de madera"
    },
    caption: {
      en: "Kitchen",
      es: "Cocina"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "kitchen-img_0127",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0127-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "kitchen",
    alt: {
      en: "Kitchen at Casa Chatou",
      es: "Cocina en Casa Chatou"
    },
    caption: {
      en: "Kitchen",
      es: "Cocina"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "kitchen-img_0130",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0130-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "kitchen",
    alt: {
      en: "Kitchen at Casa Chatou",
      es: "Cocina en Casa Chatou"
    },
    caption: {
      en: "Kitchen",
      es: "Cocina"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "space-living",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0205-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "living-room-office",
    alt: {
      en: "TV room and office with built-in desk",
      es: "Sala de TV y oficina con escritorio integrado"
    },
    caption: {
      en: "Office & TV Room",
      es: "Oficina y sala de TV"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "living-room-office-img_0207",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0207-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "living-room-office",
    alt: {
      en: "Office and TV room at Casa Chatou",
      es: "Oficina y sala de TV en Casa Chatou"
    },
    caption: {
      en: "Office & TV Room",
      es: "Oficina y sala de TV"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "living-room-office-img_0210",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0210-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "living-room-office",
    alt: {
      en: "Office and TV room at Casa Chatou",
      es: "Oficina y sala de TV en Casa Chatou"
    },
    caption: {
      en: "Office & TV Room",
      es: "Oficina y sala de TV"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "living-room-office-img_0211",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0211-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "living-room-office",
    alt: {
      en: "Office and TV room at Casa Chatou",
      es: "Oficina y sala de TV en Casa Chatou"
    },
    caption: {
      en: "Office & TV Room",
      es: "Oficina y sala de TV"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "space-bedroom",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0107-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "master-bedroom",
    alt: {
      en: "Bedroom with floor-to-ceiling closets",
      es: "Recámara con clósets de piso a techo"
    },
    caption: {
      en: "Bedroom",
      es: "Recámara"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "master-bedroom-img_0111",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0111-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "master-bedroom",
    alt: {
      en: "Bedroom at Casa Chatou",
      es: "Recámara en Casa Chatou"
    },
    caption: {
      en: "Bedroom",
      es: "Recámara"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "master-bedroom-img_0105",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0105-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "master-bedroom",
    alt: {
      en: "Bed facing sliding doors that open onto the patio and desert",
      es: "Cama frente a puertas corredizas que abren al patio y al desierto"
    },
    caption: {
      en: "Bedroom",
      es: "Recámara"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "hero-main",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0136-2-scaled.jpeg",
    width: 2560,
    height: 1920,
    alt: {
      en: "Casa Chatou exterior at night with lit patio and kitchen",
      es: "Exterior de Casa Chatou de noche con patio iluminado y cocina"
    },
    caption: {
      en: "Casa Chatou at night",
      es: "Casa Chatou de noche"
    },
    photographer: "Casa Chatou",
    featured: true
  },
  {
    id: "welcome-outdoors",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0250-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "outdoors",
    alt: {
      en: "Covered patio with bamboo ceiling looking out to the Pacific at golden hour",
      es: "Patio cubierto con techo de bambú con vista al Pacífico a la hora dorada"
    },
    caption: {
      en: "Golden hour at home",
      es: "Hora dorada en casa"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "outdoors-img_0264",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0264-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "outdoors",
    alt: {
      en: "Outdoor patio at Casa Chatou",
      es: "Patio exterior en Casa Chatou"
    },
    caption: {
      en: "Outdoor patio",
      es: "Patio exterior"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "outdoors-img_0271",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0271-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "outdoors",
    alt: {
      en: "Outdoor patio at Casa Chatou",
      es: "Patio exterior en Casa Chatou"
    },
    caption: {
      en: "Outdoor patio",
      es: "Patio exterior"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "space-outdoors",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_8983-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "outdoors",
    alt: {
      en: "Woven patio furniture under the covered terrace with desert views",
      es: "Muebles de mimbre en la terraza cubierta con vista al desierto"
    },
    caption: {
      en: "Evenings on the patio",
      es: "Tardes en el patio"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "outdoors-img_0255",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0255-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "outdoors",
    alt: {
      en: "Outdoor patio at Casa Chatou",
      es: "Patio exterior en Casa Chatou"
    },
    caption: {
      en: "Outdoor patio",
      es: "Patio exterior"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "outdoors-img_20260613_073020",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_20260613_073020-scaled.jpg",
    width: 2560,
    height: 1635,
    folder: "outdoors",
    alt: {
      en: "Exterior of the house with shade sails and rooftop pergola",
      es: "Exterior de la casa con velas de sombra y pérgola en la azotea"
    },
    caption: {
      en: "The house from outside",
      es: "La casa desde afuera"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "space-pantry",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0220-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "pantry",
    alt: {
      en: "Pantry storage",
      es: "Despensa"
    },
    caption: {
      en: "Pantry",
      es: "Despensa"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "sunset-img_7858",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_7858-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "sunset",
    alt: {
      en: "Red and orange sunset burning across the sky over the Pacific",
      es: "Atardecer rojo y naranja encendido sobre el Pacífico"
    },
    caption: {
      en: "Sunset",
      es: "Atardecer"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "sunset-img_9050",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_9050-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "sunset",
    alt: {
      en: "Sun setting behind mackerel clouds over the desert",
      es: "Sol ocultándose entre nubes onduladas sobre el desierto"
    },
    caption: {
      en: "Sunset",
      es: "Atardecer"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "sunset-img_9979",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_9979-scaled.jpeg",
    width: 1920,
    height: 2560,
    folder: "sunset",
    alt: {
      en: "Orange sun dropping into the Pacific beyond the desert",
      es: "Sol naranja cayendo en el Pacífico más allá del desierto"
    },
    caption: {
      en: "Sunset",
      es: "Atardecer"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "sunset-img_20260108_175531",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_20260108_175531-scaled.jpg",
    width: 2560,
    height: 1920,
    folder: "sunset",
    alt: {
      en: "Sunset at Casa Chatou",
      es: "Atardecer en Casa Chatou"
    },
    caption: {
      en: "Sunset",
      es: "Atardecer"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "space-terrace",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0270-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "terrace",
    alt: {
      en: "Rooftop terrace with ocean and mountain views",
      es: "Terraza con vista al mar y montañas"
    },
    caption: {
      en: "Views from above",
      es: "Vistas desde arriba"
    },
    photographer: "Casa Chatou",
    featured: true
  },
  {
    id: "terrace-img_0269",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0269-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "terrace",
    alt: {
      en: "Rooftop terrace at Casa Chatou",
      es: "Terraza en azotea en Casa Chatou"
    },
    caption: {
      en: "Rooftop Terrace",
      es: "Terraza en azotea"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "terrace-img_0268",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0268-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "terrace",
    alt: {
      en: "Rooftop terrace at Casa Chatou",
      es: "Terraza en azotea en Casa Chatou"
    },
    caption: {
      en: "Rooftop Terrace",
      es: "Terraza en azotea"
    },
    photographer: "Casa Chatou"
  },
  {
    id: "terrace-img_0244",
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0244-scaled.jpeg",
    width: 2560,
    height: 1920,
    folder: "terrace",
    alt: {
      en: "Rooftop terrace with ocean and mountain views",
      es: "Terraza con vista al mar y montañas"
    },
    caption: {
      en: "Rooftop Terrace",
      es: "Terraza en azotea"
    },
    photographer: "Casa Chatou"
  }
];

export const galleryGroups: {
  folder: string;
  label: Record<"en" | "es", string>;
}[] = [
  {
    folder: "kitchen",
    label: { en: "Kitchen", es: "Cocina" },
  },
  {
    folder: "master-bedroom",
    label: { en: "Bedroom", es: "Recámara" },
  },
  {
    folder: "living-room-office",
    label: { en: "Office & TV Room", es: "Oficina y sala de TV" },
  },
  {
    folder: "bathroom",
    label: { en: "Bathroom", es: "Baño" },
  },
  {
    folder: "pantry",
    label: { en: "Pantry", es: "Despensa" },
  },
  {
    folder: "outdoors",
    label: { en: "Covered Patio", es: "Patio cubierto" },
  },
  {
    folder: "terrace",
    label: { en: "Rooftop Terrace", es: "Terraza en azotea" },
  },
  {
    folder: "sunset",
    label: { en: "Sunsets", es: "Atardeceres" },
  },
];

export const spaceImageFolders: Record<string, string> = {
  outdoors: "outdoors",
  kitchen: "kitchen",
  living: "living-room-office",
  bedroom: "master-bedroom",
  bathroom: "bathroom",
  pantry: "pantry",
  terrace: "terrace",
};

export function getImagesByFolder(folder: string): GalleryImage[] {
  return galleryImages.filter((image) => {
    if (image.id === "hero-main") return false;
    if (image.folder) return image.folder === folder;
    return image.src.startsWith(`/images/${folder}/`);
  });
}

export function getOrderedGalleryImages(): GalleryImage[] {
  return galleryGroups.flatMap((group) => getImagesByFolder(group.folder));
}

export function getImageById(id: string): GalleryImage | undefined {
  return galleryImages.find((image) => image.id === id);
}

export function getImageIndexById(id: string): number {
  return galleryImages.findIndex((image) => image.id === id);
}
