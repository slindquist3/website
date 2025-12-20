"use client";

import React from "react";
import Post from "../../components/posts";
import { useText } from "@/components/language-provider";

export default function Blog() {
  const t = useText();
  const samplePosts = t.blog.posts;

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      <main>
        <h2>{t.blog.title}</h2>
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
      </main>
    </div>
  );
}
