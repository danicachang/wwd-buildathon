import ScheduleList from '../components/ScheduleList';
import { client } from '../lib/client';

export const getServerSideProps = async () => {
  const query = `*[_type == "schedule"] { 
    activity,
    dateTime,
    "speakerName": speaker->name
    }`;
  const schedule = await client.fetch(query);
  return {
    props: { schedule },
  };
};

export function Schedule({ schedule }) {
  return (
    <>
      <h1>Schedule Page</h1>
      <ScheduleList schedule={schedule} />
    </>
  );
}

export default Schedule;
