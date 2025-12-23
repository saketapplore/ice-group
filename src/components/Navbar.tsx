"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest(`.${styles.navContainer}`)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.brandGroup}>
                    <Link href="/" className={styles.logoLink}>
                        <Logo variant="dark" />
                    </Link>
                    <Image
                        src="/images/certification-badge.png"
                        alt="Great Place to Work Certified"
                        width={110}
                        height={160}
                        className={styles.badgeImage}
                        priority
                    />
                </div>
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
