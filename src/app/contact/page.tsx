"use client";

import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <div className="container">
                <div className={styles.contactLayout}>
                    {/* Left Section - Contact Information Card */}
                    <AnimateOnScroll animation="fadeInUp" delay={0.1}>
                        <div className={styles.contactInfoCard}>
                            <h2 className={styles.contactInfoTitle}>Get in touch</h2>
                            
                            {/* India Office */}
                            <div className={styles.contactInfoSection}>
                                <div className={styles.officeHeader}>
                                    <Image src="/location-pin.svg" alt="Location" width={20} height={20} className={styles.officeIcon} />
                                    <h3 className={styles.officeTitle}>India Office :</h3>
                                </div>
                                <p className={styles.contactInfoDetail}>
                                    G-23 (GF), Aashirwad Commercial Complex, Green Park,<br />
                                    New Delhi - 110016, INDIA
                                </p>
                                <div className={styles.contactInfoItem}>
                                    <Image src="/phone-icon.svg" alt="Phone" width={18} height={18} className={styles.contactIcon} />
                                    <span className={styles.contactLabel}>24/7 Hotline :</span>
                                    <a href="tel:01142211111" className={styles.contactInfoLink}>011 - 4221 1111</a>
                                </div>
                                <div className={styles.contactInfoItem}>
                                    <span className={styles.contactIcon}>✉</span>
                                    <span className={styles.contactLabel}>Email :</span>
                                    <a href="mailto:info@icegroupindia.com" className={styles.contactInfoLink}>info@icegroupindia.com</a>
                                </div>
                            </div>

                            {/* Follow Us */}
                            <div className={styles.contactInfoSection}>
                                <div className={styles.followUsHeader}>
                                    <h3 className={styles.followUsTitle}>Follow us on :</h3>
                                </div>
                                <div className={styles.socialIcons}>
                                    <a href="https://www.facebook.com/ICEGROUPINDIA/" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.facebookIcon}`} aria-label="Facebook">
                                        <Image src="/facebook-icon.svg" alt="Facebook" width={20} height={20} />
                                    </a>
                                    <a href="https://x.com/Travelmgmnt" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.twitterIcon}`} aria-label="Twitter">
                                        <Image src="/twitter-icon.svg" alt="Twitter" width={20} height={20} />
                                    </a>
                                    <a href="https://www.instagram.com/icegroupindia/" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagramIcon}`} aria-label="Instagram">
                                        <Image src="/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/icegroup-india" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.linkedInIcon}`} aria-label="LinkedIn" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>in</a>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right Section - Contact Form */}
                    <AnimateOnScroll animation="fadeInUp" delay={0.2}>
                        <div className={styles.formSection}>
                            <form className={styles.contactForm}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>First Name</label>
                                        <input
                                            type="text"
                                            className={styles.formInput}
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Last Name</label>
                                        <input
                                            type="text"
                                            className={styles.formInput}
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Company Name</label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        placeholder="Enter your company name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Email</label>
                                    <input
                                        type="email"
                                        className={styles.formInput}
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Phone Number</label>
                                    <input
                                        type="tel"
                                        className={styles.formInput}
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Message</label>
                                    <textarea
                                        rows={5}
                                        className={styles.formTextarea}
                                        placeholder="Tell us what we can help you with."
                                    ></textarea>
                                </div>

                                <div className={styles.checkboxGroup}>
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className={styles.checkbox}
                                    />
                                    <label htmlFor="privacy" className={styles.checkboxLabel}>
                                        I&apos;d like to receive more information about company, I understand and agree to the{' '}
                                        <Link href="/privacy" className={styles.privacyLink}>
                                            Privacy Policy
                                        </Link>
                                    </label>
                                </div>

                                <Button variant="primary" className={styles.submitButton}>
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
}
