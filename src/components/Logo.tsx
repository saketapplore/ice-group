import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'default' | 'compact' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <div className={`${styles.logo} ${variant === 'compact' ? styles.compact : ''} ${variant === 'dark' ? styles.dark : ''} ${className}`}>
      <div className={styles.icePart}>
        <span className={styles.letterI}>
          <span className={styles.dot}></span>
          i
        </span>
        <span className={styles.letterC}>c</span>
        <span className={`${styles.letterE} ${styles.letterEice}`}>e</span>
      </div>
      {variant !== 'compact' && (
        <div className={styles.tagline}>
          <div className={styles.innovative}>
            <span className={styles.letterIGradient}>i</span>
            <span className={styles.innovativeRest}>nnovative</span>
          </div>
          <div className={styles.experiences}>
            <span className={styles.letterE}>e</span>
            <span className={styles.letterX}>x</span>
            <span className={styles.experiencesRest}>periences</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;

