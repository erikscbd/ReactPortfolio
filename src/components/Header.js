import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({handlePageChange}) {
  return (
    <header className=' text-dark mb-4 py-3 display-flex align-center'>
      
      <Navbar bg="" variant="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link   onClick={() => handlePageChange('Home')} href="#home">Home</Nav.Link>
            <Nav.Link   onClick={() => handlePageChange('Portfolio')} href="#portfolio">Portfolio</Nav.Link>
            {/* <Nav.Link   onClick={() => handlePageChange('Resume')} href="#resume">Resume</Nav.Link> */}
            <Nav.Link   onClick={() => handlePageChange('Contact')} href="#contact">Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    



    </header>
  );
}

export default Header;
