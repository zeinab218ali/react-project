import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './RegisterRequest.css'
import { Button } from 'react-bootstrap';

function RegisterRequest() {
  const [students, setStudents] = useState([{
    id: 123,
    name: 'Zeinab Ali',
    email: 'zozo@gmail.com',
    province: 'Latakia',
    college: 'Informatics'
  },
  {
    id: 124,
    name: 'Zeinab Ali',
    email: 'zozo@gmail.com',
    province: 'Latakia',
    college: 'Informatics'
  }
  ]);

  const [affectedItems, setAffectedItems] = useState(0)
  const [isAdmin, setIsAdmin] = React.useState(localStorage.getItem("isAdmin") ==="true")
  // useEffect(() => {
  //   fetchStudents();
  // }, []);

  // const fetchStudents = async () => {
  //   try {
  //     //const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/students'); // Replace YOUR_BACKEND_API_ENDPOINT with your actual backend API endpoint
  //     // setStudents(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const students = [{
  //   id: 123,
  //   name: 'Zeinab Ali',
  //   email: 'zozo@gmail.com',
  //   province: 'Latakia',
  //   college: 'Informatics'
  // },
  // {
  //   id: 124,
  //   name: 'Zeinab Ali',
  //   email: 'zozo@gmail.com',
  //   province: 'Latakia',
  //   college: 'Informatics'
  // }
  // ]
  const handleAccept =  (id) => {
    // const response = await axios.post(`YOUR_BACKEND_API_ENDPOINT/accept/${id}`); 
    // if(response.status === 200){
      const index = students.findIndex(item => item.id ===  id)
      students.splice(index,1)
      // console.log(id, students, index)
      setStudents(students)
      setAffectedItems(affectedItems +1)
    // }
  }

  const handleReject =  (id) => {
    // const response = await axios.post(`YOUR_BACKEND_API_ENDPOINT/reject/${id}`); 
    // if(response.status === 200){
      const index = students.findIndex(item => item.id ===  id)
      
      students.splice(index,1)
      setStudents(students)
      setAffectedItems(affectedItems +1)
    // }
  }
  console.log(students)
  return (

    isAdmin ? <Table className='table' border={1} striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Province</th>
          <th>College</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
                <tr className='tableRow' key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.province}</td>
                  <td>{student.college}</td>
                  <td>
                    <Button onClick={()=> handleAccept(student.id)}>Accept</Button>
                    <Button onClick={()=> handleReject(student.id)}>Reject</Button>
                  </td>
                </tr>
        ))

        }
      </tbody>
    </Table>
    : <p> You have to be an admin</p>
  );
}

export default RegisterRequest;
