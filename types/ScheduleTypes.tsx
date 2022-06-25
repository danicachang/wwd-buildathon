interface IScheduleType {
  id: string;
  activity: string;
  dateTime: string;
  speakerName: string;
}

export interface IScheduleListProps {
  schedule: IScheduleType[];
}
