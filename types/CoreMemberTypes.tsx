interface ICoreMemberType {
  id: string,
  image: string,
  name: string,
  role: string,
  description: string,
  twitter: string,
  instagram: string
}

export interface ICoreMemberProps {
  coreMembers: ICoreMemberType[]
}