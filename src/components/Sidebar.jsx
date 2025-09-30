import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on route change on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
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
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;