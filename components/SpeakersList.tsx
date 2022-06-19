import { ISpeakersListProps } from "../types/SpeakerTypes";

const SpeakersList = ({ speakers }: ISpeakersListProps) => {
  console.log(speakers)
  return (
    <>
      <h1>Speaker Component</h1>
      {speakers.map((speaker) => {
        return (
          <div key={speaker.id}>
            <ul>
              <li>{speaker.image}</li>
              <li>{speaker.name}</li>
              <li>{speaker.role}</li>
              <li>{speaker.description}</li>
              <li>{speaker.email}</li>
              <li>{speaker.linkedin}</li>
              <li>{speaker.website}</li>
            </ul>
          </div>
        )
      })}
    </>
  );
}

export default SpeakersList;
