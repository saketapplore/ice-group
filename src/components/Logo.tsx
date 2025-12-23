import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'default' | 'compact' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <div className={`${styles.logo} ${variant === 'compact' ? styles.compact : ''} ${variant === 'dark' ? styles.dark : ''} ${className}`}>
      <Image
        src="/images/ice-logo.gif"
        alt="ICE Group Logo"
        width={variant === 'compact' ? 180 : variant === 'dark' ? 300 : 360}
        height={variant === 'compact' ? 60 : variant === 'dark' ? 125 : 120}
        className={styles.logoImage}
        priority
        unoptimized
      />
    </div>
  );
};

export default Logo;

