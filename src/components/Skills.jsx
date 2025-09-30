import { skillsData } from '../data';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="skills-category">
          <h3>{category.category}</h3>
          {category.subCategories.map((subCategory, subIndex) => (
            <div key={subIndex} className="skills-subcategory">
              <h4>{subCategory.title}</h4>
              <div className="skills-list">
                {subCategory.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Skills;