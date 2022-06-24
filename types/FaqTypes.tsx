interface IFaqType {
  id: string,
  question: string,
  description: string,
}

export interface IFaqProps {
  questions: IFaqType[]
}
