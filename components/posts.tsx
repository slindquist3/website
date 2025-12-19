import React from "react";

export type PostProps = {
  date: string;
  title: string;
  description: string;
};

export function Post({ date, title, description }: PostProps) {
  const iso = (() => {
    const d = new Date(date);
    return Number.isNaN(d.getTime()) ? date : d.toISOString();
  })();

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <time
          dateTime={iso}
          style={{ display: "block", color: "#666", fontSize: "0.9rem" }}
        >
          {date}
        </time>
      </header>
      <p>{description}</p>
    </article>
  );
}

export default Post;
