import { PortableText } from '@portabletext/react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { urlFor } from '../lib/client';

const SpeakersList = ({ category, speakers }) => {
  return (
    <>
      {speakers.map((speaker) => {
        return (
          <div className="padding" key={speaker.id}>
            {speaker.image && (
              <img
                src={urlFor(speaker.image).quality(100).url()}
                alt="{member.name}"
                className="circle border"
                width="300px"
                height="300px"
              />
            )}
            <div>
              <h3 className="margin-top">{speaker.name}</h3>
              <h6 className="allcaps noMargin">{speaker.role}</h6>
              {speaker.descriptions && (
                <PortableText value={speaker.descriptions} />
              )}
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
