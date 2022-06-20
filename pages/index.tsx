import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "w34m7f7u",
  dataset: "production",
  apiVersion: "2022-06-20",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const Home = ({pricingTable}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Wander Women DAO Buildathon</title>
        <meta name="description" content="Buildathon Aug" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!pricingTable.length > 0 && <p>No pets to show</p>}
        {pricingTable.length > 0 && (
          <div>
            <pre>{JSON.stringify(pricingTable, null, 2)}</pre>
          </div>
        )}

        <h2>Click links below</h2>
        <Link href="/schedule">
          <a>Schedule</a>
        </Link>
        <Link href="/speakers">
          <a>Speakers</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
        
      </main>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
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