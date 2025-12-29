"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ---------- images logic unchanged ---------- */
const webpImageNumbers = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];

const galleryImages = webpImageNumbers.map((num, index) => ({
  id: index + 1,
  src: `/images/${num}.webp`,
  alt: `Event gallery image ${num}`,
}));

const imagesPerSet = 20;
const imageSets: typeof galleryImages[] = [];

for (let i = 0; i < galleryImages.length; i += imagesPerSet) {
  imageSets.push(galleryImages.slice(i, i + imagesPerSet));
}

/* ---------- GRID ---------- */
function GalleryGrid({ onImageClick }: { onImageClick: (img: typeof galleryImages[0]) => void }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(
      () => setCurrentSetIndex((p) => (p + 1) % imageSets.length),
      4000
    );
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {Array.from({ length: 20 }).map((_, gridIndex) => (
          <div
            key={gridIndex}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#111]"
          >
            {imageSets.map((set, setIndex) => {
              const img = set[gridIndex];
              if (!img) return null;

              return (
                <div
                  key={`${setIndex}-${gridIndex}`}
                  className="absolute inset-0 transition-opacity duration-[1200ms]"
                  style={{
                    opacity: setIndex === currentSetIndex ? 1 : 0,
                    pointerEvents: setIndex === currentSetIndex ? "auto" : "none",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => onImageClick(img)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- PAGE ---------- */
export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex((i) => (i! - 1 + galleryImages.length) % galleryImages.length);

  const nextImage = () =>
    setSelectedIndex((i) => (i! + 1) % galleryImages.length);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    if (selectedIndex !== null) {
      document.addEventListener("keydown", keyHandler);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", keyHandler);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#000_0%,#1a1a1a_30%,#2a2a2a_50%,#1a1a1a_70%,#000_100%)]">
      <div className="container mx-auto px-4">
        <section className="py-[130px]">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <h1 className="text-gradient text-4xl mb-4">Gallery</h1>
            <p className="text-[#ccc]">Snapshots from our recent world-class events.</p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <GalleryGrid
              onImageClick={(img) =>
                setSelectedIndex(galleryImages.findIndex((i) => i.src === img.src))
              }
            />
          </AnimateOnScroll>
        </section>
      </div>

      {/* ---------- MODAL ---------- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[10000] px-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[80vw] max-h-[80vh] pt-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-12 left-1/2 -translate-x-1/2
              w-12 h-12 rounded-full text-white text-3xl
              bg-white/10 border border-white/30
              hover:bg-white/20 transition"
            >
              ×
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2
              text-white text-4xl opacity-70 hover:opacity-100"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2
              text-white text-4xl opacity-70 hover:opacity-100"
            >
              ›
            </button>

            <div className="relative w-[800px] max-w-[80vw] max-h-[80vh]">
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                width={800}
                height={800}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
