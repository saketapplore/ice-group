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
        src="/images/logo.png"
        alt="ICE Group Logo"
        width={variant === 'compact' ? 120 : variant === 'dark' ? 195 : 243}
        height={variant === 'compact' ? 40 : variant === 'dark' ? 81 : 81}
        className={styles.logoImage}
        priority
      />
    </div>
  );
};

export default Logo;

