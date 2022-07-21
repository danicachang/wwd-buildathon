import { client, urlFor } from '@/lib/client';

const TalksComponent = ({ speakers }) => {
  return (
    <>
      {speakers.map((speaker) => (
        <div className="padding flex flex-start flex-v-start" key={speaker.id}>
          <img
            src={urlFor(speaker.image.asset).size(50, 50).url()}
            alt="{member.name}"
            className="padding circle"
          />
          <div>
            <h3>{speaker.title}</h3>
            <h6>by {speaker.name}</h6>
            <p>{speaker.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export const Talks = ({ talks }: any) => {
  return (
    <>
      <section className="pink">
        <div className="content meet-team">
          <h1 className="allcaps center">Speaker Track</h1>
          {talks.specialSpeakerCategory.map((category) => (
            <>
              <h1 key={category.id}>{category.name}</h1>
              <TalksComponent
                speakers={talks.speakerTrack.filter((speaker) =>
                  speaker.category.includes(category.name)
                )}
              />
            </>
          ))}
        </div>
      </section>
      <section className="teal">
        <div className="content meet-team">
          {talks.speakerCategory.map((category) => (
            <>
              <h1 key={category.id}>{category.name}</h1>
              <TalksComponent
                speakers={talks.speakerTrack.filter((speaker) =>
                  speaker.category.includes(category.name)
                )}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const query = `{
    'specialSpeakerCategory': *[_type == "speakerCategory" && paid] | order(lower(category)) { 
      "id": _id, 
      "name": category,
    },
    'speakerCategory': *[_type == "speakerCategory" && paid != true] | order(lower(category)) { 
      "id": _id, 
      "name": category,
    },
    'speakerTrack': *[_type == "speakerTrack"] | order(lower(speakerCategory) asc, lower(speaker) asc) { 
      "id": _id, 
      title,
      description, 
      "name": speaker->name,
      "image": speaker->image,
      "category": speakerCategory->category
    },
  }`;
  const talks = await client.fetch(query);
  return {
    props: { talks }
  };
};
export default Talks;
