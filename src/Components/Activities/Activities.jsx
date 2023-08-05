// import Carousel from 'react-bootstrap/Carousel';
// import './Activities.css';
// function UncontrolledExample() {
//   return (
//     <Carousel className='Carousel'>
//       <Carousel.Item className='Carousel.Item'>
//       <img
//           className="image"
//           src={require('./../../assets/images/image1.jpg')}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Theatrical activities</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="image"
//           src={require('./../../assets/images/image3.jpg')}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Pay attention to beautiful sounds</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="image"
//           src={require('./../../assets/images/image2.jpg')}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>trips</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Activities.css';
const ResponsiveCarousel = () => {
  return (
    <div>
    <Carousel showArrows={false} showThumbs={false} interval={3000} >
      <div>
      <img
          //className="image"
          src='assets/images/image1.jpg'
          alt="First slide"
          height="750px"
        />
        <p className="legend">Theatrical activities</p>
      </div>
      <div>
      <img
          //className="image"
          src='assets/images/image3.jpg'
          alt="First slide"
          height="750px"
        />
        <p className="legend">Pay attention to beautiful sounds</p>
      </div>
      <div>
      <img
          // className="image"
          src='assets/images/image2.jpg'
          alt="First slide"
          height="750px"
        />
        <p className="legend">trips</p>
      </div>
    </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
