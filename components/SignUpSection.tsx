import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import NFT from '../images/CoverImage.png';
import { PinkDownWaves } from './layout/Waves';

const SignUpSection = () => {
  return (
    <section className="darkBlue">
      <PinkDownWaves />
      <div className="content" style={{ paddingBottom: '10%' }}>
        <h1 className="center">Sign up for our event now!</h1>
        <div className="center">
          <Link
            href="https://www.eventbrite.sg/e/wander-women-business-buildathon-tickets-384669997317 "
            passHref={true}
          >
            <button className="pink margin-top fullWidth-mobile">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
