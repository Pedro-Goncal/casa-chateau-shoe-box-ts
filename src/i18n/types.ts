export type Locale = "en" | "es";

export type LocalizedString = Record<Locale, string>;

export type NavItem = {
  id: keyof typeof import("@/config/site").siteConfig.anchors;
  label: LocalizedString;
};

export type SpaceItem = {
  id: string;
  name: LocalizedString;
  imageId: string;
};

export type AmenityItem = {
  id: string;
  label: LocalizedString;
};

export type AmenityGroup = {
  id: string;
  title: LocalizedString;
  items: AmenityItem[];
};

export type RentalDetailItem = {
  id: string;
  label: LocalizedString;
  value: LocalizedString;
};

export type Translations = {
  meta: {
    title: LocalizedString;
    description: LocalizedString;
  };
  skipToContent: LocalizedString;
  nav: NavItem[];
  navMenu: {
    open: LocalizedString;
    close: LocalizedString;
  };
  hero: {
    title: LocalizedString;
    leaseLine: LocalizedString;
    location: LocalizedString;
    scrollCue: LocalizedString;
  };
  welcome: {
    title: LocalizedString;
    paragraph: LocalizedString;
    imageId: string;
  };
  spaces: {
    title: LocalizedString;
    intro: LocalizedString;
    items: SpaceItem[];
  };
  amenities: {
    title: LocalizedString;
    locationLabel: LocalizedString;
    groups: AmenityGroup[];
  };
  rental: {
    title: LocalizedString;
    items: RentalDetailItem[];
  };
  gallery: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    openPhoto: LocalizedString;
  };
  contact: {
    title: LocalizedString;
    phoneLabel: LocalizedString;
    whatsappLabel: LocalizedString;
  };
  footer: {
    rights: LocalizedString;
  };
  language: {
    switchTo: LocalizedString;
    current: LocalizedString;
  };
};
