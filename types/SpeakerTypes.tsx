interface ISpeakerType {
  id: string,
  image: string,
  name: string,
  role: string,
  description: string,
  email: string,
  linkedin: string,
  website: string
}

export interface ISpeakersListProps {
  speakers: ISpeakerType[]
}
