import SpeakersList from './SpeakersList';

const SpeakersSection = ({ data }) => {
  return (
    <>
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
        </div>
      </section>
    </>
  );
};

export default SpeakersSection;
