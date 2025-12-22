"use client";

import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import Logo from './Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logoLink}>
                    <Logo variant="dark" />
                </Link>
                <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <div className={styles.dropdown}>
                        <span className={styles.link}>Services</span>
                        <div className={styles.dropdownMenu}>
                            <Link href="/services/ice-events" className={styles.dropdownItem}>Events</Link>
                            <Link href="/services/mice" className={styles.dropdownItem}>M.I.C.E</Link>
                        </div>
                    </div>
                    <Link href="/gallery" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                    <Link href="/newsletter" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Newsletter</Link>
                    <Link href="/contact" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </div>
                <button 
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>
        </nav>
    );
}
