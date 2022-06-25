import Head from 'next/head';
import { client, query } from '@/lib/index';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GoalsSection from '../components/GoalsSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';

import NFT1 from '../images/CoverImage.png';
import NFT2 from '../images/CoverImage.png';
import NFT3 from '../images/CoverImage.png';
import NFT4 from '../images/CoverImage.png';


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
      <GoalsSection data={fullData} />

      

      <section className="pink">
        <div className="content why">
          <h1 className="allcaps center">Why Join?</h1>
          <p className="center">
            Always wanted to build a startup but don't have an idea, time, or
            co-founders? Join us!
          </p>
          <div className="flex flex-wrap responsive-3-columns">
            <div className="padding-h">
              <h2 className="transparent-gradient">01</h2>
              <h3>
                Get connected with like-minded women from all over the world
              </h3>
            </div>
            <div className="padding-h">
              <h2 className="transparent-gradient">02</h2>
              <h3>Vote on what project proposal gets built</h3>
            </div>
            <div className="padding-h">
              <h2 className="transparent-gradient">03</h2>
              <h3>
                You decide how much you want to contribute and to what project.
                Start with as little as 2 hours/week!
              </h3>
            </div>
            <div className="padding-h">
              <h2 className="transparent-gradient">04</h2>
              <h3>Receive compensation and ownership </h3>
            </div>
            <div className="padding-h">
              <h2 className="transparent-gradient">05</h2>
              <h3>
                VIP access to everything created by Wander Women and perks &amp;
                benefits from partners on travel and professional development
              </h3>
            </div>
            <div className="padding-h">
              <h2 className="transparent-gradient">06</h2>
              <h3>
                Education and transparent visibility on how to build a startup.
                Get direct visibility and access to all functionalities and
                learn by doing.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="blue">
        <div className="content center">
          <h1 className="allcaps">Upcoming Events</h1>
          <iframe
            src="https://lu.ma/embed-events/usr-bN2UiECY0ilp46Y"
            frameBorder="0"
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            title="Events"
            className="lumaEventsIframe"
          ></iframe>
          {/*<div className='flex flex-wrap responsive-2-columns flex-center'>
                        <div className='thumbnail'>
                            <a href="/">
                                <div className='backgroundImage' style={{'backgroundImage': 'url('+eventImage+')'}}></div>
                                <div className='title'>
                                    <button className='teal right tablet-desktop'>Register</button>
                                    <h3>Blockchain 101</h3>
                                    <p>Wed, March 30th</p>
                                </div>
                            </a>
                        </div>
                        <div className='thumbnail'>
                            <a href="/">
                                <div className='backgroundImage' style={{'backgroundImage': 'url('+eventImage+')'}}></div>
                                <div className='title'>
                                    <button className='teal right tablet-desktop'>Register</button>
                                    <h3>Blockchain 101</h3>
                                    <p>Wed, March 30th</p>
                                </div>
                            </a>
                        </div>
                        <div className='thumbnail'>
                            <a href="/">
                                <div className='backgroundImage' style={{'backgroundImage': 'url('+eventImage+')'}}></div>
                                <div className='title'>
                                    <button className='teal right tablet-desktop'>Register</button>
                                    <h3>Blockchain 101</h3>
                                    <p>Wed, March 30th</p>
                                </div>
                            </a>
                        </div>
                        <div className='thumbnail'>
                            <a href="/">
                                <div className='backgroundImage' style={{'backgroundImage': 'url('+eventImage+')'}}></div>
                                <div className='title'>
                                    <button className='teal right tablet-desktop'>Register</button>
                                    <h3>Blockchain 101</h3>
                                    <p>Wed, March 30th</p>
                                </div>
                            </a>
                        </div>
    </div>*/}
        </div>
      </section>

      <TeamSection data={fullData} />

      <section className="teal">
        <div className="content">
          <h1 className="allcaps center">Our Art</h1>
          <h3 className="center black margin-bottom">launching June 2022</h3>
          <div className="flex responsive-2-columns flex-wrap">
            <div className="padding">
              <h2 className="margin-bottom">Wander. Growth. Community.</h2>
              <p className="larger black">
                Our art is inspired by the wonder that comes from travel and the
                ways that it forever changes our perspective on the world and
                ourselves.
              </p>

              <p className="larger black">
                Our characters are empowered and courageous in their pursuit of
                an unconventional life.{' '}
              </p>
              <p className="larger black">
                Follow us on twitter @WanderWomenDAO for art sneak peeks
              </p>

              <a
                href="https://twitter.com/WanderWomenDAO"
                target="_blank"
                rel="noreferrer"
              >
                <button className="orange fullWidth-mobile">
                  Follow on Twitter
                </button>
              </a>
            </div>
            <div className="two-col flex-mobile-order-first padding">
              <img
                src={NFT1.src}
                className=" padding-small"
                alt="Wander Women DAO NFT"
              />
              <img
                src={NFT2.src}
                className=" padding-small"
                alt="Wander Women DAO NFT"
              />
              <img
                src={NFT3.src}
                className=" padding-small"
                alt="Wander Women DAO NFT"
              />
              <img
                src={NFT4.src}
                className=" padding-small"
                alt="Wander Women DAO NFT"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection data={fullData} />
    </div>
  );
};

export const getStaticProps = async () => {
    const fullData = await client.fetch(query);
  
    return {
      props: { fullData }
    };
  };

export default Home;
