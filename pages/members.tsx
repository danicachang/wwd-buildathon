import { ICoreMemberProps } from '@/types';
import { client } from '@/lib/client';

const Members = ({ coreMembers }: ICoreMemberProps) => {
  console.log(coreMembers);
  return (
    <>
      {coreMembers.map((member) => (
        <div key={member.id}>
          <ul>
            <li>{member.name}</li>
            <li>{member.role}</li>
            <li>{member.description}</li>
            <li>{member.twitter}</li>
            <li>{member.instagram}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "coreMember"] { 
    "id": _id,
    name,
    image,
    role,
    description,
    "twitter": socials.twitter,
    "instagram": socials.instagram,
    }`;

  const coreMembers = await client.fetch(query);
  return {
    props: { coreMembers }
  };
};

export default Members;
