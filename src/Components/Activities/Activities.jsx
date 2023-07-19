import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Activities.css';
function Slider() {
  return (
    <Carousel>
      <Carousel.Item className='test'>
        <img
          className="d-block w-100"
          src={require('./../../assets/images/image3.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='test'>
        <img
          className="d-block w-100"
          src={require('./../../assets/images/image3.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='test'>
        <img
          className="d-block w-100"
          src={require('./../../assets/images/image3.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='test'>
        <img
          className="d-block w-100"
          src={require('./../../assets/images/image3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;