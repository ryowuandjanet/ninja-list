import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Hello world</p>
        <p className={styles.text}>How are you</p>
        <Link href="/ninjas">
          <a  className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
