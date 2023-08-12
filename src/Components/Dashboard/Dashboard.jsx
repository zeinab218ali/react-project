import React, {useEffect, useState} from "react";

import Table from 'react-bootstrap/Table';
import './Dashboard.css'
import axios from "axios";

function Dashboard() {
    const [student, setStudent] = useState(null)
    useEffect(() => {
      fetchUser()
    },[])

    const fetchUser = async () =>{
      const response = await axios.get('http://192.168.1.111:4000/api/auth/user-profile')
      console.log(response)
      if(response.status === 200){
        setStudent(response.data)
      }
    }
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
            {student !== null &&(
                    <tr className='tableRow' key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.province}</td>
                      <td>{student.college}</td>
                    </tr>
            )
    
            }
          </tbody>
        </Table>
      );
}

export default Dashboard;