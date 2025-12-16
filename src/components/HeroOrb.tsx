"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroOrb.module.css";

export default function HeroOrb() {
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let targetRx = 0;
    let targetRy = 0;
    let currentRx = 0;
    let currentRy = 0;

    const handleMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const xNorm = event.clientX / innerWidth - 0.5;
      const yNorm = event.clientY / innerHeight - 0.5;

      targetRy = xNorm * 18; // rotateY toward left/right
      targetRx = -yNorm * 14; // rotateX toward up/down
    };

    window.addEventListener("pointermove", handleMove);

    let frameId: number;
    const animate = () => {
      currentRx += (targetRx - currentRx) * 0.1;
      currentRy += (targetRy - currentRy) * 0.1;

      orb.style.transform = `translateZ(0) rotateX(${currentRx}deg) rotateY(${currentRy}deg)`;

      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={orbRef} className={styles.wrap}>
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={`${styles.ring} ${styles.ring3}`} />
      <div className={`${styles.ring} ${styles.ring4}`} />
      <div className={`${styles.ring} ${styles.ring5}`} />
    </div>
  );
}
