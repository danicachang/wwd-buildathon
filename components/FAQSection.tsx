import Accordion from '../components/Accordion';

const FAQSection = ({ data }) => {
  return (
    <section className="blue">
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
    </section>
  );
};

export default FAQSection;
