import { urlFor } from '../lib/client';
const PastEventsSection = ({ data }) => {
  return (
    <section className="blue">
      <div className="content center">
        <h1 className="allcaps">Past Events</h1>
        <div className='flex flex-wrap responsive-2-columns flex-center'>
          {data.pastEvents.map((event) => (
            <div className='thumbnail' key={event.id}>
              <a href="/">
                {event.image &&
                  <div className='backgroundImage' style={{ 'backgroundImage': 'url(' + urlFor(event.image).url() + ')' }}></div>
                }
                <div className='title'>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
