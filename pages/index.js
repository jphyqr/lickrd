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
          I believe in your idea, and that you will figure out the chemisty.. so
          I made sure to save this domain for you.
        </p>

        <p className={styles.description}>
          P.S. I also believe in our chemistry
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Give this idiot one more chdiv nce?</h3>
            <img src='/yes.png' />
          </div>

          <div className={styles.card}>
            <h3>No Sorry Dude.. </h3>
            <img src='/no.png' />
          </div>
        </div>

        <p className={styles.description}>
          P.P.S .. I didnt think this through, you will have to open this
          website on your laptop and then scan the QR code with your phone... or
          just call me 😂
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Managed by Idiot John Hashem, but LICKRD is copyrighted by Jenna
          Starchuck 2020..and her amazing ass!!
        </a>
      </footer>
    </div>
  );
}
