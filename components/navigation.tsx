import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.root}>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/pixel-art">Pixel Art</a>
        </li>
        <li>
          <a href="/watercolors">Watercolors</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
