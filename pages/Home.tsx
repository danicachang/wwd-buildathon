import Head from 'next/head';
import { client } from '../lib/client';

import Accordion from '../components/Accordion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

import pin from '../images/Pin.png';
import octopusWoman from '../images/WomanWithOctopus.png';
import submarine from '../images/Submarine.png';
import jellyfish from '../images/Jellyfish.png';
import ivy from '../images/Ivy.png';
import emily from '../images/Emily.png';
import danica from '../images/Danica.png';
import kitty from '../images/Kitty.png';
import jane from '../images/Jane.png';
import kayee from '../images/Kayee.png';
import NFT1 from '../images/CoverImage.png';
import NFT2 from '../images/CoverImage.png';
import NFT3 from '../images/CoverImage.png';
import NFT4 from '../images/CoverImage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { IAboutBuildathonProps } from '../types/AboutBuildathonTypes';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Wander Women DAO Buildathon</title>
        <meta name="description" content="Wander Women DAO Buildathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutSection />

      <section className="teal">
        <div className="content narrow">
          <h1 className="allcaps center">Roadmap</h1>
          <br />
          <br />
          <div className="flex padding-v relative flex-mobile-col">
            <div className="roadmap-line"></div>
            <img src={pin.src} className="roadmap-icon" alt="pin icon" />
            <div className="transparent-gradient roadmap-background">
              <img
                src={octopusWoman.src}
                alt="Red haired woman with an octopus on her sholder"
              />
            </div>
            <div className="roadmap-text">
              <h2>Build products and services that support Wander Women</h2>
              <p>
                Our core team consists of entrepreneurs and startup leaders with
                5+ years of experience building tech products. We're building
                products for women by women, and we're inviting anyone who wants
                to be part of the journey to join in and contribute!{' '}
              </p>
            </div>
          </div>
          <div className="flex padding-v relative flex-mobile-col">
            <div className="roadmap-line"></div>
            <img src={pin.src} className="roadmap-icon" alt="pin icon" />
            <div className="transparent-gradient roadmap-background">
              <img
                src={submarine.src}
                alt="Yellow Submarine"
                style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </div>
            <div className="roadmap-text">
              <h2>Recruit and Onboard Talent</h2>
              <p>
                We want to help more women achieve freedom by becoming a
                contributor to Wander Women DAO. Products like Nomadlist and
                RemoteOK are run by one man, and make millions a year. Imagine
                how much we could build as a community. Early contributors will
                be gifted NFTs!
              </p>
            </div>
          </div>
          <div className="flex padding-v relative flex-mobile-col">
            <img src={pin.src} className="roadmap-icon" alt="pin icon" />
            <div className="transparent-gradient roadmap-background">
              <img src={jellyfish.src} alt="Two jellyfish" />
            </div>
            <div className="roadmap-text">
              <h2>Launch 5000 NFTs</h2>
              <p>
                Once we see traction on the products we build, we will open the
                floodgates to our NFT community. NFTs will represent meaningful
                ownership in WWD and will provide us with a treasury to grow our
                existing products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="pink">
        <div className="content meet-team">
          <h1 className="allcaps center">Meet the Team</h1>
          <div className="flex responsive-3-columns flex-wrap">
            <div className="padding">
              <img src={ivy.src} alt="Ivy Xu" className="circle" />
              <h3 className="margin-top">Ivy Xu</h3>
              <h6 className="allcaps noMargin">Co-founder</h6>
              <p>
                Ivy is a co-founder of the original Asian Wander Women community
                and has been nomadic since 2018. She is a 2x 6-figure
                entrepreneur in education and coaching. She's passionate about
                women-led businesses in web2 and web3.
              </p>
              <a
                href="https://twitter.com/ivyxvine"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Ivy's Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/ivyxvine/"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Ivy's Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="padding">
              <img src={emily.src} alt="Emily Fang" className="circle" />
              <h3 className="margin-top">Emily Fang</h3>
              <h6 className="allcaps noMargin">Co-founder</h6>
              <p>
                Emily is a co-founder of the original Asian Wander Women
                community and has extensive experience in community management
                and governance. She is a Community Strategist at Stripe
                (previously at OmniSci and Google) and a Youtube content
                creator.
              </p>
              <a
                href="https://twitter.com/emilyifang"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Emily's Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/emilyifang/"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Emily's Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="padding">
              <img src={danica.src} alt="Danica Chang" className="circle" />
              <h3 className="margin-top">Danica Chang</h3>
              <h6 className="allcaps noMargin">Lead Engineer</h6>
              <p>
                Danica is the lead engineer at Wander Women. She has 10 years of
                startup engineering experience and CS degrees from UC Berkeley
                (BS) and MIT (Master's). She has been remote since 2016,
                slow-traveling North and South America.
              </p>
              <a
                href="https://www.instagram.com/_danicachang_/"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Danica's Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="padding">
              <img src={kitty.src} alt="Kitty Huang" className="circle" />
              <h3 className="margin-top">Kitty Huang</h3>
              <h6 className="allcaps noMargin">Designer</h6>
              <p>
                Kitty is a designer at Wander Women. She has spent the last 5
                years designing solutions for enterprise at SAP and other
                startups. On weekends she visits cafés, paints landscapes and
                takes her cat on walks.
              </p>
              <a
                href="https://www.instagram.com/inafrenzy.life/"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Kitty's Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="padding">
              <img src={jane.src} alt="Jane Guan" className="circle" />
              <h3 className="margin-top">Jane Guan</h3>
              <h6 className="allcaps noMargin">Artist</h6>
              <p>
                Jane is an artist at Wander Women. She spent the early part of
                her career in Sales and Solutions Consulting at Airtable and
                InVision. Now, she works as a 3D Designer &amp; Animator and
                lives in Taipei, Taiwan.
              </p>
              <a
                href="https://www.instagram.com/janedaysart/"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Jane's Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="padding">
              <img src={kayee.src} alt="Kayee Au" className="circle" />
              <h3 className="margin-top">Kayee Au</h3>
              <h6 className="allcaps noMargin">Artist</h6>
              <p>
                Kayee is an artist at Wander Women. She has spent the past 8
                years working in tech in Africa (South Africa, Egypt, Kenya,
                Tanzania). She is the Design Program Manager at Chipper Cash.
              </p>
              <a
                href="https://www.instagram.com/cheeky_keeky/"
                target="_blank"
                rel="noreferrer"
                className="padding-small alternateHover"
                aria-label="Kayee's Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </section>

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

      <section className="blue padding">
        <div className="content">
          <h1 className="allcaps">FAQs</h1>
          <div className="black">
            <Accordion question="How many NFTs are being released?">
              <p>
                There are a total of 5000 generative NFTs being created. WWD NFT
                will have 5 worlds with 1000 NFTs in each world.{' '}
              </p>

              <p>
                At this time, you can get free NFTs by contributing to the DAO
                and helping us build our projects! This will be only for our
                early contributors before the main launch.
              </p>
            </Accordion>
            <Accordion question="Who is the Wander Women NFT project for?">
              Anyone who identifies as woman or non-binary, as well as allies
              who would like to build products and services with the community.
              We have talented women across all industries and fields in our
              community. Imagine if we leveraged everyone's strengths to build
              the things we want to see in the world!
            </Accordion>
            <Accordion question="What is the treasury breakdown?">
              <h4 className="margin-bottom">A. Primary sales from mint:</h4>
              <ul>
                <li>75% goes to fund the DAO</li>
                <li>10% goes to the team of artists</li>
                <li>9% goes to the team of operations &amp; marketing</li>
                <li>3% goes to the developer</li>
                <li>2% goes to advisors</li>
                <li>1% goes to a charity</li>
              </ul>
              <h4>B. Royalties from Secondary Sales: 10%</h4>
              <ul>
                <li>80% goes to fund the DAO</li>
                <li>20% goes to the team and operations</li>
              </ul>
            </Accordion>
            <Accordion question="Is Wander Women specifically focused on building in web3?">
              <p>
                No. We see web3 as a tool that we can use to organize and
                execute.
              </p>

              <p>
                We started off as a Facebook Community but quickly realized that
                we had so much talent in the community and so we looked for a
                way to organize this talent in productive ways that can help
                women achieve their wander goals.
              </p>

              <p>
                We believe a DAO's collective ownership is a great way to bring
                more women into building online, whether in web2 or web3:
              </p>

              <ul>
                <li>
                  <b>Access</b>: Anyone can contribute to a DAO. Conversations
                  and discords are open, so you don't need to get hired first to
                  know what's happening. Too many important conversations happen
                  behind closed doors without women at the table. When building
                  a DAO with intention, anyone can be at the decision table.
                </li>
                <li>
                  <b>Transparency</b>: Transactions are built on the blockchain.
                  Anyone can see where the money is flowing. DAOs also have
                  distributed decision-making power distributed and members or
                  contributors vote on decisions all public on the blockchain.
                </li>
                <li>
                  <b>Flexibility</b>: Contribute as much as you want, no need to
                  get tied up with one full-time 9-5 job. This is huge for women
                  who are moms or may be more risk-averse and want to dip their
                  toes in before jumping in.
                </li>
                <li>
                  <b>Ownership</b>: Contributors are owners. This is different
                  from startup equity because NFTs are liquid (no need to wait
                  for sale or IPO) and it's not gated (you can support projects
                  that you aren't employed at). Everyone has skin in the game
                  wanting the project to succeed.
                </li>
              </ul>
              <p>
                That being said, the projects we build will not necessarily be
                in web3. We find ourselves at the intersection of travel, tech,
                and art. If this is something exciting to you, we encourage
                community members to submit proposals on what we can build as a
                collective!
              </p>

              <p>
                It depends. By using the structure of the DAO, we're opening the
                opportunities to build together and to vote as a community for
                project proposals that we'll fund. These projects can be from
                web2 or web3, but it must be aligned with our mission. We find
                ourselves at the intersection of travel, tech, and art—this is
                something exciting that we're building for long term.
              </p>
            </Accordion>
            <Accordion question="How do I become a contributor?">
              We always welcome more people to join in. We need help in so many
              areas on running the DAO, as well as building new projects. The
              best way to get started is to join our Discord, introduce
              yourself, and start contributing to the channels where we ask for
              feedback and help. In your introduction, please share your skills
              or what you would be excited to help with! Know that a DAO is just
              like any other business—we need help with marketing, partnerships,
              product, art, community, and more!
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "aboutBuildathon" && ("about" in tags)] { 
        "id": _id,
        title,
        highlight,
        description,
        tags
        }`;
  const text = await client.fetch(query);
  return {
    props: { text }
  };
};

export default Home;
