interface IAboutBuildathonType {
  id: string,
  title: string,
  highlight: string,
  description: string,
}

export interface IAboutBuildathonProps {
  text: IAboutBuildathonType[]
}
