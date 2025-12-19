"use client";

import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './services.module.css';

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate MICE",
      description: "Comprehensive MICE solutions from corporate events to incentive programs, managed with perfect aplomb.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Conferences & Summits",
      description: "From venue selection to keynote speaker management, we handle every detail of your large-scale industry gatherings.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Flight Bookings & Travel Reservations",
      description: "Seamless flight bookings and travel reservations to destinations worldwide, ensuring comfort and convenience.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel Insurance & VISAs",
      description: "Comprehensive travel insurance coverage and hassle-free VISA processing for all your travel needs.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Itinerary Planning & Package Tours",
      description: "Customized itinerary planning and curated package tours to exotic destinations, creating unforgettable experiences.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Cruise Lines",
      description: "Luxury cruise experiences with world-class amenities and exceptional service on the high seas.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Exhibitions & Trade Shows",
      description: "Design impactful booths and manage logistics for a standout presence on the trade floor.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "VIP Airport Lounge Access",
      description: "Premium airport lounge access for a comfortable and luxurious travel experience.",
      image: "https://images.unsplash.com/photo-1521737604893-ff996a0ec29e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fleet Management",
      description: "Comprehensive fleet management solutions for seamless transportation during events and travel.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Expeditions & Excursions",
      description: "Curated expeditions and excursions to explore newer geographies and locales with fun, frolic, and fanfare.",
      image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Incentive Travel Programs",
      description: "Employee motivation and reward programs with luxury retreats and exclusive travel experiences.",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Product Launches & Corporate Events",
      description: "Create buzz with immersive launch events and execute flawless corporate gatherings that reflect your brand's prestige.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className={`container ${styles.servicesPage}`}>
      <section className={styles.servicesHeader}>
        <div className={styles.headerContent}>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.headerText}>
              <h1 className="text-gradient" style={{ marginBottom: '16px' }}>Our Services</h1>
              <p style={{ color: '#ccc', maxWidth: '560px' }}>
                Comprehensive MICE solutions combining events, conferences, exhibitions, and travel services. From venue selection to global expeditions, we deliver experiences that move people and brands forward.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div className={styles.headerImage}>
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                alt="Vibrant corporate event with stage lighting"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} animation="fadeInUp" delay={0.1 + index * 0.06}>
              <article className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.hoverOverlay}>
                  <p>{service.description}</p>
                </div>
              </div>
              <div className={styles.body}>
                <h3>{service.title}</h3>
              </div>
            </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fadeInUp" delay={0.2}>
          <div className={styles.ctaSection}>
            <h2 style={{ color: 'var(--color-white)', marginBottom: '20px' }}>Need a custom solution?</h2>
            <Link href="/contact">
              <Button variant="outline">Consult Our Experts</Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

