"use client";

import { useEffect, useRef } from "react";

export default function BlobCursor() {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handleMove);

    let frameId: number;
    const animate = () => {
      // Smoothly ease towards the cursor for a fluid feel
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      blob.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;

      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={blobRef} className="blob-cursor" aria-hidden="true" />;
}
