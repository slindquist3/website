"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./lightbox-image.module.css";

export interface LightboxImageProps {
  url: string;
  alt: string;
  title: string;
  description: string;
}

const LightboxImage: React.FC<LightboxImageProps> = ({
  url,
  alt,
  title,
  description,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={() => setOpen(true)}>
        <img
          ref={imgRef}
          src={isVisible ? url : undefined}
          alt={alt}
          className={`${styles.image} ${isLoaded ? styles.loaded : ""}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <button
            className={styles.close}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={url}
            alt={alt}
            className={styles.fullImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default LightboxImage;
