import outdoors from '../images/Outdoors.png';
import { PortableText } from '@portabletext/react';


const AboutSection = ({data}) => {
  return (
    <section className="blue">
      <div className="content">
        <h1 className="allcaps center">
          Calling all Female Nomads, Expats, Remote Workers, and Wanderers
        </h1>
        <div className="flex flex-mobile-col">
          <div className="mintingImage">
            <img
              src={outdoors.src}
              alt="Outdoors Background"
              className="fullWidth"
            />
          </div>
          <div className="padding-h larger">
            <PortableText value={data.aboutBuildathon[0].description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
