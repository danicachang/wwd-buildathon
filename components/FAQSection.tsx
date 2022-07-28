import Accordion from '../components/Accordion';
import { DarkBlueDownWaves } from './layout/Waves';

const FAQSection = ({ data }) => {
  return (
    <div className="blue padding">
      <div className="content">
        <h1 className="allcaps">FAQs</h1>
        <div className="black">
          {data.faq.map((qn) => {
            return (
              <Accordion key={qn.id} question={qn.question}>
                <p>{qn.description}</p>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
