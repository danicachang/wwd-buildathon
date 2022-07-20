import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { urlFor } from '../lib/client';
import { ISpeakersListProps } from '../types/SpeakerTypes';

const SpeakersList = ({ category, speakers }) => {
  return (
    <>
      {speakers.map((speaker) => {
        return (
          <div className="padding" key={speaker.id}>
            {speaker.image && (
              <img
                src={urlFor(speaker.image).size(200, 200).url()}
                alt="{member.name}"
                className="circle"
                width="200px"
              />
            )}
            <div>
              <h3 className="margin-top">{speaker.name}</h3>
              <h6 className="allcaps noMargin">{speaker.role}</h6>
              {speaker.description && <p>{speaker.description}</p>}
              {speaker.email && (
                <a
                  href={'mailto:' + speaker.email}
                  target="_blank"
                  rel="noreferrer"
                  className="padding-small alternateHover"
                  aria-label={speaker.name + "'s Email"}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              )}
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="padding-small alternateHover"
                  aria-label={speaker.name + "'s LinkedIn"}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {speaker.website && (
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noreferrer"
                  className="padding-small alternateHover"
                  aria-label={speaker.name + "'s Website"}
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SpeakersList;
