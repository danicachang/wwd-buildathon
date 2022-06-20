import { IPricingTableTypeProps } from '../types/PricingTypes';
import { client } from '../lib/client';

const Pricing = ({ pricingTable }: IPricingTableTypeProps) => {
  console.log(pricingTable)
  return (
  <>
    {pricingTable.map((category) => (
        <div key={category.id}>
          <ul>
            <li>{category.title}</li>
            <li>${category.pricing}</li>
            <li>{category.dateFrom}</li>
            <li>{category.dateTill}</li>
          </ul>
        </div>
      ))
      }
  </>
  )
}
            
export const getServerSideProps = async () => {
  const query = `*[_type == "ticket"] | order(dateFrom) { 
    "id": _id,
    title,
    pricing,
    dateFrom,
    dateTill
    }`;
  const pricingTable = await client.fetch(query);
  return {
    props: { pricingTable },
  };
};

export default Pricing;
            
