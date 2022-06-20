import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../lib/client';
import styles from '../styles/Home.module.css';
import { IPricingTableTypeProps } from '../types/PricingTypes';

const Home = ({ pricingTable }: IPricingTableTypeProps) => {
  console.log(pricingTable)
  return (
    <div className={styles.container}>
      <Head>
        <title>Wander Women DAO Buildathon</title>
        <meta name="description" content="Buildathon Aug" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Buildathon!</a>
        </h1>

        <h2>Click links below</h2>
        <Link href="/schedule">
          <a>Schedule</a>
        </Link>
        <Link href="/speakers">
          <a>Speakers</a>
        </Link>
        <h1>Pricing</h1>
        {pricingTable.map((category) => (
          <div key={category.id}>
            <ul>
              <li>{category.title}</li>
              <li>${category.pricing}</li>
              <li>{category.dateFrom}</li>
              <li>{category.dateTill}</li>
            </ul>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "ticket"] | order(dateFrom) { 
    "id": _id,
    title,
    pricing,
    dateFrom,
    dateTill
    }`;
  const pricingTable = await client.fetch(query);
  return {
    props: { pricingTable },
  };
};

export default Home;
