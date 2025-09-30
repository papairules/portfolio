import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <header>
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
          
          <Experience />
          <Skills />
          <Education />
        </div>
      </main>
    </div>
  );
}

export default App;