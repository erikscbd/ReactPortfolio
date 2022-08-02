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
          alt="GitHub slide"
        />
        <Carousel.Caption>
          <p> <a href="https://github.com/erikscbd">Check my Profile</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-contact"
          src={process.env.PUBLIC_URL+"/images/linkedin-logo.png"}
          alt="Linkedin slide"
        />

        <Carousel.Caption>
          <p> <a href="https://www.linkedin.com/in/erik-escobedo/">Check my Profile</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="img-contact"
          src={process.env.PUBLIC_URL+"/images/GitHub-logo.png"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </main>
  );
}

export default Contact;