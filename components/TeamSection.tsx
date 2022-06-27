import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { urlFor } from '../lib/client';

const TeamSection = ({data}) => {
  return (
    <section className="pink">
      <div className="content meet-team">
        <h1 className="allcaps center">Meet the Team</h1>
        <div className="flex responsive-3-columns flex-wrap">
          {data.members.map((member) => (            
            <div className="padding" key={member.id}>
              {member.image &&
                <img src={urlFor(member.image).url()} alt="{member.name}" className="circle" width="200px" />
              }
              <h3 className="margin-top">{member.name}</h3>
              <h6 className="allcaps noMargin">{member.role}</h6>
              {member.description && 
                <p>{member.description}</p>
              }
              {member.twitter && 
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="padding-small alternateHover"
                  aria-label={member.name + "'s Twitter"}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              }
              {member.instagram && 
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="padding-small alternateHover"
                  aria-label={member.name + "'s Instagram"}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
