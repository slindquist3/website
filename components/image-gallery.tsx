"use client";

import React from "react";
import styles from "./image-gallery.module.css";
import LightboxImage, { LightboxImageProps } from "./lightbox-image";

export interface ImageGalleryProps {
  images: LightboxImageProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <LightboxImage
          key={index}
          url={image.url}
          alt={image.alt}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
