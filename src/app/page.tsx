import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import Image from "next/image";
import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from './page.module.css';

export default function Home() {
  const heroVideo =
    "https://cdn.coverr.co/videos/coverr-business-team-in-a-meeting-1574/1080p.mp4";

  const events = [
    {
      title: "Ramadan Festival 2026",
      date: "February 18, 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1521737604893-ff996a0ec29e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Champions League Night",
      date: "May 12, 2025",
      status: "Happening Now",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Future Stars Track Meet",
      date: "June 02, 2025",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Night Run Festival",
      date: "August 20, 2025",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const services = [
    {
      title: "Corporate MICE",
      description: "End-to-end MICE solutions from corporate events and conferences to incentive programs and exhibitions.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel & Tours",
      description: "Comprehensive travel management including flight bookings, itinerary planning, and package tours to destinations worldwide.",
      image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Conferences & Summits",
      description: "Large-scale conferences managed with precision, from venue selection to keynote speaker management.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel Services",
      description: "Flight bookings, travel insurance, VISAs, cruise lines, VIP airport lounge access, and fleet management.",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Exhibitions & Trade Shows",
      description: "Stand out on the trade floor with innovative booth designs and interactive attendee engagement strategies.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Expeditions & Excursions",
      description: "Curated expeditions and excursions to exotic destinations, creating unforgettable travel experiences.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
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
              <h1 className={styles.heroTitle}>High-impact experiences, delivered with precision</h1>
              <p className={styles.heroSubtitle}>
                ICE Group crafts experiences that move people. From corporate events to global travel, we deliver comprehensive MICE solutions that connect audiences with ideas.
              </p>
              <div className={styles.heroActions}>
                <Link href="#events">
                  <Button variant="primary">View Our Services</Button>
                </Link>
                <Link href="/contact" className={styles.textLink}>
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
                  Trusted by <span className="text-gradient">industry leaders</span> across sectors
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
                    { name: "Glenmark", logo: "/images/Glenmark.png" },
                    { name: "ONGC", logo: "/images/ONGC.png" },
                    { name: "Tech Mahindra", logo: "/images/tech mahindra.png" },
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
                    { name: "USHA", logo: "/images/USHA.png" },
                    { name: "Unilever", logo: "/images/uniliver.jpg" },
                    { name: "BAJAJ Allianz", logo: "/images/Bajaj.png" },
                    { name: "Glenmark", logo: "/images/Glenmark.png" },
                    { name: "ONGC", logo: "/images/ONGC.png" },
                    { name: "Tech Mahindra", logo: "/images/tech mahindra.png" },
                    { name: "PNB MetLife", logo: "/images/PNB.png" },
                    { name: "SHRIRAM General Insurance", logo: "/images/s.png" },
                    { name: "Abbott", logo: "/images/abbott.png" },
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
                    { name: "USHA", logo: "/images/USHA.png" },
                    { name: "Unilever", logo: "/images/uniliver.jpg" },
                    { name: "BAJAJ Allianz", logo: "/images/Bajaj.png" },
                    { name: "Glenmark", logo: "/images/Glenmark.png" },
                    { name: "ONGC", logo: "/images/ONGC.png" },
                    { name: "Tech Mahindra", logo: "/images/tech mahindra.png" },
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
                    { name: "USHA", logo: "/images/USHA.png" },
                    { name: "Unilever", logo: "/images/uniliver.jpg" },
                    { name: "BAJAJ Allianz", logo: "/images/Bajaj.png" },
                    { name: "Glenmark", logo: "/images/Glenmark.png" },
                    { name: "ONGC", logo: "/images/ONGC.png" },
                    { name: "Tech Mahindra", logo: "/images/tech mahindra.png" },
                    { name: "PNB MetLife", logo: "/images/PNB.png" },
                    { name: "SHRIRAM General Insurance", logo: "/images/s.png" },
                    { name: "Abbott", logo: "/images/abbott.png" },
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

      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <div>
                <p className={styles.kicker}>Welcome</p>
                <h2>Experiences that move people and brands forward.</h2>
                <p className={styles.muted}>
                  We design and deliver comprehensive MICE solutions—from corporate events and conferences to incentive travel and global expeditions. Our teams blend strategy, creativity, and precise execution to make every moment memorable. Whether it&apos;s planning your next corporate gathering or orchestrating travel experiences across the world, we ensure customer delight at every step.
                </p>
                <div className={styles.inlineActions}>
                  <Link href="/contact">
                    <Button variant="primary">Plan Your Experience</Button>
                  </Link>
                  <Link href="/about" className={styles.textLink}>
                    Learn about our approach →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
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

      <section className={styles.valueSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>Why Choose Us</p>
              <h2 className={styles.sectionTitle}>Built for outcomes, delivered with care.</h2>
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
                <p className={styles.kicker}>Let&apos;s build it</p>
                <h2>Ready to plan your next event?</h2>
                <p className={styles.muted}>Tell us your objectives and we&apos;ll design an experience—whether it&apos;s an event or a travel journey—that exceeds expectations.</p>
              </div>
              <Link href="/contact">
                <Button variant="primary">Talk to Our Team</Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
