"use client";

import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './ice-events.module.css';

export default function ICEEventsPage() {
  const services = [
    {
      name: "Corporate Events",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Large Format Events R&R Social events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Conferences Product launches",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Seminars",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Award Ceremonies",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "VIP events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Exhibitions",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dealer and Partner Meets",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className={styles.iceEventsPage}>
      <section className={styles.contentSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <h1 className={`${styles.pageTitle} text-gradient`}>iCE Events</h1>
          </AnimateOnScroll>

          <div className={styles.contentBox}>
            <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
              <div className={styles.contentText}>
                <p className={styles.contentParagraph}>
                  When big corporates get their employees to travel; standalone trips are not the aim for sure! To combine corporate travel with corporate events- iCE Events came into being. This has been the most successful enterprise undertaken by us and we can proudly proclaim that we have hosted events across events across the length and the breadth of the world- from Hawaii to Sydney.
                </p>
                <p className={styles.contentParagraph}>
                  Major super-duper blockbusters have been delivered each time; every time, whenever, wherever. Bespoke, customized solutions to suit every requirement of our clients. After all, for us, the customers are our kings and queens and their wishes are or command.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInRight" delay={0.3}>
              <div className={styles.contentImage}>
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Corporate event planning and execution"
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

