import { PortableText } from '@portabletext/react';
import NFT from '../images/CoverImage.png';
import { BlueDownWaves, TealDownWaves } from './layout/Waves';

const AboutUsSection = ({ data }) => (
  <div className="teal">
    <BlueDownWaves />
    <div className="content">
      <h1 className="allcaps center padding-v">{data.about[0].title}</h1>
      <div className="flex responsive-2-columns flex-wrap">
        <div className="padding larger black">
          <PortableText value={data.about[0].description} />
        </div>
        <div className="flex-mobile-order-first padding">
          <img src={NFT.src} className="fullWidth" alt="Wander Women DAO NFT" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUsSection;
