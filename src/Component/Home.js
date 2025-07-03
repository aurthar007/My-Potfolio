import React from 'react';
import Typical from 'react-typical';
import '../App.css';
import resumePDF from '../assets/resume.pdf.pdf'; 
function Home() {
  return (
    <section id="home" className="hero-section-advanced d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="display-4 fw-bold mb-3 animate-fade">
          Hi, I’m <span className="highlight-name">Avijit Gorai</span>
        </h1>
        <h4 className="typing-text mb-4">
          <Typical
            steps={['Frontend Developer', 2000, 'React.js Enthusiast', 2000, 'UI/UX Explorer', 2000]}
            loop={Infinity}
            wrapper="span"
          />
        </h4>

        <a
          href={resumePDF}
          download
          className="btn btn-outline-light btn-lg px-4 py-2 me-2 shadow hover-glow"
        >
          Download Resume
        </a>

        <div className="scroll-indicator mt-5">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
