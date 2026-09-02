export const siteConfig = {
  tagline: {
    en: "A quiet house between desert and Pacific.",
    es: "Una casa tranquila entre el desierto y el Pacífico.",
  },
  location: {
    en: "La Horcadita, Todos Santos, Baja California Sur",
    es: "La Horcadita, Todos Santos, Baja California Sur",
  },
  contact: {
    phone: "+1 845 906 9785",
    whatsappMessage: {
      en: "Hello — I'd love to learn more about your home.",
      es: "Hola — me encantaría conocer más sobre su casa.",
    },
  },
  anchors: {
    welcome: "welcome",
    spaces: "spaces",
    amenities: "amenities",
    rental: "rental",
    gallery: "gallery",
    contact: "contact",
  },
} as const;

function getPhoneDigits() {
  return siteConfig.contact.phone.replace(/\D/g, "");
}

export function getPhoneUrl() {
  return `tel:+${getPhoneDigits()}`;
}

export function getWhatsAppUrl(locale: "en" | "es") {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage[locale]);
  return `https://wa.me/${getPhoneDigits()}?text=${message}`;
}
