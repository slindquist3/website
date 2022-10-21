import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scott Lindquist Portfolio</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my website <Link href="/demo">Button Animation Demo</Link>
        </h1>
        </main>
    </div>
  )
}
