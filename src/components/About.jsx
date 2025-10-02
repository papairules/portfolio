import './About.css';

// Import images from src/assets
import aetnaLogo from '../assets/aetna.png';
import mrcooperLogo from '../assets/mrcooper.png';
import rsaLogo from '../assets/rsa.png';
import virginAtlanticLogo from '../assets/virgin-atlantic.png';
import vodafoneLogo from '../assets/vodafone.png';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        For the past decade, I've operated at the nexus of data, technology, and business strategy. My career has been a story of evolution—from mastering the intricacies of business intelligence to architecting the next generation of Artificial Intelligence solutions.
      </p>
      <p>
        Across dynamic sectors like aviation, telecommunications, and finance, my focus has always been on translating complex challenges into elegant, data-driven solutions. I have had the privilege of developing these solutions for industry leaders including <span className="highlight">Virgin Atlantic, Vodafone, Royal & Sun Alliance, Aetna, and Mr. Cooper</span>. My core philosophy is that data is only as valuable as the impact it creates. I specialize in building systems that deliver quantifiable results, whether it's engineering an AI agent projected to save over $1 million annually or implementing dashboards that cut reporting time by nearly 45%.
      </p>
      <p>
        As a <span className="highlight">Machine Learning Engineer</span>, I am now deepening my expertise as a <span className="highlight">Master of Science in Business Analytics and AI</span> candidate at The University of Texas at Dallas, where I was awarded the Dean's Excellence Scholarship. My recent work involves engineering sophisticated Agentic AI systems with frameworks like Google ADK and models like Gemini 1.5 Flash, pushing the boundaries of intelligent automation and data interaction.
      </p>
      <p>
        I am passionate about solving ambitious problems and building the intelligent systems that will create significant business impact.
      </p>

      <div className="clients-section">
        <h3>Clients Served</h3>
        <div className="logo-container">
          <img src={aetnaLogo} alt="Aetna" />
          <img src={mrcooperLogo} alt="Mr. Cooper" />
          <img src={rsaLogo} alt="RSA" />
          <img src={virginAtlanticLogo} alt="Virgin Atlantic" />
          <img src={vodafoneLogo} alt="Vodafone" />
        </div>
      </div>
    </section>
  );
}

export default About;
