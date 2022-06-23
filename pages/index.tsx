import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { IPricingTableTypeProps } from '../types/PricingTypes';

const Home = ({pricingTable}: IPricingTableTypeProps) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Wander Women DAO Buildathon</title>
        <meta name="description" content="Buildathon Aug" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h2>Click links below</h2>
        <Link href="/schedule">
          <a>Schedule</a>
        </Link>
        <Link href="/speakers">
          <a>Speakers</a>
        </Link>
        <Link href="/members">
          <a>Members</a>
        </Link>
        <Link href="/past-events">
          <a>Past Events</a>
        </Link>
        <Link href="/about">
          <a>About WWD</a>
        </Link>
        <Link href="/other-news">
          <a>Other News</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
        <Link href="/about-buildathon">
          <a>About Buildathon</a>
        </Link>
        <Link href="/buildathon-goals">
          <a>About Buildathon</a>
        </Link>
        <Link href="/buildathon-partnerships">
          <a>Buildathon Partnerships</a>
        </Link>

        
      </main>
    </div>
  )
}

export default Home;