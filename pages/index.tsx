import Head from 'next/head';
import { client, query } from '@/lib/index';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AboutUsSection from '../components/AboutUsSection';
import GoalsSection from '../components/GoalsSection';
import TeamSection from '../components/TeamSection';
import SpeakersSection from '../components/SpeakersSection';
import PartnerSection from '../components/PartnerSection';
import FAQSection from '../components/FAQSection';

const Home = ({fullData}) => {
  console.log(fullData);
  
  return (
    <div>
      <Head>
        <title>Wander Women DAO Buildathon</title>
        <meta name="description" content="Wander Women DAO Buildathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection data={fullData} />
      <AboutSection data={fullData} />
      <AboutUsSection data={fullData} />
      <GoalsSection data={fullData} />
      <SpeakersSection data={fullData} />
      <PartnerSection data={fullData} />
      <TeamSection data={fullData} />
      <FAQSection data={fullData} />
    </div>
  );
};

export const getStaticProps = async () => {
    const fullData = await client.fetch(query);
  
    return {
      props: { fullData },
      revalidate: 10
    };
  };

export default Home;
