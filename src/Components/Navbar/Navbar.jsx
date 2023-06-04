import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS file

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">My Website</Navbar.Brand>
      <Nav >
        <Link to="/" className="nav-link ">Home</Link>
        <Link to="/Login" className="nav-link">Login</Link>
        <Link to="/Register" className="nav-link">Register</Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
