"use client";

import React from "react";
import { useText } from "@/components/language-provider";
import PageContainer from "@/components/page-container";

export default function Drawing() {
  const t = useText();

  return <PageContainer title="Drawing">{t.drawing.text}</PageContainer>;
}
