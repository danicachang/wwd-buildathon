import Head from 'next/head';

import AboutSection from '@/components/AboutSection';
import AboutUsSection from '@/components/AboutUsSection';
import FAQSection from '@/components/FAQSection';
import GoalsSection from '@/components/GoalsSection';
import HeroSection from '@/components/HeroSection';
import PartnerSection from '@/components/PartnerSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import TeamSection from '@/components/TeamSection';
import { client, query } from '@/lib/index';

const Home = ({ fullData }) => {
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
      <GoalsSection data={fullData} />
      <SpeakersSection data={fullData} />
      <ScheduleSection data={fullData} />
      <PartnerSection data={fullData} />
      <AboutUsSection data={fullData} />
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
