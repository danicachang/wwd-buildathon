import { IOtherNewsProps } from '../types/OtherNewsTypes';
import { client, urlFor } from '../lib/client';
import Image from 'next/image';

const OtherNews = ({ events }: IOtherNewsProps) => {
  console.log(events)
  return (
  <>
    {events.map((event) => (
        <div key={event.id}>
          <ul>
            <li>{event.title}</li>
          {event.gallery.images.map((image) => {
            return (
              <>
                <Image src={urlFor(image.asset).url()} layout="responsive" width="20" height="10"/></>
            )
          })}
          <li>{event.highlight}</li>
            <li>{event.description}</li>
          </ul>
        </div>
      ))
      }
  </>
  )
}
            
export const getStaticProps = async () => {
  const query = `*[_type == "otherNews"] { 
    "id": _id,
    title,
    gallery,
    highlight,
    description,
    }`;
  const events = await client.fetch(query);
  return {
    props: { events },
  };
};

export default OtherNews;
            
