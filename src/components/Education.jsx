import { education } from '../data';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((edu, index) => {
        const progressPercentage = (edu.progress.completed / edu.progress.total) * 100;

        return (
          <div key={index} className="education-entry">
            <div className="education-header">
              {edu.logo && <img src={edu.logo} alt={`${edu.university} logo`} className="university-logo" />}
              <div className="education-header-text">
                <h3>{edu.university}</h3>
                <p>{edu.degree}</p>
                {edu.dates && <p>{edu.dates}</p>}
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
              </div>
            </div>
            
            <div className="education-details">
              {edu.details && <p className="details-text">{edu.details}</p>}

              {edu.courses && edu.courses.length > 0 && (
                <>
                  <h4>Relevant Coursework</h4>
                  <ul className="courses-list">
                    {edu.courses.map((course, i) => (
                      <li key={i} className="course-tag">{course}</li>
                    ))}
                  </ul>
                </>
              )}

              {edu.activities && edu.activities.length > 0 && (
                <>
                  <h4>Activities & Leadership</h4>
                  {edu.activities.map((activity, i) => (
                    <div key={i} className="activity">
                      <h5>{activity.role}</h5>
                      <p>{activity.organization}</p>
                      <ul>
                        {activity.description.map((desc, j) => (
                          <li key={j}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
              
              <div className="progress-bar-container">
                <p className="progress-bar-label">
                  Program Completion: {progressPercentage === 100 ? 'Completed' : `${edu.progress.completed} of ${edu.progress.total} credits`}
                </p>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Education;