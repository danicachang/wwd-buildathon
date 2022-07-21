import Link from 'next/link';

import SpeakersList from './SpeakersList';

const getLocalDate = (dateString) => {
  const localDate = new Date(dateString);
  return localDate.toString();
};

const ScheduleSection = ({ data }) => {
  return (
    <>
      <section className="darkBlue">
        <div className="content meet-team">
          <h1 className="allcaps center">Schedule</h1>
          <div>
            <iframe
              src="https://airtable.com/embed/shrrFOJMsFQeN2TsZ?backgroundColor=cyan&viewControls=on"
              width="100%"
              height="533"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;
