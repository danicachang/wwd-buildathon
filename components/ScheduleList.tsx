import { IScheduleListProps } from '../types/ScheduleTypes';

const ScheduleList = ({ schedule }: IScheduleListProps) => {
  console.log(schedule);
  return (
    <>
      <h1>Schedule Component</h1>
      {schedule.map((details) => {
        return (
          <div key={details.id}>
            <ul>
              <li>{details.activity}</li>
              <li>{details.dateTime}</li>
              <li>{details.speakerName}</li>
            </ul>
          </div>
        )
      })}
    </>
  );
}

export default ScheduleList;
