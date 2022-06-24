import { IFaqProps } from '@/types';
import { client } from '@/lib/client';

const Faq = ({ questions }: IFaqProps) => {
  console.log(questions)
  return (
    <>
      <h1>FAQs</h1>
       {questions.map((qn) => {
        return (
          <div key={qn.id}>
            <h4>{qn.question}</h4>
            <p>{qn.description}</p>
          </div>
        )
      })}
    </>
  )
}
            
export const getStaticProps = async () => {
  const query = `*[_type == "faq"] | order(order) { 
    "id": _id,
    question,
    description,
    order
    }`;
  const questions = await client.fetch(query);
  return {
    props: { questions },
  };
};

export default Faq;
            
