import {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const [pressed, setPressed] = useState(false);

  return (
    <div>
      <Head>
        <title>Scott Lindquist Portfolio</title>
      </Head>

        <h1>
          Welcome to my website 
        </h1>
        <Link href="/demo">UI Demo</Link>

        {!pressed &&
                <button onClick={() => setPressed(!pressed)}>Press me!</button>}

    </div>
  )
}
