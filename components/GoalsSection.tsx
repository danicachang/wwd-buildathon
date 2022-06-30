import { PortableText } from '@portabletext/react';
import jellyfish from '../images/Jellyfish.png';
import pin from '../images/Pin.png';
import submarine from '../images/Submarine.png';
import octopusWoman from '../images/WomanWithOctopus.png';

const GoalsSection = ({ data }) => {
  return (
    <section className="teal">
      <div className="content narrow">
        <h1 className="allcaps center">{data.buildathonGoals[0].title}</h1>
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
            <PortableText value={data.buildathonGoals[0].description[0]} />
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
            <PortableText value={data.buildathonGoals[0].description[2]} />
          </div>
        </div>
        <div className="flex padding-v relative flex-mobile-col">
          <img src={pin.src} className="roadmap-icon" alt="pin icon" />
          <div className="transparent-gradient roadmap-background">
            <img src={jellyfish.src} alt="Two jellyfish" />
          </div>
          <div className="roadmap-text">
            <PortableText value={data.buildathonGoals[0].description[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
