"use client";

import Button from '@/components/Button';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './page.module.css';

const newsletters = [
    {
        title: 'MICE Pulse – Q1 Highlights',
        date: 'March 2025',
        summary: 'Trends from global conferences, incentive travel ideas, and how hybrid formats are evolving.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Experience Design Playbook',
        date: 'January 2025',
        summary: 'Storytelling frameworks and staging tips to make your next event unforgettable.',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Travel & Incentives Insider',
        date: 'November 2024',
        summary: 'Top destinations, visa tips, and ways to reward high performers with memorable journeys.',
        image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Operations & On‑Ground Excellence',
        date: 'September 2024',
        summary: 'Checklists and backstage learnings from large-scale events across India and the UAE.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    },
];

export default function NewsletterPage() {
    return (
        <div className={`container ${styles.newsletterPage}`}>
            {/* Recent newsletters */}
            <section className={styles.newslettersSection}>
                <AnimateOnScroll animation="fadeInUp" delay={0.1}>
                    <h2 className={styles.sectionTitle}>Latest Newsletters</h2>
                    <p className={styles.sectionDescription}>
                        A quick snapshot of what we&apos;ve been sharing with our partners and clients.
                    </p>
                </AnimateOnScroll>

                <div className={styles.newslettersGrid}>
                    {newsletters.map((item, index) => (
                        <AnimateOnScroll key={item.title} animation="fadeInUp" delay={0.1 + index * 0.1}>
                            <article className={styles.newsletterCard}>
                            <div className={styles.newsletterImageWrap}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(min-width: 1024px) 20vw, 100vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.newsletterCardContent}>
                                <p className={styles.newsletterDate}>
                                    {item.date}
                                </p>
                                <h3 className={styles.newsletterTitle}>{item.title}</h3>
                                <p className={styles.newsletterSummary}>{item.summary}</p>
                            </div>
                        </article>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>
        </div>
    );
}
