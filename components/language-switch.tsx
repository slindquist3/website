"use client";

import React from "react";
import styles from "./navigation.module.css";
import { useLanguage } from "./language-provider";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  const handleClick = () => {
    const next = lang === "en" ? "es" : "en";
    setLang(next);
  };

  return (
    <button
      onClick={() => handleClick()}
      className={styles.languageSwitch}
      aria-label="Switch language"
    >
      {lang.toUpperCase()}
    </button>
  );
}
