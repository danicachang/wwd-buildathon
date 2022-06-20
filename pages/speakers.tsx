import SpeakersList from '../components/SpeakersList';
import { client } from '../lib/client';
import { ISpeakersListProps } from '../types/SpeakerTypes';

const Speakers = ({ speakers }: ISpeakersListProps) => {
  return (
    <>
      <h1>Speaker Page</h1>
      <SpeakersList speakers={speakers} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "speaker"] { 
    "id": _id, 
    image,
    name, 
    role,
    description,
    "email": socials.email,
    "linkedin": socials.linkedin,
    "website": socials.website
    }`;
  const speakers = await client.fetch(query);
  return {
    props: { speakers },
  };
};

export default Speakers;
