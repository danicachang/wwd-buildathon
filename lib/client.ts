import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'w34m7f7u',
  dataset: 'production',
  apiVersion: '2022-06-19',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
console.log(builder)
export const urlFor = (source: string) => builder.image(source);
