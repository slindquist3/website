"use client";

import React from "react";
import { useText } from "@/components/language-provider";
import PageContainer from "@/components/page-container";

export default function Watercolor() {
  const t = useText();

  return <PageContainer title="Watercolor">{t.watercolor.text}</PageContainer>;
}
