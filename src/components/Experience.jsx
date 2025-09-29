// src/components/Experience.jsx
import { professionalExperience } from '../data';

function Experience() {
  return (
    <section>
      <h2>Professional Experience</h2>
      {professionalExperience.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.role}</h3>
          <p>
            <strong>{job.company}</strong> | {job.location}
          </p>
          <p>{job.dates}</p>
          <ul>
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;