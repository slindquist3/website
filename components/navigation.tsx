"use client";

import styles from "./navigation.module.css";
import LanguageSwitch from "./language-switch";
import { useText } from "./language-provider";

export default function Navigation() {
  const t = useText();

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navigation}>
        <li>
          <a href="/">{t.nav.home}</a>
        </li>
        <li>
          <a href="/drawing">{t.nav.drawing}</a>
        </li>
        <li>
          <a href="/watercolor">{t.nav.watercolor}</a>
        </li>
        <li>
          <a href="/pixel-art">{t.nav.pixelArt}</a>
        </li>
        <li>
          <a href="/blog">{t.nav.blog}</a>
        </li>
        <li>
          <a href="/about">{t.nav.about}</a>
        </li>
      </ul>
      <div className={styles.langContainer}>
        <LanguageSwitch />
      </div>
    </nav>
  );
}
