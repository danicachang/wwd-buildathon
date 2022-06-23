interface IImageType {
  images: any
}

interface IOtherNewsType {
  id: string,
  title: string,
  gallery: IImageType[],
  highlight: string,
  description: string,
}

export interface IOtherNewsProps {
  events: IOtherNewsType[]
}
