interface IPastEventsType {
  id: string,
  title: string,
  image: string,
  description: string,
}

export interface IPastEventsProps {
  events: IPastEventsType[]
}
