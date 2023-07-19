import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the complaint data, such as sending it to a server or storing it in a database
    console.log('Submitting complaint:', { name, universityId, complaint });

    // Reset form fields
    setName('');
    setUniversityId('');
    setComplaint('');
  };

  return (
    <Container className="complaint-form-container">
      <div className="complaint-form">
        <h1>Submit a Complaint</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Student Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="universityId">
            <Form.Label>University ID:</Form.Label>
            <Form.Control
              type="text"
              value={universityId}
              onChange={(e) => setUniversityId(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="complaint">
            <Form.Label>Complaint:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ComplaintForm;
