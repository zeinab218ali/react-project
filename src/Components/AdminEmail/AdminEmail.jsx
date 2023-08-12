import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Outlet, useNavigate, useNavigation, useLocation, useSearchParams } from 'react-router-dom';

import axios from 'axios';
import './AdminEmail.css';

const AdminEmail = () => {
  const [email, setEmail] = useState('');
  // const [universityId, setUniversityId] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchParams)
    try {
      const response = await axios.post('http://192.168.1.111:4000/send-email', {
        email:  searchParams.email,
        // universityId,
        text,
      });
      // console.log('Complaint submitted:', response.data);

      // Reset form fields
    //   setName('');
    //   setUniversityId('');
    //   setComplaint('');
      navigate('/registerRequest')
      // Display a success message or take appropriate action
      // alert('Complaint submitted successfully!');
    } catch (error) {
      console.log('Error submitting complaint:', error);

      // Display an error message or take appropriate action
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Container className="complaint-form-container">
      <div className="complaint-form">
        <h1>Send a message</h1>
        <Form onSubmit={handleSubmit}>
          {/* <Form.Group controlId="name">
            <Form.Label>Student Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group> */}
          {/* <Form.Group controlId="universityId">
            <Form.Label>University ID:</Form.Label>
            <Form.Control
              type="text"
              value={universityId}
              onChange={(e) => setUniversityId(e.target.value)}
              required
            />
          </Form.Group> */}
          <Form.Group controlId="complaint">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AdminEmail;

