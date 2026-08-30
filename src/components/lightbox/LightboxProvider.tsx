"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Lightbox, {
  NextIcon,
  PreviousIcon,
  useController,
  useNavigationState,
} from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import {
  getImagesByFolder,
  getOrderedGalleryImages,
  type GalleryImage,
} from "@/data/gallery";
import { useLanguage } from "@/i18n/language-provider";

type LightboxContextValue = {
  openAt: (index: number) => void;
  openById: (id: string) => void;
  openCategory: (folder: string, imageId: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

function LightboxMobileNav({ locale }: { locale: "en" | "es" }) {
  const { prev, next } = useController();
  const { prevDisabled, nextDisabled } = useNavigationState();

  return (
    <div className="lightbox-mobile-nav">
      <button
        type="button"
        className="lightbox-mobile-nav__btn"
        aria-label={locale === "es" ? "Anterior" : "Previous"}
        onClick={prev}
        disabled={prevDisabled}
      >
        <PreviousIcon />
      </button>
      <button
        type="button"
        className="lightbox-mobile-nav__btn"
        aria-label={locale === "es" ? "Siguiente" : "Next"}
        onClick={next}
        disabled={nextDisabled}
      >
        <NextIcon />
      </button>
    </div>
  );
}

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
  const allImages = useMemo(() => getOrderedGalleryImages(), []);
  const [activeImages, setActiveImages] = useState(allImages);

  const allSlides = useMemo(() => toSlides(allImages, locale), [allImages, locale]);

  const slides = useMemo(
    () => toSlides(activeImages, locale),
    [activeImages, locale],
  );

  const openAt = useCallback((nextIndex: number) => {
    setActiveImages(allImages);
    setIndex(nextIndex);
  }, [allImages]);

  const openById = useCallback((id: string) => {
    const nextIndex = allImages.findIndex((image) => image.id === id);
    if (nextIndex >= 0) {
      setActiveImages(allImages);
      setIndex(nextIndex);
    }
  }, [allImages]);

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
        render={{
          controls: () => <LightboxMobileNav locale={locale} />,
        }}
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
