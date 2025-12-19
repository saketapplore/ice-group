import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import Button from './Button';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <Link href="/" className={styles.logoLink}>
                        <Logo variant="default" />
                    </Link>
                    <div className={styles.stayUpdatedSection}>
                        <h3 className={styles.stayUpdatedTitle}>Subscribe to Newsletter</h3>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className={styles.emailInput}
                            />
                            <div>
                                <Button variant="primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Subscribe Now</Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Company</h3>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/gallery">Gallery</Link>
                </div>

                <div className={styles.column}>
                    <h3>Connect</h3>
                    <Link href="/newsletter">Newsletter</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>

                <div className={styles.column}>
                    <h3>Get in Touch</h3>
                    <div className={styles.footerOfficesGrid}>
                        {/* India Office */}
                        <div className={styles.footerOfficeSection}>
                            <div className={styles.footerOfficeHeader}>
                                <Image src="/location-pin.svg" alt="Location" width={16} height={16} className={styles.footerIcon} />
                                <h4 className={styles.footerOfficeTitle}>India Office :</h4>
                            </div>
                            <p className={styles.footerAddress}>
                                G-23 (GF), Aashirwad Commercial Complex, Green Park,<br />
                                New Delhi - 110016, INDIA
                            </p>
                            <div className={styles.footerContactItem}>
                                <Image src="/phone-icon.svg" alt="Phone" width={16} height={16} className={styles.footerIcon} />
                                <span className={styles.footerContactLabel}>Call :</span>
                                <a href="tel:01142211111" className={styles.footerContactLink}>011 - 4221 1111</a>
                            </div>
                            <div className={styles.footerContactItem}>
                                <span className={styles.footerIconEmoji}>✉</span>
                                <span className={styles.footerContactLabel}>Email :</span>
                                <a href="mailto:info@icegroupindia.com" className={styles.footerContactLink}>info@icegroupindia.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    &copy; {new Date().getFullYear()} ICE Group. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
