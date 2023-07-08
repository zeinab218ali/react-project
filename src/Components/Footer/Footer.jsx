import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyFooter() {
  return (
    <footer>
      <Container style={{background: '#000',display: 'flex', justifyContent: 'space-evenly', height: '100px', alignItems: 'center'}}>
      <Link to='/activities'>activities</Link>
      <Link to='/contact-us'>contact-us</Link>
      </Container>
    </footer>
  );
}

export default MyFooter;
