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

// Split images into 5 groups
const imagesPerCarousel = Math.ceil(galleryImages.length / 5);
const carouselGroups: typeof galleryImages[] = [];
for (let i = 0; i < 5; i++) {
  carouselGroups.push(galleryImages.slice(i * imagesPerCarousel, (i + 1) * imagesPerCarousel));
}

function GalleryCarousel({ images, carouselIndex }: { images: typeof galleryImages; carouselIndex: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const cardWidth = 300;
  const gap = 20;
  const translateX = currentIndex * (cardWidth + gap);

  // Duplicate images for seamless infinite loop - start from middle set
  const duplicatedImages = [...images, ...images, ...images];
  const startOffset = images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div 
      style={{ position: "relative", marginBottom: "40px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
        <div
          style={{
            display: "flex",
            transition: isFlipping ? "none" : "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(-${startOffset * (cardWidth + gap) + translateX}px)`,
            gap: `${gap}px`,
            width: "fit-content",
          }}
        >
          {duplicatedImages.map((image, index) => {
            const relativeIndex = index % images.length;
            const isFirstVisible = index === startOffset + currentIndex;
            const nextImage = images[nextIndex];
            
            return (
              <div
                key={`${image.id}-${index}`}
                style={{
                  position: "relative",
                  width: `${cardWidth}px`,
                  height: "250px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#111",
                  border: "1px solid #222",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                onMouseEnter={(e) => {
                  if (!isFlipping || !isFirstVisible) {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isFlipping || !isFirstVisible) {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                  }
                }}
              >
                {/* Front face - current image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: isFirstVisible && isFlipping ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.6s ease-in-out",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover" }}
                    priority={index >= startOffset && index < startOffset + 3}
                  />
                </div>
                
                {/* Back face - next image (only for first visible card) */}
                {isFirstVisible && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: isFlipping ? "rotateY(0deg)" : "rotateY(180deg)",
                      transition: "transform 0.6s ease-in-out",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <Image
                      src={nextImage.src}
                      alt={nextImage.alt}
                      fill
                      sizes="300px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
            Event Gallery
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
