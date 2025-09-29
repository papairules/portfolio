import { education } from '../data';

function Education() {
  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.university}</h3>
          <p>
            <strong>{edu.degree}</strong>
            {edu.dates && ` | ${edu.dates}`}
          </p>
          {edu.details && <p>{edu.details}</p>}
        </div>
      ))}
    </section>
  );
}

export default Education;