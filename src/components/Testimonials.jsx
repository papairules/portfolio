import { testimonialsData } from '../data';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <blockquote>"{testimonial.text}"</blockquote>
            <div className="testimonial-author">
              <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer">
                <span className="name">{testimonial.name}</span>
                <span className="title">{testimonial.title}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;