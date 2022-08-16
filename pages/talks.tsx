import { client, urlFor } from '@/lib/client';

const TalksComponent = ({ speakers }) => {
  return (
    <>
      {speakers.map((speaker) => (
        <div
          className="padding flex flex-start flex-v-start flex-mobile-col"
          key={speaker.id}
        >
          <div className="circle flex-mobile-center">
            <img
              src={urlFor(speaker.image.asset)
                .crop('focalpoint')
                .quality(100)
                .url()}
              alt="{member.name}"
              className="circle border margin-h"
              width="200px"
              height="200px"
              style={{ objectFit: 'cover' }}
            />
            {/* <img
              src={urlFor(speaker.image.asset).quality(100).url()}
              alt="{member.name}"
              className="circle border margin-h"
              width="100px"
              height="100px"
            /> */}
          </div>
          <div>
            <h3>
              {speaker.title} by {speaker.name}
            </h3>
            {speaker.dateTime && (
              <h5>{new Date(speaker.dateTime).toString()}</h5>
            )}
            <p>{speaker.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export const Talks = ({ talks }: any) => {
  console.log(talks);
  return (
    <>
      <section className="pink">
        <div className="content meet-team">
          <h1 className="allcaps center">Speaker Track</h1>
          {talks.specialSpeakerCategory.map((category) => (
            <div key={category._id}>
              <h1 key={category.id}>{category.name}</h1>
              <TalksComponent
                speakers={talks.speakerTrack.filter((speaker) =>
                  speaker.category.includes(category.name)
                )}
              />
            </div>
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
      dateTime,
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
