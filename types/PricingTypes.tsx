interface IPricingType {
  id: string,
  title: string,
  pricing: string,
  dateFrom: string,
  dateTill: string
}

export interface IPricingTableTypeProps {
  pricingTable: IPricingType[]
}
