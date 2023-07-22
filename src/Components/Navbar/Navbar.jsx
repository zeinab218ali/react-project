import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS file

// function MyNavbar() {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Navbar.Brand href="/">My Website</Navbar.Brand>
//       <Nav >
//         <Link to="/" className="nav-link ">Home</Link>
//         <Link to="/Login" className="nav-link">Login</Link>
//         <Link to="/Register" className="nav-link">Register</Link>
//       </Nav>
//     </Navbar>
//   );
// }

// const isLogged =  localStorage.getItem("isLogged") ==="true"
function MyNavbar(){

  const logout = ()=>{
    alert("logged out")
    localStorage.setItem("isLogged", false)
    setIsLogged(false)
    setIsAdmin(false)

  }
  const [isLogged, setIsLogged] = React.useState(localStorage.getItem("isLogged") ==="true")
  const [isAdmin, setIsAdmin] = React.useState(localStorage.getItem("isAdmin") ==="true")

  const getLinks = () => {
    console.log(isAdmin)
    if(isLogged){
      if(isAdmin){
        return (<>
            
        <Nav.Link>
          <Link to="/registerRequest" className="nav-link ">Requests</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/adminDashboard" className="nav-link ">Active users</Link>
        </Nav.Link>
        </>)
      }
      else{
        return null
      }

    } else{
      return (
        <>

        <Nav.Link>
          <Link to="/Login" className="nav-link ">Login</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/Register" className="nav-link ">Register</Link>
        </Nav.Link>
        </>
      )
    }
  }
  return(
    <Navbar>
      <Container>
        <Navbar.Brand className='brand' href="/home">My Website</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse className='nav-inline' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home" className="nav-link ">Home</Link>
            </Nav.Link>
            {/* {isLogged && isAdmin ?
            <>
            
            <Nav.Link>
              <Link to="/registerRequest" className="nav-link ">Requests</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/adminDashboard" className="nav-link ">Active users</Link>
            </Nav.Link>
            </>
            :
            <>

            <Nav.Link>
              <Link to="/Login" className="nav-link ">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Register" className="nav-link ">Register</Link>
            </Nav.Link>
            </>
            } */}

            {getLinks()}

            
        { isLogged && <Nav.Link onClick={logout}>logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar;
