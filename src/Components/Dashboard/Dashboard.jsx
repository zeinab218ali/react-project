import React, {useState} from "react";

import Table from 'react-bootstrap/Table';
import './Dashboard.css'

function Dashboard() {
    const [student, setStudent] = useState([{
        id: 123,
        name: 'Zeinab Ali',
        email: 'zozo@gmail.com',
        province: 'Latakia',
        college: 'Informatics'
      }
      ]);
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
            {student.map(student => (
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

export default Dashboard;