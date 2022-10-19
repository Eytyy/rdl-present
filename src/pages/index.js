import Image from 'next/image';
import SEO from '@components/SEO';
import styles from '@styles/Home.module.css';

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <SEO title="RDL" description="Reusable Designed Logic" />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              Find in-depth information about Next.js features and
              API.
            </p>
          </a>

          <div className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>
              Learn about Next.js in an interactive course with
              quizzes!
            </p>
          </div>

          <div className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>
              Discover and deploy boilerplate example Next.js
              projects.
            </p>
          </div>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with
              Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
