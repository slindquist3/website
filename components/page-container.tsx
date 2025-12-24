"use client";

import React from "react";
import styles from "./page-container.module.css";

interface PageContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default PageContainer;
