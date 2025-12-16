import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <Link href="/" className={styles.logo}>
                        ICE<span className="text-gradient">Group</span>
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
                    <p>info@icegroupOffset.com</p>
                    <p>+1 (555) 000-0000</p>
                    <p>Corporate Plaza, Suite 100<br />Metropolis, NY</p>
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
