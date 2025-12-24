"use client";

import React from "react";
import { useText } from "@/components/language-provider";
import PageContainer from "@/components/page-container";

export default function Home() {
  const t = useText();

  return (
    <PageContainer title={t.home.title} description={t.home.intro}>
      <div></div>
    </PageContainer>
  );
}
