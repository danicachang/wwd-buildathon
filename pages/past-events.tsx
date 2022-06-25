import { IPastEventsProps } from '../types';
import { client, urlFor } from '../lib/client';
import Image from 'next/image';

const PastEvents = ({ events }: IPastEventsProps) => {
  console.log(events);
  return (
    <>
      {events.map((event) => (
        <div key={event.id}>
          <ul>
            <li>{event.title}</li>
            <li>
              {event.image && (
                <Image
                  src={urlFor(event.image).url()}
                  width="320"
                  height="320"
                />
              )}
            </li>
            <li>{event.description}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "pastEvents"] { 
    "id": _id,
    title,
    image,
    description,
    }`;
  const events = await client.fetch(query);
  return {
    props: { events }
  };
};

export default PastEvents;
