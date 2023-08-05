import React from 'react';
import './Home.css';
// import './NewApp.css';
import background from '../../images/projectBackGround.jpg'
import { Image } from 'react-bootstrap';
function Home() {
  return (
    
    <section className="hero">
      {/* <img src={background} className=''/> */}
      <Image src={background} fluid style={{width:'100%', height:'calc(100vh - 216px)'}} />
        {/* Add the content for the hero section */}
    </section>
  );
}

export default Home;
