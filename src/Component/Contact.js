import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import '../App.css';

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center text-white">
        <h2 className="mb-4 fw-bold text-warning">Contact Me</h2>
        <p className="mb-5">I'd love to hear from you! Feel free to reach out via email or social media.</p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card contact-card p-4 shadow border-0 bg-dark bg-opacity-75">
              <div className="card-body">
                <p className="contact-info mb-3">
                  <FaEnvelope className="me-2 text-warning" />
                  <a href="mailto:example@example.com">example@example.com</a>
                </p>
                <p className="contact-info mb-3">
                  <FaPhoneAlt className="me-2 text-warning" />
                  <a href="tel:+1234567890">+1 234 567 890</a>
                </p>
                <p className="contact-info mb-3">
                  <FaMapMarkerAlt className="me-2 text-warning" />
                  Kolkata, India
                </p>
                <p className="contact-info">
                  <FaLinkedin className="me-2 text-warning" />
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/yourprofile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
