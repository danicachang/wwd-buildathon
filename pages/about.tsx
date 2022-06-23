import { IAboutBuildathonProps } from '../types/AboutBuildathonTypes';
import { client } from '../lib/client';
import { PortableText, PortableTextReactComponents } from '@portabletext/react'

const myPortableTextComponents:Partial<PortableTextReactComponents> = {
  types: {
    image: ({value}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

const AboutBuildathon = ({ text }: IAboutBuildathonProps) => {
  console.log(text)
  return (
  <>
      {text.map((object) => {
        return (
          <div key={object.id}>
            <h1>{object.title}</h1>
            <h2>{object.highlight}</h2>

            <PortableText
              value={object.description}
              components={myPortableTextComponents}
            />
          </div>
        )
      })}
          </>
        )
}
            
export const getStaticProps = async () => {
  const query = `*[_type == "aboutUs" && ("about" in tags)] { 
    "id": _id,
    title,
    highlight,
    description,
    tags
    }`;
  const text = await client.fetch(query);
  return {
    props: { text },
  };
};

export default AboutBuildathon;
            
