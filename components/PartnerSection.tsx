import { PortableText } from '@portabletext/react';
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
        <div>
          {data.partnerships.map((partner) => (
            <>
              {partner.image && (
                <img
                  src={urlFor(partner.image).url()}
                  alt={partner.name}
                  className="circle"
                  width="200px"
                />
              )}
              <h3 className="margin-top">{partner.name}</h3>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
