import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import Image from "next/image";
import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";
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
      title: "Corporate Events",
      description: "From AGMs to product launches, we execute flawless corporate gatherings that reflect your brand's prestige.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Conferences",
      description: "Large-scale conferences managed with military precision, ensuring every attendee has a seamless experience.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Incentive Travel",
      description: "Reward your top performers with curated travel experiences to the world's most exclusive destinations.",
      image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Exhibitions",
      description: "Stand out on the trade floor with innovative booth designs and interactive attendee engagement strategies.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const valueProps = [
    { title: "End-to-End Delivery", description: "Strategy, design, production, and flawless on-site execution." },
    { title: "Creative Storytelling", description: "Concepts that align with your brand voice and business goals." },
    { title: "Global Reach", description: "Teams and partners across key markets to deliver anywhere." },
    { title: "Data-Driven", description: "Success metrics, attendee insights, and post-event reporting." },
  ];

  const featuredConcepts = [
    { title: "Immersive Product Launch", detail: "Layered content reveal with synchronized AV and interactive demos." },
    { title: "Leadership Summit", detail: "High-touch executive experiences with curated hospitality." },
    { title: "Innovation Expo", detail: "Modular booths, live showcases, and hands-on attendee journeys." },
  ];

  const galleryPreview = [
    {
      alt: "Conference keynote stage",
      image: "https://images.unsplash.com/photo-1521737604893-ff996a0ec29e?auto=format&fit=crop&w=800&q=80",
    },
    {
      alt: "Elegant gala dinner",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    },
    {
      alt: "Networking lounge",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.heroBadge}>Events Studio</div>
              <h1 className={styles.heroTitle}>High-impact experiences, delivered with precision.</h1>
              <p className={styles.heroSubtitle}>
                ICE Group crafts experiences that move people. Explore our upcoming highlights and
                see what&apos;s happening next.
              </p>
              <div className={styles.heroActions}>
                <Link href="#events">
                  <Button variant="primary">View Upcoming Events</Button>
                </Link>
                <Link href="/contact" className={styles.textLink}>
                  Plan your event →
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <HeroOrb />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className={styles.eventsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Upcoming <span className="text-gradient">Events</span></h2>
            <p className={styles.sectionSubtitle}>A snapshot of what&apos;s on the calendar.</p>
          </div>
          <div className={styles.eventGrid}>
            {events.map((event) => (
              <div key={event.title} className={styles.eventCard}>
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
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div>
              <p className={styles.kicker}>Welcome</p>
              <h2>Experiences that move people and brands forward.</h2>
              <p className={styles.muted}>
                We design and deliver corporate events, conferences, and incentives that
                connect audiences with ideas. Our teams blend strategy, creativity, and precise
                execution to make every moment memorable.
              </p>
              <div className={styles.inlineActions}>
                <Link href="/contact">
                  <Button variant="primary">Plan an Event</Button>
                </Link>
                <Link href="/about" className={styles.textLink}>
                  Learn about our approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Expertise</span></h2>
            <p className={styles.sectionSubtitle}>Comprehensive MICE solutions tailored to your business goals.</p>
          </div>

          <div className={styles.grid}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Why Choose Us</p>
            <h2 className={styles.sectionTitle}>Built for outcomes, delivered with care.</h2>
          </div>
          <div className={styles.valueGrid}>
            {valueProps.map((item) => (
              <div key={item.title} className={styles.valueCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Signature Concepts</p>
            <h2 className={styles.sectionTitle}>Proven formats that can be tailored to you.</h2>
          </div>
          <div className={styles.featureGrid}>
            {featuredConcepts.map((concept) => (
              <div key={concept.title} className={styles.featureCard}>
                <h3>{concept.title}</h3>
                <p>{concept.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.galleryPreview}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <div>
              <p className={styles.kicker}>Gallery Preview</p>
              <h2 className={styles.sectionTitle}>See the caliber of our setups.</h2>
              <p className={styles.muted}>High-impact staging, immersive environments, and detail-driven hospitality.</p>
            </div>
            <Link href="/gallery">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
          <div className={styles.galleryGrid}>
            {galleryPreview.map((item, index) => (
              <div key={item.alt} className={`${styles.galleryCard} ${index === 0 ? styles.spanTwo : ""}`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.galleryOverlay}>{item.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.kicker}>Let&apos;s build it</p>
              <h2>Ready to plan your next event?</h2>
              <p className={styles.muted}>Tell us your objectives and we&apos;ll design an experience that meets them.</p>
            </div>
            <Link href="/contact">
              <Button variant="primary">Talk to Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
