import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-white fs-4">Avijit Gorai</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#summary" className="nav-link-custom">Summary</Nav.Link>
            <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
            <Nav.Link href="#educations" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#certification" className="nav-link-custom">Certifications</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
