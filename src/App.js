import './NewApp.css';
import Footer from './Components/Footer/Footer';
import MyNavbar from './Components/Navbar/Navbar';
import { Outlet, useNavigate, useNavigation, useLocation } from 'react-router-dom';
import background from './images/projectBackGround.jpg'
import { Image } from 'react-bootstrap';
import { useEffect } from 'react';
const isLogged = true
function App() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() =>{
    // console.log(location)
    if(location.pathname === "/"){
      navigate("/home")
    }
  },[])
  return (
    <div className="project-interface">
    <MyNavbar /> 
    {/* <section className="hero">
      {/* <img src={background} className=''/> 
      <Image src={background} fluid />
        {/* Add the content for the hero section 
    </section> */}

    {/* <section className="hero">
      {/* <img src={background} className=''/> */}
      {/* <Image src={background} fluid style={{width:'100%', height:'calc(100vh - 175px)'}} /> */}
        {/* Add the content for the hero section 
    </section> */}
    
    <Outlet/>
    <Footer />
  </div>
  );
}

export default App;
