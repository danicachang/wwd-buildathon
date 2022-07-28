import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import outdoors from '../images/Outdoors.png';
import { urlFor } from '../lib/client';
import { BlueDownWaves, DarkBlueDownWaves } from './layout/Waves';

const PartnerSection = ({ data }) => {
  return (
    <div className="blue">
      <DarkBlueDownWaves />
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
          <div className="flex responsive-3-columns flex-v-center flex-center flex-wrap padding-v">
            {data.partnerships
              .filter((partner) => partner.paid)
              .map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col flex-v-center padding"
                  style={{ height: '100%' }}
                >
                  <img
                    src={urlFor(partner.image).quality(100).url()}
                    alt={partner.name}
                    width="300px"
                  />
                </div>
              ))}
          </div>
          <div className="flex responsive-3-columns flex-v-center flex-center flex-wrap padding-v">
            {data.partnerships
              .filter((partner) => !partner.paid)
              .map((partner) => (
                <div key={partner.id} className="flex flex-center padding">
                  {partner.scale ? (
                    <img
                      src={urlFor(partner.image).quality(100).url()}
                      alt={partner.name}
                      width="400px"
                    />
                  ) : (
                    <img
                      src={urlFor(partner.image).quality(100).url()}
                      alt={partner.name}
                      width="150px"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
