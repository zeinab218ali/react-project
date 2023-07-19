import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/students'); // Replace YOUR_BACKEND_API_ENDPOINT with your actual backend API endpoint
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Student Registration Requests</h1>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <p>Student Name: {student.name}</p>
              <p>Student ID: {student.id}</p>
              {/* Confirm button to move the student to the active users database */}
              <button onClick={() => handleConfirm(student.id)}>Confirm</button>
              {/* Reject button to delete the registration request for the student */}
              <button onClick={() => handleReject(student.id)}>Reject</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No registration requests at the moment</p>
      )}
    </div>
  );
}

export default RegisterForm;
