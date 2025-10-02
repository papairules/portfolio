import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // FaGithub has been removed
import './Home.css';
import profilePic from '../assets/profile-picture.jpg';

function Home() {
  return (
    <div className="home-container">
      <img src={profilePic} alt="Abin Roy" className="home-picture" />
      <TypeAnimation
        sequence={[
          'AI & Machine Learning Engineer',
          2000,
          'Data Scientist',
          2000,
          'Business Analytics Professional',
          2000,
        ]}
        wrapper="div"
        speed={50}
        className="animated-subtitle"
        repeat={Infinity}
      />
      <p className="home-intro">
        I architect intelligence. For over a decade, I have engineered data-driven solutions that solve complex business challenges—from optimizing global enterprises to building the next generation of AI agents. Welcome to my portfolio.
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/abinroy/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        {/* The GitHub link that was here has been removed. */}
        <a href="mailto:abinroy90@gmail.com"><FaEnvelope /></a>
      </div>
    </div>
  );
}

export default Home;