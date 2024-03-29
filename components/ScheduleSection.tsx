import { BlueUpWaves, TealDownWaves } from './layout/Waves';

const ScheduleSection = ({ data }) => {
  return (
    <div className="darkBlue">
      <TealDownWaves />
      <div className="content">
        <h1 className="allcaps center padding-v">Schedule</h1>
        <h6 className="center padding-v">
          timings are displayed in your timezone
        </h6>
        <div>
          <iframe
            src="https://airtable.com/embed/shrrFOJMsFQeN2TsZ?backgroundColor=cyan&viewControls=on"
            width="100%"
            height="533"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
