import Link from 'next/link';
import Button from './Button';
import Logo from './Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logoLink}>
                    <Logo variant="dark" />
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/gallery" className={styles.link}>Gallery</Link>
                    <Link href="/newsletter" className={styles.link}>Newsletter</Link>
                    <Link href="/contact" className={styles.link}>Contact Us</Link>
                </div>
                <div className={styles.cta}>
                    <Link href="/contact">
                        <Button variant="primary">Get Quote</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
