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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;