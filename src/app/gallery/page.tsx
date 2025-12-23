"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "./page.module.css";

// All unique webp images from the images folder (excluding duplicates like "37 (1).webp")
const webpImageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

const galleryImages = webpImageNumbers.map((num, index) => ({
  id: index + 1,
  src: `/images/${num}.webp`,
  alt: `Event gallery image ${num}`,
  caption: "Event Gallery",
}));

// Create sets of 20 images for the 4x5 grid (4 columns, 5 rows)
const imagesPerSet = 20;
const imageSets: typeof galleryImages[] = [];

for (let i = 0; i < galleryImages.length; i += imagesPerSet) {
  const set = galleryImages.slice(i, i + imagesPerSet);
  if (set.length === imagesPerSet) {
    imageSets.push(set);
  }
}

// If there are leftover images, fill the last set
if (galleryImages.length % imagesPerSet !== 0) {
  const remaining = galleryImages.slice(-(galleryImages.length % imagesPerSet));
  const needed = imagesPerSet - remaining.length;
  for (let i = 0; i < needed && i < galleryImages.length; i++) {
    if (!remaining.find(img => img.id === galleryImages[i].id)) {
      remaining.push(galleryImages[i]);
    }
  }
  // Always add the remaining set, even if it's not exactly imagesPerSet
  // This ensures all images are displayed
  imageSets.push(remaining);
}

function GalleryGrid({ onImageClick }: { onImageClick: (image: typeof galleryImages[0]) => void }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || imageSets.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % imageSets.length);
    }, 4000); // Change set every 4 seconds
    return () => clearInterval(interval);
  }, [imageSets.length, isPaused]);

  const currentSet = imageSets[currentSetIndex] || [];

  return (
    <div 
      className={styles.galleryGridContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.galleryGrid}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((gridIndex) => {
          const image = currentSet[gridIndex];
          
          return (
            <div
              key={`grid-${gridIndex}`}
              className={styles.galleryGridItem}
            >
              {imageSets.map((imageSet, setIndex) => {
                const setImage = imageSet[gridIndex];
                if (!setImage) return null;
                
                return (
                  <div
                    key={`${setIndex}-${gridIndex}`}
                    className={styles.galleryImageWrapper}
                    style={{
                      opacity: setIndex === currentSetIndex ? 1 : 0,
                      transition: "opacity 1.2s ease-in-out",
                      pointerEvents: setIndex === currentSetIndex ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={setImage.src}
                      alt={setImage.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{ objectFit: "cover" }}
                      priority={setIndex === currentSetIndex && gridIndex < 2}
                      onClick={() => onImageClick(setImage)}
                      className={styles.galleryImage}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className={styles.galleryPage}>
      <div className="container">
        <section className={styles.gallerySection}>
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <h1 className={`text-gradient ${styles.galleryTitle}`}>
            Gallery
          </h1>
          <p className={styles.galleryDescription}>
            Snapshots from our recent world-class events.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={0.2}>
          <GalleryGrid onImageClick={handleImageClick} />
        </AnimateOnScroll>
        </section>
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={closeModal}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close">
              ×
            </button>
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={800}
                sizes="(max-width: 768px) 90vw, (max-width: 480px) 95vw, 800px"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
