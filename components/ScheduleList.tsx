function ScheduleList({ schedule }) {
  return (
    <>
      <h1>Schedule Component</h1>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(schedule)}
      </div>
    </>
  );
}

export default ScheduleList;
