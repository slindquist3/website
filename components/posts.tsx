import React from "react";
import styles from "./posts.module.css";

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
        <h3 className={styles.title}>{title}</h3>
        <time
          dateTime={iso}
          className={styles.date}
          style={{ display: "block", color: "#666", fontSize: "0.9rem" }}
        >
          {date}
        </time>
      </header>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default Post;
