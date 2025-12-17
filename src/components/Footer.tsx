import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <Link href="/" className={styles.logoLink}>
                        <Logo variant="default" />
                    </Link>
                    <p className={styles.description}>
                        Innovative Xperiences. Creating unforgettable corporate events with precision and passion.
                    </p>
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
                    <p>info@icegroupindia.com</p>
                    <p>011 - 4221 1111</p>
                    <p>
                        India Office: G-23 (GF), Aashirwad Commercial Complex, Green Park,<br />
                        New Delhi - 110016, INDIA
                    </p>
                    <p>
                        UAE Office: BUILDING A1 DUBAI DIGITAL PARK, DUBAI SILICON OASIS,<br />
                        DUBAI, UNITED ARAB EMIRATES P.O.Box 342001
                    </p>
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
