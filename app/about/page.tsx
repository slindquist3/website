"use client";

import React from "react";
import { useText } from "@/components/language-provider";
import PageContainer from "@/components/page-container";

export default function About() {
  const t = useText();

  return <PageContainer title="About">{t.about.text}</PageContainer>;
}
