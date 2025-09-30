import { Routes, Route } from 'react-router-dom';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Sidebar from './components/Sidebar';
import Home from './components/Home'; // This is the correct "Home" component to use
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

// The old "const Home" that was here has been deleted to fix the error.

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <Routes>
            {/* This route now correctly uses the imported Home component */}
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