import { ISpeakersListProps } from "../types/SpeakerTypes";

import Image from 'next/image';
import { urlFor } from '../lib/client';
const SpeakersList = ({ speakers }: ISpeakersListProps) => {
  console.log(speakers)
  return (
    <>
      <h1>Speaker Component</h1>
      {speakers.map((speaker) => {
        return (
          <div key={speaker.id}>
            <ul>
              <Image src={urlFor(speaker.image)
                .url()} width="320" height="320" />
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
