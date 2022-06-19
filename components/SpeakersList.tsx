function SpeakersList({ speakers }) {
  return (
    <>
      <h1>Speaker Component</h1>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(speakers)}
      </div>
    </>
  );
}

export default SpeakersList;
