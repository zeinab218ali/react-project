import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">My Website</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
