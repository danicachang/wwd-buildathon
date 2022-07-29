import Link from 'next/link';

import { DarkBlueUpWaves, PinkDownWaves, TealDownWaves, TealUpWaves } from './layout/Waves';
import SpeakersList from './SpeakersList';

const SpeakersSection = ({ data }) => {
  return (
    <div className="pink">
      <TealDownWaves />
      <section className="pink">
        <div className="content meet-team">
          <h1 className="allcaps center">Speakers</h1>
          {data.specialSpeakerCategory.map((category) => (
            <div key={category.id} className="padding">
              <h2>{category.name}</h2>
              <div className="flex responsive-3-columns flex-wrap">
                <SpeakersList
                  category={category.name}
                  speakers={data.speakers.filter((speaker) =>
                    speaker.category.includes(category.name)
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="teal">
        <PinkDownWaves />
        <div className="content meet-team">
          {data.speakerCategory.map((category) => (
            <div key={category.id} className="padding">
              <h2>{category.name}</h2>
              <div className="flex responsive-3-columns flex-wrap">
                <SpeakersList
                  category={category.name}
                  speakers={data.speakers.filter((speaker) =>
                    speaker.category.includes(category.name)
                  )}
                />
              </div>
            </div>
          ))}
          <div className="center">
            <Link href="/talks">
              <a>View our talks</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersSection;
