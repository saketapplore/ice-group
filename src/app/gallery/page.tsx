"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// All unique webp images from the images folder (excluding duplicates like "37 (1).webp")
const webpImageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

const galleryImages = webpImageNumbers.map((num, index) => ({
  id: index + 1,
  src: `/images/${num}.webp`,
  alt: `Event gallery image ${num}`,
  caption: "Event Gallery",
}));

// Shuffle and distribute images across 5 carousels using round-robin
// This ensures all images are used and distributed evenly
const carouselGroups: typeof galleryImages[] = [[], [], [], [], []];
galleryImages.forEach((image, index) => {
  carouselGroups[index % 5].push(image);
});

function GalleryCarousel({ images, carouselIndex }: { images: typeof galleryImages; carouselIndex: number }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Group images into sets of 5, ensuring each set has 5 different images
  const imagesPerSet = 5;
  const imageSets: typeof galleryImages[] = [];
  
  // Create sets of 5 different images
  for (let i = 0; i < images.length; i += imagesPerSet) {
    const set = images.slice(i, i + imagesPerSet);
    // Only add sets that have at least 5 different images
    if (set.length === imagesPerSet) {
      imageSets.push(set);
    }
  }
  
  // If we have leftover images, create additional sets by cycling through
  const remainingImages = images.length % imagesPerSet;
  if (remainingImages > 0 && imageSets.length > 0) {
    const lastSet = images.slice(-remainingImages);
    // Fill the last set to 5 by taking from the beginning
    const needed = imagesPerSet - remainingImages;
    for (let i = 0; i < needed && i < images.length; i++) {
      // Avoid duplicates by checking if image is already in the set
      if (!lastSet.find(img => img.id === images[i].id)) {
        lastSet.push(images[i]);
      }
    }
    if (lastSet.length === imagesPerSet) {
      imageSets.push(lastSet);
    }
  }

  useEffect(() => {
    if (isPaused || imageSets.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % imageSets.length);
    }, 2700); // Same 2.7 seconds as hero section
    return () => clearInterval(interval);
  }, [imageSets.length, isPaused]);

  const gap = 20;

  return (
    <div 
      style={{ position: "relative", marginBottom: "40px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ 
        position: "relative", 
        width: "100%",
        height: "250px",
        display: "flex",
        gap: `${gap}px`,
      }}>
        {/* Always render 5 boxes for consistent layout */}
        {[0, 1, 2, 3, 4].map((boxIndex) => {
          const currentSet = imageSets[currentSetIndex] || [];
          const image = currentSet[boxIndex];
          
          return (
            <div
              key={`box-${boxIndex}`}
              style={{
                position: "relative",
                flex: "1 1 0",
                minWidth: 0,
                height: "250px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#111",
                border: "1px solid #222",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              {imageSets.map((imageSet, setIndex) => {
                const setImage = imageSet[boxIndex];
                if (!setImage) return null;
                
                return (
                  <div
                    key={`${setIndex}-${boxIndex}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: setIndex === currentSetIndex ? 1 : 0,
                      transition: "opacity 1.2s ease-in-out",
                      pointerEvents: setIndex === currentSetIndex ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={setImage.src}
                      alt={setImage.alt}
                      fill
                      sizes="(max-width: 1200px) 20vw, 200px"
                      style={{ objectFit: "cover" }}
                      priority={setIndex === currentSetIndex && boxIndex < 2}
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

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #2a2a2a 50%, #1a1a1a 70%, #000000 100%)",
      minHeight: "100vh"
    }}>
      <div className="container">
        <section style={{ padding: "60px 0" }}>
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <h1 className="text-gradient" style={{ marginBottom: "20px" }}>
            Gallery
          </h1>
          <p style={{ color: "#ccc", marginBottom: "40px" }}>
            Snapshots from our recent world-class events.
          </p>
        </AnimateOnScroll>

        <div>
          {carouselGroups.map((carouselImages, index) => (
            <AnimateOnScroll key={index} animation="fadeInUp" delay={0.1 + index * 0.1}>
              <GalleryCarousel images={carouselImages} carouselIndex={index} />
            </AnimateOnScroll>
          ))}
        </div>
        </section>
      </div>
    </div>
  );
}
