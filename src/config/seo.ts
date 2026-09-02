export const seo = {
  title: {
    en: "Furnished Off-Grid Home for Lease in Todos Santos | La Horcadita",
    es: "Casa off-grid amueblada en renta en Todos Santos | La Horcadita",
  },
  description: {
    en: "1-bedroom furnished home in La Horcadita, Todos Santos. Off-grid solar, Starlink, and ocean views. $23,000 MXN/month, 6-month minimum. Available October 1, 2026.",
    es: "Casa amueblada de 1 recámara en La Horcadita, Todos Santos. Solar off-grid, Starlink y vistas al océano. $23,000 MXN al mes, mínimo 6 meses. Disponible el 1 de octubre de 2026.",
  },
  keywords: [
    "Todos Santos rental",
    "furnished home for lease Baja California Sur",
    "La Horcadita",
    "off-grid solar house Todos Santos",
    "long-term rental Todos Santos",
  ],
  ogImage: {
    src: "https://elexpatinsidermexico.com/wp-content/uploads/2026/08/IMG_0136-2-scaled.jpeg",
    width: 2560,
    height: 1920,
    alt: "Covered patio of a furnished home in La Horcadita, Todos Santos, at night",
  },
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

export function getAbsoluteAssetUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${getSiteUrl()}${pathOrUrl}`;
}
