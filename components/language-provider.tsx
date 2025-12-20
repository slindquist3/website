"use client";

import React, { createContext, useContext, useState } from "react";
import type { LangKey } from "@/lib/text";
import { Text } from "@/lib/text";

type LanguageContextValue = {
  lang: LangKey;
  setLang: (l: LangKey) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LangKey>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useText() {
  const { lang } = useLanguage();
  return Text[lang];
}
