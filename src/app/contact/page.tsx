"use client";

import Button from '@/components/Button';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <div className={styles.contactModal}>
                {/* Left Section - Image with Overlay */}
                <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
                    <div className={styles.leftSection}>
                        <div className={styles.imageOverlay}>
                            <Image
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=90"
                                alt="High-end corporate gala event setup"
                                fill
                                sizes="(min-width: 1024px) 33vw, 100vw"
                                style={{ objectFit: 'cover' }}
                                className={styles.darkEventImage}
                            />
                            <div className={styles.overlayContent}>
                                <h2 className={styles.brandName}>ICE Group</h2>
                                <p className={styles.brandDescription}>
                                    ICE Group serves as a comprehensive MICE solutions provider that fosters and strengthens emerging businesses by delivering exceptional events, conferences, and travel experiences across various platforms and geographies.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Right Section - Contact Form */}
                <AnimateOnScroll animation="fadeInRight" delay={0.2}>
                    <div className={styles.rightSection}>
                        <div className={styles.formHeader}>
                            <h1 className={styles.formTitle}>Get in Touch</h1>
                        </div>

                    <form className={styles.contactForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                                Email
                            </label>
                            <input
                                type="email"
                                className={styles.formInput}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                                Phone
                            </label>
                            <input
                                type="tel"
                                className={styles.formInput}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                                Describe
                            </label>
                            <textarea
                                rows={5}
                                className={styles.formTextarea}
                                placeholder="Tell us about your requirements..."
                            ></textarea>
                        </div>

                        <Button variant="primary" className={styles.submitButton}>
                            Send message
                        </Button>
                    </form>
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Office Information Section */}
            <div className={styles.officeInfoSection}>
                <div className="container">
                    <div className={styles.officeInfoGrid}>
                        {[
                            {
                                title: "India Office :",
                                address: "G-23 (GF), Aashirwad Commercial Complex, Green Park,\nNew Delhi - 110016, INDIA",
                                phone: "011 - 4221 1111",
                                email: "info@icegroupindia.com",
                                image: "https://images.unsplash.com/photo-1521292270410-a8c53642e9d0?auto=format&fit=crop&w=1600&q=90",
                                alt: "India office skyline",
                            },
                            {
                                title: "UAE Office :",
                                address: "Building A1 Dubai Digital Park, Dubai Silicon Oasis\nDubai, United Arab Emirates P.O.Box 342001",
                                phone: "011 - 4221 1111",
                                email: "mohit.khanna@icegroupindia.com",
                                image: "https://images.unsplash.com/photo-1529422667826-2a53c0c969af?auto=format&fit=crop&w=1600&q=90",
                                alt: "Dubai skyline at night",
                            },
                            {
                                title: "Europe Office :",
                                address: "Opening Shortly",
                                phone: null,
                                email: null,
                                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=90",
                                alt: "European cityscape",
                            },
                        ].map((office, index) => (
                            <AnimateOnScroll key={office.title} animation="fadeInUp" delay={0.1 + index * 0.1}>
                                <div className={styles.officeCard}>
                                    <div className={styles.officeContent}>
                                        <h3 className={styles.officeTitle}>{office.title}</h3>
                                        <p className={styles.officeDetail}>
                                            <span className={styles.officeIcon}>📍</span>
                                            <span style={{ whiteSpace: 'pre-line' }}>{office.address}</span>
                                        </p>
                                        {office.phone && (
                                            <p className={styles.officeDetail}>
                                                <span className={styles.officeIcon}>📞</span>
                                                <span>{office.phone}</span>
                                            </p>
                                        )}
                                        {office.email && (
                                            <p className={styles.officeDetail}>
                                                <span className={styles.officeIcon}>✉</span>
                                                <span>{office.email}</span>
                                            </p>
                                        )}
                                    </div>
                                    <div className={styles.officeImageWrap}>
                                        <Image
                                            src={office.image}
                                            alt={office.alt}
                                            fill
                                            sizes="(min-width: 1024px) 20vw, 100vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
