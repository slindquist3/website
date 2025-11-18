export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
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
    </div>
  );
}
