interface IImageType {
  asset: any
}

interface IOtherNewsType {
  id: string,
  title: string,
  gallery: {
    images: IImageType[]  
  },
  highlight: string,
  description: string,
}

export interface IOtherNewsProps {
  events: IOtherNewsType[]
}
