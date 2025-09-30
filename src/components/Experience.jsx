import { professionalExperience } from '../data';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2>My Professional Journey</h2>
      <p className="experience-intro">
        In this section, I share stories from my career where I've had the opportunity to tackle complex data challenges. Each role was a unique journey in leveraging technology to create value, drive efficiency, and provide clarity through data.
      </p>

      {professionalExperience.map((job, index) => (
        <div key={index} className="job-entry">
          <div className="job-header-with-logo">
            {job.logo && <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />}
            <div>
              <h3>{job.role} | {job.company}</h3>
              <p className="job-meta">{job.location} | {job.dates}</p>
            </div>
          </div>
          <p className="job-intro">{job.intro}</p>

          {job.projects.map((project, projIndex) => (
            <div key={projIndex} className="project-showcase">
              {project.title && <h4>{project.title}</h4>}

              {project.challenge && (
                <div className="project-section">
                  <h5>The Challenge / The Mission</h5>
                  <p>{project.challenge.replace("The Mission: ", "")}</p>
                </div>
              )}

              {project.solution && (
                <div className="project-section">
                  <h5>My Solution / The Impact</h5>
                  <p>{project.solution.replace("The Impact: ", "")}</p>
                </div>
              )}

              {project.outcome && (
                <div className="project-section">
                  <h5>The Outcome</h5>
                  <p>{project.outcome}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Experience;