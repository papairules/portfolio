import { technicalSkills } from '../data';

function Skills() {
  return (
    <section>
      <h2>Technical Skills</h2>
      {technicalSkills.map((item, index) => (
        <div key={index}>
          <h3>{item.category}</h3>
          <p>{item.skills}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;