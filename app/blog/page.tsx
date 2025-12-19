import React from "react";
import Post from "../../components/posts";

export default function Blog() {
  const samplePosts = [
    {
      date: "December 22, 2025",
      title: "Winter break",
      description:
        "I spent the break learning a few new art techniques and experimenting with color palettes.",
    },
    {
      date: "November 10, 2025",
      title: "New watercolor series",
      description:
        "Released a small series of loose watercolors inspired by coastal fog and muted tones.",
    },
    {
      date: "October 5, 2025",
      title: "Pixel experiments",
      description:
        "Tried a handful of micro pixel-art studies focused on lighting and limited palettes.",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      <main>
        <h2>This is the blog page</h2>
        <section>
          {samplePosts.map((p) => (
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
