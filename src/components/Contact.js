import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Contact() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <main id="contact" className='container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="img-contact"
          src={process.env.PUBLIC_URL+"/images/GitHub-logo.png"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>GitHub Profile</h3>
          <p> <a href="https://github.com/erikscbd">Check my Profile</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"/images/GitHub-logo.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"/images/GitHub-logo.png"}
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
    </main>
  );
}

export default Contact;