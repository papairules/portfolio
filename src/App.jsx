import { Routes, Route } from 'react-router-dom';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

const Home = () => (
  <header id="home">
    <h1>Abin Roy</h1>
    <p>+1 2146776571 | abinroy90@gmail.com</p>
    <a href="https://www.linkedin.com/in/abinroy/" target="_blank" rel="noopener noreferrer">
      LinkedIn Profile
    </a>
    <h2>Profile Summary</h2>
    <p>
      A results-driven Al/ML and business analytics professional with a decade of experience across diverse domains...
    </p>
  </header>
);

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;