"use client";

import React from "react";
import Post from "../../components/posts";
import { useText } from "@/components/language-provider";
import PageContainer from "@/components/page-container";

export default function Blog() {
  const t = useText();
  const samplePosts = t.blog.posts;

  return (
    <PageContainer title="Blog">
      <section>
        {samplePosts.map((p: any) => (
          <Post
            key={`${p.title}-${p.date}`}
            date={p.date}
            title={p.title}
            description={p.description}
          />
        ))}
      </section>
    </PageContainer>
  );
}
