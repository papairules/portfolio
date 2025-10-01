import { Routes, Route } from 'react-router-dom';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar /> {/* Use Navbar here instead of Sidebar */}
      <main className="main-content">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;