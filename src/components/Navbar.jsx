import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Abin Roy
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu-items">
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experience" className="nav-links" onClick={closeMenu}>
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-links" onClick={closeMenu}>
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-links" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/education" className="nav-links" onClick={closeMenu}>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/testimonials" className="nav-links" onClick={closeMenu}>
                Testimonials
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;