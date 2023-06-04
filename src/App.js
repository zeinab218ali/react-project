import './NewApp.css';
import Footer from './Components/Footer/Footer';
import MyNavbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="project-interface">
    <MyNavbar /> 
    <section className="hero">
        {/* Add the content for the hero section */}
    </section>
    <Outlet/>
    <Footer />
  </div>
  );
}

export default App;
