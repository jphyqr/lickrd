import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LICKRD</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to LickRD 🍦🥃👅</h1>

        <p className={styles.description}>
          I believe in your idea, so I made sure to save this domain for you.
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Give this idiot one more chance?</h3>
            <img src='/yes.png' />
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>No Sorry Dude.. </h3>
            <img src='/no.png' />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Managed by Idiot John Hashem, but LICKRD is copyrighted by Jenna
          Starchuck 2020..and her amazing ass!
        </a>
      </footer>
    </div>
  );
}
