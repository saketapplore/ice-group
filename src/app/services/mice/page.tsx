"use client";

import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './mice.module.css';

export default function MICEPage() {
  const services = [
    {
      name: "Corporate MICE",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Itinerary Planning",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "VISAs",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Flight Bookings",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Travel Reservations",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Fleet Management",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Travel Insurance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Package Tours",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Expeditions and Excursions",
      image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cruise Lines",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "VIP Airport Lounge Access",
      image: "https://images.unsplash.com/photo-1521737604893-ff996a0ec29e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className={styles.micePage}>
      <section className={styles.contentSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <h1 className={`${styles.pageTitle} text-gradient`}>MICE</h1>
          </AnimateOnScroll>

          <div className={styles.contentBox}>
            <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
              <div className={styles.contentText}>
                <p className={styles.contentParagraph}>
                  To travel is to live was the maxim that led to the establishment of the company's first vertical. Ever since, there has been no looking back. In its illustrious journey of the past 11 years, the company has managed travel, tours, journeys and experiences to all parts of the world with perfect aplomb. In our kitty, we have accumulated a vast and expansive kitty of extremely satisfied and gratified patrons. We have serviced big bigwigs across industries and geographies to the best of our ability; each time only ensuring customer delight.
                </p>
                <p className={styles.contentParagraph}>
                  We have planned and managed travel plans for our awesome clients for employee motivation and reward and recognition programs, annual general meetings, dealer meets and many more. Fun, frolic, fanfare and exploring newer geographies and locales never fails to excite anyone. And with iCE Tours and Travel; the experience is just surreal, out of the world and exotic. We guarantee you an experience; of which you will not tire of sharing anecdotes with your grandchildren and great grandchildren.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInRight" delay={0.3}>
              <div className={styles.contentImage}>
                <Image
                  src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80"
                  alt="Travel and MICE services"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <AnimateOnScroll key={service.name} animation="fadeInUp" delay={0.1 + index * 0.05}>
                <div className={styles.serviceBox}>
                  <div className={styles.serviceImage}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.serviceLabel}>
                    <h3>{service.name}</h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

