"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const placeholders = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1521737604893-ff996a0ec29e?auto=format&fit=crop&w=1200&q=80",
    alt: "Corporate conference keynote with large audience",
    caption: "Corporate Conferences & Summits",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Product launch event with guests networking",
    caption: "Immersive Product Launches",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    alt: "Awards ceremony with lights and red carpet",
    caption: "Award Ceremonies & Gala Nights",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern trade show booth at exhibition",
    caption: "Exhibitions & Trade Shows",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80",
    alt: "Team enjoying incentive travel retreat by the sea",
    caption: "Incentive Travel & Retreats",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    alt: "Hybrid virtual event control room and stage",
    caption: "Virtual & Hybrid Experiences",
  },
];

export default function GalleryPage() {
  const images = placeholders;

  return (
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {images.map((image, index) => (
            <AnimateOnScroll key={image.id} animation="scaleIn" delay={0.1 + index * 0.08}>
              <figure
                style={{
                  position: "relative",
                  height: "250px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#111",
                  border: "1px solid #222",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                }}
              >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
                priority={image.id <= 2}
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "12px 14px",
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {image.caption}
              </figcaption>
            </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
