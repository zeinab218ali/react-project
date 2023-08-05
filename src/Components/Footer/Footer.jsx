import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
function MyFooter() {
  return (
    <footer className='footer-container'>
      <Container className='container-style'>
      <Link to='/activities' className='footer-link'>activities</Link>
      <Link to='/contact-us'className='footer-link'>contact-us</Link>
      </Container>
    </footer>
  );
}

export default MyFooter;
