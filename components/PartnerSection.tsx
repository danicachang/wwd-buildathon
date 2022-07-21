import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import outdoors from '../images/Outdoors.png';
import { urlFor } from '../lib/client';

const PartnerSection = ({ data }) => {
  return (
    <section className="blue">
      <div className="content">
        <h1 className="allcaps center">{data.aboutPartnerships[0].title}</h1>
        <div className="flex flex-mobile-col">
          <div className="mintingImage">
            <img
              src={outdoors.src}
              alt="Outdoors Background"
              className="fullWidth"
            />
          </div>
          <div className="padding-h larger">
            <PortableText value={data.aboutPartnerships[0].description} />
            <Link href="https://docs.google.com/presentation/d/1q4STB0d29OUhPYjJID7-h1ArNycrlDRPH0DF7r4zfos/present?slide=id.p">
              Read Our Sponsorship Deck
            </Link>
          </div>
        </div>
        <div className="padding">
          <h2 className="allcaps center margin-top padding">Our Partners</h2>
          <div className="flex responsive-3-columns flex-v-center flex-center flex-wrap">
            {data.partnerships
              .filter((partner) => partner.paid)
              .map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col flex-v-center padding"
                  style={{ height: '100%' }}
                >
                  <img
                    src={urlFor(partner.image).width(300).url()}
                    alt={partner.name}
                  />
                </div>
              ))}
          </div>
          <div className="padding flex responsive-3-columns flex-v-center flex-wrap">
            {data.partnerships
              .filter((partner) => !partner.paid)
              .map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col flex-v-center padding"
                >
                  <img
                    src={urlFor(partner.image).width(150).url()}
                    alt={partner.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
