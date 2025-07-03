import React from 'react';
import '../App.css';
import profileImg from '../assets/Avi.jpg'; 

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">Frontend Developer</h4>
              <p className="text-muted">
                I’m a frontend developer with a passion for crafting beautiful and functional user interfaces.
                With strong experience in React.js, HTML5, CSS3, JavaScript, and Bootstrap, I build responsive
                and accessible web applications.
              </p>
              <p className="text-muted">
                Always learning and always building, I bring both creative and technical skills to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
