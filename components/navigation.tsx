"use client";

import { useState } from "react";
import styles from "./navigation.module.css";
import LanguageSwitch from "./language-switch";
import { useText } from "./language-provider";

export default function Navigation() {
  const t = useText();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="/" onClick={() => setIsOpen(false)}>
            {t.nav.home}
          </a>
        </li>
        <li>
          <a href="/drawing" onClick={() => setIsOpen(false)}>
            {t.nav.drawing}
          </a>
        </li>
        <li>
          <a href="/watercolor" onClick={() => setIsOpen(false)}>
            {t.nav.watercolor}
          </a>
        </li>
        <li>
          <a href="/digital" onClick={() => setIsOpen(false)}>
            {t.nav.digital}
          </a>
        </li>
        <li>
          <a href="/blog" onClick={() => setIsOpen(false)}>
            {t.nav.blog}
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setIsOpen(false)}>
            {t.nav.about}
          </a>
        </li>
      </ul>
      <div className={styles.langContainer}>
        <LanguageSwitch />
      </div>
    </nav>
  );
}
