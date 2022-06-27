import outdoors from '../images/Outdoors.png';
import { PortableText } from '@portabletext/react';


const PartnerSection = ({data}) => {
  return (
    <section className="teal">
      <div className="content">
        <h1 className="allcaps center">
          {data.partnerships[0].title}
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
            <PortableText value={data.partnerships[0].description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
