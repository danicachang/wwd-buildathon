import SpeakersList from '../components/SpeakersList';
import { client } from '../lib/client';

export const getServerSideProps = async () => {
  const query = `*[_type == "speaker"] { 
    name, role
    }`;
  const speakers = await client.fetch(query);
  return {
    props: { speakers },
  };
};

function Speakers({ speakers }) {
  return (
    <>
      <h1>Speaker Page</h1>
      <SpeakersList speakers={speakers} />
    </>
  );
}

export default Speakers;
