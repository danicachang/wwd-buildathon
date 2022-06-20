import ScheduleList from '../components/ScheduleList';
import { client } from '../lib/client';
import { IScheduleListProps } from '../types/ScheduleTypes';

export const Schedule = ({ schedule }: IScheduleListProps) => {
  return (
    <>
      <h1>Schedule Page</h1>
      <ScheduleList schedule={schedule} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "schedule"] | order(dateTime) { 
    "id": _id,
    activity,
    dateTime,
    "speakerName": speaker->name
    }`;
  const schedule = await client.fetch(query);
  return {
    props: { schedule },
  };
};
export default Schedule;
