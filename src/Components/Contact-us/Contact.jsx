import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Contact.css';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT/complaints', {
        name,
        universityId,
        complaint,
      });
      console.log('Complaint submitted:', response.data);

      // Reset form fields
      setName('');
      setUniversityId('');
      setComplaint('');

      // Display a success message or take appropriate action
      alert('Complaint submitted successfully!');
    } catch (error) {
      console.log('Error submitting complaint:', error);

      // Display an error message or take appropriate action
      alert('An error occurred. Please try again.');
    }
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

