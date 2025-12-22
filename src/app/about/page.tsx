"use client";

import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className="container">
      <section className={styles.aboutPage}>
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <h1 className={`text-gradient ${styles.aboutTitle}`}>About ICE</h1>
          <p className={styles.aboutDescription}>
            iCE Group India, a group that has stood for excellence, brilliance and distinction since its inception. Ever since, the company has grown leaps and bounds and today has a rich legacy of experience, expertise, skill, competence, and exposure garnered in the decade and plus one year of its operations.
          </p>
        </AnimateOnScroll>

        <div className={styles.contentGrid}>
          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div className={styles.contentText}>
              <h2 className={`text-gradient ${styles.sectionHeading}`}>The Story Behind the Brand</h2>
              <p className={styles.contentParagraph}>
                The organization was formed on 1st June 2010, under the guidance of Mr. Mohit Khanna, with a vision of becoming the market leader and providing customized services to the clients. Ms. Disha Shah joined the company in the year 2015 as the COO and director. In the span of 15 years, the company added two successful verticals: iCEtravels that focuses on MICE operations and iCEevents dealing in all kinds of corporate events and exhibitions.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div className={styles.contentImage}>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating during an event planning session"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div className={styles.teamSection}>
          <AnimateOnScroll animation="fadeInUp" delay={0.4}>
            <div>
              <h2 className={styles.teamTitle}>
                <span className="text-gradient">We Are Ingenious We Are Team ice</span>
              </h2>
              <div className={styles.teamContent}>
                <p className={styles.teamParagraph}>
                  We are on a constant quest to deliver superlative impressions and experiences for you. Travel is in our DNA and there is perhaps no corner of the world where we haven&apos;t crafted memories for our patrons. For us it is always time for the next adventure.
                </p>
                <p className={styles.teamParagraph}>
                  Travel and events go hand in hand, and it was only imperative for us that this was the next progression for us. iCE Events is now a name to reckon with in the events space and how. Large formats bespoke corporate events on all turfs of the globe and in the quest of exploring beyond.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className={styles.missionVisionContainer}>
          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div className={styles.missionSection}>
              <h2 className={`text-gradient ${styles.missionVisionTitle}`}>MISSION</h2>
              <p className={styles.missionVisionText}>
                To truly understand our client goals and turn that understanding into flawlessly executed events and MICE programs. We don&apos;t just aim to meet client expectations; we strive to create experiences that are precisely planned and impactful and completely exceed what they envisaged.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div className={styles.visionSection}>
              <h2 className={`text-gradient ${styles.missionVisionTitle}`}>VISION</h2>
              <p className={styles.missionVisionText}>
                We envision a future where we are the global standard-bearer for luxury event production and MICE. We will achieve this by passionately blending creative inspiration, the latest event technology, and operational excellence to craft sophisticated, immersive, and genuinely unforgettable experiences. Our commitment is to set the benchmark for world-class quality, ensuring every moment we create is a masterpiece of memory.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

