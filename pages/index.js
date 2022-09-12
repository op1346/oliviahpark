import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olivia Hanna Park</title>
        <meta name="description" content="Olivia H Park" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Olivia.
        </h1>

        <p className={styles.description}>
          I'm a biologist and full stack JavaScript developer!
        </p>

        <h2 className={styles.description}>
          About Me
        </h2>
        <p className={styles.description}>
        I have always been passionate about technology. While I do have two degrees in the sciences, I have always wanted to bridge the gap between technology and science. I am most interested in the healthcare field and what technology can do to play a role in saving lives. However, what I love most about programming and engineering is the ability to be able to create whatever I want.
        </p>
      </main>
    </div>
  )
}
