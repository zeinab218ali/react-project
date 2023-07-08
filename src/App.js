import './NewApp.css';
import Footer from './Components/Footer/Footer';
import MyNavbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import background from './images/projectBackGround.jpg'
import { Image } from 'react-bootstrap';
const isLogged = true
function App() {
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
