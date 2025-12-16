import styles from './Hero.module.css';
import Link from 'next/link';
import Button from './Button'; // Import our new Button

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Innovative <br />
          <span className="text-gradient">Xperiences</span>
        </h1>
        <p className={styles.subtitle}>
          Your partner for world-class corporate events, conferences, and exhibitions.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/services">
            <Button variant="primary">Our Services</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
