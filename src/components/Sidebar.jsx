import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="/assets/profile-picture.jpg"
        alt="Abin Roy"
        className="profile-picture"
      />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          {/* We'll add Projects and Testimonials later */}
          {/* <li><Link to="/projects">Projects</Link></li> */}
          <li><Link to="/education">Education</Link></li>
          {/* <li><Link to="/testimonials">Testimonials</Link></li> */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;