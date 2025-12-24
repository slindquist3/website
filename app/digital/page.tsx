"use client";

import React from "react";
import { useText } from "@/components/language-provider";
import ImageGallery from "@/components/image-gallery";
import PageContainer from "@/components/page-container";
import SectionContainer from "@/components/section-container";
import { digital } from "./assets";
export default function Digital() {
  const t = useText();

  return (
    <PageContainer
      title="Digital"
      description="Projects I have created with Photoshop, Procreate, and Aesprite"
    >
      <SectionContainer
        title="Color Theory Final"
        description="The capstone project for my Color Theory class I took at San Francisco City College. I needed to create three images with different combinations of colors from the color wheel."
      >
        <ImageGallery images={digital.final} />
      </SectionContainer>

      <SectionContainer
        title="Color Harmony"
        description="I was assigned a project to create three images of a color harmony."
      >
        <ImageGallery images={digital.colorHarmony} />
      </SectionContainer>
    </PageContainer>
  );
}
