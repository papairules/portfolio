import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div id="root">
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

      <main>
        <Experience />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

export default App;