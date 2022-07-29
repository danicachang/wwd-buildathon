import { PortableText } from '@portabletext/react';
import jellyfish from '../images/Jellyfish.png';
import outdoors from '../images/Outdoors.png';
import submarine from '../images/Submarine.png';
import { DarkBlueDownWaves } from './layout/Waves';

const AboutSection = ({ data }) => {
  return (
    <div className="teal">
      <DarkBlueDownWaves />
      <div className="flex flex-col">
        <div className="flex flex-v-center two-col flex-mobile-tablet-col-rev">
          <div className="flex flex-center flex-v-center two-col">
            <img
              src={submarine.src}
              alt="Submarine Background"
              className=""
              style={{ objectFit: 'fill' }}
              height="100%"
            />
          </div>
          <div className="flex flex-center one-col">
            <article className="">
              <h1 className="allcaps">Entrepreneurial</h1>
              <p>
                As a community, we want to focus on building products and
                services to help women globally achieve financial, location, and
                creative independence, we’re hoping to kickstart the
                entrepreneurial community spirit we aim to build within our
                community.
              </p>
            </article>
          </div>
        </div>

        <div className="flex flex-v-center two-col flex-mobile-tablet-col">
          <div className="flex flex-center one-col">
            <article className="textRight">
              <h1 className="allcaps">Network</h1>
              <p>
                Learn new business acumen from prominent speakers that have
                build their own companies! Pitch projects to the community and
                make new connections virtually and in real life.
              </p>
            </article>
          </div>
          <div className="flex flex-center flex-v-center two-col">
            <img
              src={jellyfish.src}
              alt="Jellyfish background"
              className=""
              style={{ objectFit: 'fill' }}
              height="100%"
            />
          </div>
        </div>

        <div className="blue hidden">
          <div className="content">
            <h1 className="allcaps center">{data.aboutBuildathon[0].title}</h1>
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
