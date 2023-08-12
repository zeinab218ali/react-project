import React, {useEffect, useState} from "react";

import Table from 'react-bootstrap/Table';
import './AdminDashboard.css'

function AdminDashboard() {
    // const [students, setStudents] = useState([{
    //     id: 123,
    //     name: 'Zeinab Ali',
    //     email: 'zozo@gmail.com',
    //     province: 'Latakia',
    //     college: 'Informatics'
    //   },
    //   {
    //     id: 124,
    //     name: 'Zeinab Ali',
    //     email: 'zozo@gmail.com',
    //     province: 'Latakia',
    //     college: 'Informatics'
    //   }
    //   ]);
    const [students, setStudents] = useState([])
    const [affectedItems, setAffectedItems] = useState(0)
  //   useEffect(() => {
  //     fetchStudents();
  //   },[])

  //   const fetchStudents = async () => {
  //   try {
  //     const response = await axios.get('http://192.168.1.111:4000/'); // Replace YOUR_BACKEND_API_ENDPOINT with your actual backend API endpoint
  //     setStudents(response.data);
  //     setAffectedItems(response.data.length)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

    return (

        <Table className='table' border={1} striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Province</th>
              <th>College</th>
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
                    </tr>
            ))
    
            }
          </tbody>
        </Table>
      );
}

export default AdminDashboard;