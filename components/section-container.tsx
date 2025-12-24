"use client";

import React from "react";
import styles from "./section-container.module.css";

interface SectionContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default SectionContainer;
