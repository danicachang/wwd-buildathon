import Link from 'next/link';

import NFTPreview from '../images/CoverImage.png';
import logo from '../images/WWD-logo.png';
import { TealUpWaves } from './layout/Waves';

const HeroSection = ({ data }) => {
  return (
    <section className="darkBlue">
      <div className="hero content flex flex-space-between flex-mobile-col responsive-2-columns">
        <div>
          <img
            src={logo.src}
            alt="Wander Women DAO Logo"
            className="tablet-desktop margin-bottom"
            width="75"
          />
          <h2>{data.aboutBuildathon[0].highlight}</h2>
          <h4>
            {data.buildathonPeriod[0].startDate} -{' '}
            {data.buildathonPeriod[0].endDate}
          </h4>

          <Link
            href="https://www.eventbrite.sg/e/wander-women-business-buildathon-tickets-384669997317 "
            passHref={true}
          >
            <button className="pink margin-top fullWidth-mobile">
              Sign Up
            </button>
          </Link>
        </div>
        <div
          className="flex-mobile-order-first padding-h marginCenter"
          style={{ maxWidth: '480px' }}
        >
          <img
            src={NFTPreview.src}
            className="limitWidth"
            alt="Wander Women DAO NFT"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
