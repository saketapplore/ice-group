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
                    <div className={styles.socialSection}>
                        <h4 className={styles.socialTitle}>Follow us on :</h4>
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
                        </div>
                    </div>
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
                                <Image src="/email-icon.svg" alt="Email" width={16} height={16} className={styles.footerIcon} />
                                <span className={styles.footerContactLabel}>Email :</span>
                                <a href="mailto:info@icegroupindia.com" className={styles.footerContactLink}>info@icegroupindia.com</a>
                            </div>
                        </div>

                        {/* UAE Office */}
                        <div className={styles.footerOfficeSection}>
                            <div className={styles.footerOfficeHeader}>
                                <Image src="/location-pin.svg" alt="Location" width={16} height={16} className={styles.footerIcon} />
                                <h4 className={styles.footerOfficeTitle}>UAE Office :</h4>
                            </div>
                            <p className={styles.footerAddress}>
                                BUILDING A1 DUBAI DIGITAL PARK DUBAI SILICON OASIS<br />
                                DUBAI, UNITED ARAB EMIRATES<br />
                                P.O.Box 342001
                            </p>
                            <div className={styles.footerContactItem}>
                                <Image src="/phone-icon.svg" alt="Phone" width={16} height={16} className={styles.footerIcon} />
                                <span className={styles.footerContactLabel}>Call :</span>
                                <a href="tel:01142211111" className={styles.footerContactLink}>011 - 4221 1111</a>
                            </div>
                            <div className={styles.footerContactItem}>
                                <Image src="/email-icon.svg" alt="Email" width={16} height={16} className={styles.footerIcon} />
                                <span className={styles.footerContactLabel}>Email :</span>
                                <a href="mailto:mohit.khanna@icegroupindia.com" className={styles.footerContactLink}>mohit.khanna@icegroupindia.com</a>
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
