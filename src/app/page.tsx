"use client";

import { useEffect, useState, useRef } from "react";
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import Image from "next/image";
import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from './page.module.css';

function CountUpNumber({ target, duration = 3000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;
            const startValue = 0;
            const endValue = target;

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              
              // Smooth easing function (easeOutCubic)
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
              
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return <div ref={elementRef}>{count}+</div>;
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "I wanted to express my sincere gratitude for your exceptional support in conducting a successful budget meeting. Your team's coordination during check-in, check-out and daily agenda execution was invaluable.",
      author: "Division Head",
      company: "Leading Healthcare & Pharma organization"
    },
    {
      text: "Flawless execution and seamless coordination - the ICE team made our Annual Meet a huge success. Despite last-minute changes, everything was handled beautifully with professionalism and calm.",
      author: "Deputy Manager",
      company: "Leading Global Tech Foundation"
    },
    {
      text: "The Thailand incentive was a perfect blend of adventure, relaxation, and impeccable arrangements. From travel to stay to on-ground experiences - everything was 10/10. Truly memorable.",
      author: "Regional Partner",
      company: "BFSI sector"
    },
    {
      text: "Thank you to the entire ICE team for delivering outstanding services and making our global conference in Budapest a success. We have received immensely positive feedback on every aspect.",
      author: "Senior Business Leader",
      company: "Global Pharma conglomerate"
    },
    {
      text: "Your team's support and coordination made our internal meet an absolute success. Grateful for your proactive approach and seamless execution.",
      author: "Division Head",
      company: "FMCG & Consumer Business Unit"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials.slice(0, 2)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= testimonials.length ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const cardWidth = 259;
  const gap = 20;
  const translateX = currentIndex * (cardWidth + gap);

  return (
    <div className={styles.testimonialCarousel}>
      <div className={styles.testimonialTrack} style={{ transform: `translateX(-${translateX}px)` }}>
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAuthorName}>{testimonial.author}</div>
                <div className={styles.testimonialCompany}>{testimonial.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.testimonialNavigation}>
        <button
          className={styles.testimonialArrow}
          onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className={styles.testimonialArrow}
          onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const heroVideo =
    "https://cdn.coverr.co/videos/coverr-business-team-in-a-meeting-1574/1080p.mp4";

  const events = [
    {
      title: "Ramadan Festival 2026",
      date: "February 18, 2026",
      status: "Upcoming",
      image: "/images/1.webp",
    },
    {
      title: "Champions League Night",
      date: "May 12, 2025",
      status: "Happening Now",
      image: "/images/2.webp",
    },
    {
      title: "Future Stars Track Meet",
      date: "June 02, 2025",
      status: "Upcoming",
      image: "/images/3.webp",
    },
    {
      title: "Night Run Festival",
      date: "August 20, 2025",
      status: "Upcoming",
      image: "/images/4.webp",
    },
  ];

  const services = [
    {
      title: "Corporate MICE",
      description: "End-to-end MICE solutions from corporate events and conferences to incentive programs and exhibitions.",
      image: "/images/5.webp",
    },
    {
      title: "Travel & Tours",
      description: "Comprehensive travel management including flight bookings, itinerary planning, and package tours to destinations worldwide.",
      image: "/images/6.webp",
    },
    {
      title: "Conferences & Summits",
      description: "Large-scale conferences managed with precision, from venue selection to keynote speaker management.",
      image: "/images/7.webp",
    },
    {
      title: "Travel Services",
      description: "Flight bookings, travel insurance, VISAs, cruise lines, VIP airport lounge access, and fleet management.",
      image: "/images/8.webp",
    },
    {
      title: "Exhibitions & Trade Shows",
      description: "Stand out on the trade floor with innovative booth designs and interactive attendee engagement strategies.",
      image: "/images/9.webp",
    },
    {
      title: "Expeditions & Excursions",
      description: "Curated expeditions and excursions to exotic destinations, creating unforgettable travel experiences.",
      image: "/images/10.webp",
    },
  ];

  const valueProps = [
    { title: "End-to-End Delivery", description: "From event strategy to travel planning, we handle every detail with precision and care." },
    { title: "Global Travel Expertise", description: "11 years of experience managing travel, tours, and experiences to all parts of the world." },
    { title: "Comprehensive MICE Solutions", description: "Events, conferences, exhibitions, and travel services all under one roof." },
    { title: "Customer Delight", description: "A vast portfolio of satisfied clients across industries and geographies." },
  ];


  return (
    <main>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.heroBadge}>Events & MICE</div>
              <h1 className={styles.heroTitle}>Events that are as unique as you are</h1>
              <p className={styles.heroSubtitle}>
                ICE Group crafts experiences that move people. From corporate events to global travel, we deliver comprehensive MICE solutions that connect audiences with ideas.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.planExperienceBox}>
                  Plan your experience →
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <HeroOrb />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.clientsSection}>
        <div className="container">
          <div className={styles.clientsContainer}>
            <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
              <div className={styles.clientsContent}>
                <h2 className={styles.clientsTitle}>
                  <span className="text-gradient">Our Clients</span>
                </h2>
                <p className={styles.clientsDescription}>
                  We&apos;ve had the privilege of working with some of the most prominent brands, delivering exceptional MICE solutions and travel experiences that exceed expectations.
                </p>
              </div>
            </AnimateOnScroll>
            <div className={styles.clientsLogosWrapper}>
              <div className={styles.clientsColumn}>
                <div className={styles.clientsTrack}>
                  {[
                    { name: "USHA", logo: "/images/USHA.png" },
                    { name: "Unilever", logo: "/images/uniliver.jpg" },
                    { name: "BAJAJ Allianz", logo: "/images/Bajaj.png" },
                  ].map((client, index) => (
                    <div key={`${client.name}-${index}`} className={styles.clientLogoCard}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className={styles.clientLogoImage}
                        sizes="180px"
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless scrolling */}
                  {[
                    { name: "USHA", logo: "/images/USHA.png" },
                    { name: "Unilever", logo: "/images/uniliver.jpg" },
                    { name: "BAJAJ Allianz", logo: "/images/Bajaj.png" },
                  ].map((client, index) => (
                    <div key={`${client.name}-dup1-${index}`} className={styles.clientLogoCard}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className={styles.clientLogoImage}
                        sizes="180px"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.clientsColumn}>
                <div className={`${styles.clientsTrack} ${styles.clientsTrackReverse}`}>
                  {[
                    { name: "Glenmark", logo: "/images/Glenmark.png" },
                    { name: "ONGC", logo: "/images/ONGC.png" },
                    { name: "Tech Mahindra", logo: "/images/tech mahindra.png" },
                  ].map((client, index) => (
                    <div key={`${client.name}-${index}`} className={styles.clientLogoCard}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className={styles.clientLogoImage}
                        sizes="180px"
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless scrolling */}
                  {[
                    { name: "Glenmark", logo: "/images/Glenmark.png" },
                    { name: "ONGC", logo: "/images/ONGC.png" },
                    { name: "Tech Mahindra", logo: "/images/tech mahindra.png" },
                  ].map((client, index) => (
                    <div key={`${client.name}-dup2-${index}`} className={styles.clientLogoCard}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className={styles.clientLogoImage}
                        sizes="180px"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.clientsColumn}>
                <div className={styles.clientsTrack}>
                  {[
                    { name: "PNB MetLife", logo: "/images/PNB.png" },
                    { name: "SHRIRAM General Insurance", logo: "/images/s.png" },
                    { name: "Abbott", logo: "/images/abbott.png" },
                  ].map((client, index) => (
                    <div key={`${client.name}-${index}`} className={styles.clientLogoCard}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className={styles.clientLogoImage}
                        sizes="180px"
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless scrolling */}
                  {[
                    { name: "PNB MetLife", logo: "/images/PNB.png" },
                    { name: "SHRIRAM General Insurance", logo: "/images/s.png" },
                    { name: "Abbott", logo: "/images/abbott.png" },
                  ].map((client, index) => (
                    <div key={`${client.name}-dup3-${index}`} className={styles.clientLogoCard}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className={styles.clientLogoImage}
                        sizes="180px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className={styles.eventsSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className="text-gradient">Events</span></h2>
              <p className={styles.sectionSubtitle}>Glimpse into our past events</p>
            </div>
          </AnimateOnScroll>
          <div className={styles.eventGrid}>
            {events.map((event, index) => (
              <AnimateOnScroll key={event.title} animation="fadeInUp" delay={0.1 + index * 0.1}>
                <div className={styles.eventCard}>
                <div className={styles.eventImageWrap}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className={styles.eventStatus}>{event.status}</span>
                </div>
                <div className={styles.eventBody}>
                  <p className={styles.muted}>{event.date}</p>
                  <h3>{event.title}</h3>
                  <p className={styles.textLink}>Featured event</p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={3000} />
                </div>
                <div className={styles.statLabel}>Domestic MICE</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.2}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={950} />
                </div>
                <div className={styles.statLabel}>International MICE</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.3}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={1000} />
                </div>
                <div className={styles.statLabel}>Events</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.4}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={550} />
                </div>
                <div className={styles.statLabel}>Conferences</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introLayout}>
              <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
                <div className={styles.introImageBox}>
                  <div className={styles.introImage}>
                    <Image
                      src="/images/11.webp"
                      alt="MICE solutions and corporate events"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={0.2}>
                <div>
                  <p className={styles.kicker}><span className="text-gradient">Welcome</span></p>
                  <h2>Experiences that move people and brands forward.</h2>
                  <p className={styles.muted}>
                    We design and deliver comprehensive MICE solutions—from corporate events and conferences to incentive travel and global expeditions. Our teams blend strategy, creativity, and precise execution to make every moment memorable. Whether it&apos;s planning your next corporate gathering or orchestrating travel experiences across the world, we ensure customer delight at every step.
                  </p>
                  <div className={styles.inlineActions}>
                    <Link href="/contact" className={styles.planExperienceBox}>
                      Plan Your Experience
                    </Link>
                    <Link href="/about" className={styles.learnMoreBox}>
                      Learn about our approach
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Expertise</span></h2>
              <p className={styles.sectionSubtitle}>Comprehensive MICE solutions tailored to your business goals.</p>
            </div>
          </AnimateOnScroll>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} animation="fadeInUp" delay={0.1 + index * 0.08}>
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} text-gradient`}>Testimonials</h2>
              <p className={styles.sectionSubtitle}>Discover what our satisfied clients have to say about their experiences with our services.</p>
            </div>
          </AnimateOnScroll>
          <TestimonialCarousel />
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}><span className="text-gradient">Why Choose Us</span></p>
            </div>
          </AnimateOnScroll>
          <div className={styles.valueGrid}>
            {valueProps.map((item, index) => (
              <AnimateOnScroll key={item.title} animation="fadeInUp" delay={0.1 + index * 0.1}>
                <div className={styles.valueCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <AnimateOnScroll animation="scaleIn" delay={0.1}>
            <div className={styles.ctaCard}>
              <div>
                <h2><span className="text-gradient">Ready to plan your next event?</span></h2>
                <p className={styles.muted}>Tell us your objectives and we&apos;ll design an experience—whether it&apos;s an event or a travel journey—that exceeds expectations.</p>
              </div>
              <Link href="/contact" className={styles.planExperienceBox}>
                Talk to Our Team
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
