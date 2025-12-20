"use client";

import React from "react";
import { useText } from "@/components/language-provider";

export default function PixelArt() {
  const t = useText();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      {t.pixelArt.text}
    </div>
  );
}
