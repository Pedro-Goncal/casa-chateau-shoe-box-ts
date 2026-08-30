"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import {
  galleryImages,
  getImagesByFolder,
  type GalleryImage,
} from "@/data/gallery";
import { useLanguage } from "@/i18n/language-provider";

type LightboxContextValue = {
  openAt: (index: number) => void;
  openById: (id: string) => void;
  openCategory: (folder: string, imageId: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

function toSlides(images: GalleryImage[], locale: "en" | "es") {
  return images.map((image) => ({
    src: image.src,
    alt: image.alt[locale],
    description: image.caption[locale],
    width: image.width,
    height: image.height,
  }));
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const [index, setIndex] = useState(-1);
  const [activeImages, setActiveImages] = useState(galleryImages);

  const allSlides = useMemo(
    () => toSlides(galleryImages, locale),
    [locale],
  );

  const slides = useMemo(
    () => toSlides(activeImages, locale),
    [activeImages, locale],
  );

  const openAt = useCallback((nextIndex: number) => {
    setActiveImages(galleryImages);
    setIndex(nextIndex);
  }, []);

  const openById = useCallback((id: string) => {
    const nextIndex = galleryImages.findIndex((image) => image.id === id);
    if (nextIndex >= 0) {
      setActiveImages(galleryImages);
      setIndex(nextIndex);
    }
  }, []);

  const openCategory = useCallback((folder: string, imageId: string) => {
    const filtered = getImagesByFolder(folder);
    if (filtered.length === 0) return;

    const startIndex = filtered.findIndex((image) => image.id === imageId);
    setActiveImages(filtered);
    setIndex(startIndex >= 0 ? startIndex : 0);
  }, []);

  const value = useMemo(
    () => ({ openAt, openById, openCategory }),
    [openAt, openById, openCategory],
  );

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides.length > 0 ? slides : allSlides}
        plugins={[Captions, Counter]}
        carousel={{ finite: false }}
        animation={{ fade: 320, swipe: 280 }}
        controller={{ closeOnBackdropClick: true }}
        captions={{ showToggle: false, descriptionTextAlign: "center" }}
        styles={{
          container: { backgroundColor: "rgba(247, 241, 232, 0.92)" },
        }}
      />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return context;
}
