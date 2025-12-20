"use client";

import React from "react";
import { useText } from "@/components/language-provider";

export default function Home() {
  const t = useText();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      <main>
        <h1 className="text-6xl">{t.home.title}</h1>
        <p className="mt-6 max-w-xl leading-7 text-white">{t.home.intro}</p>
      </main>
    </div>
  );
}
