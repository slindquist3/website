import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/pixel-art">Pixel Art</a>
        </li>
        <li>
          <a href="/watercolor">Watercolor</a>
        </li>
        <li>
          <a href="/drawing">Drawing</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
