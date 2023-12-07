// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Logo from '../Img/Logo.jpeg'; 
import './Navbar.css'

const AppNavbar = () => {
  return (
    <div className='body-color'>
    <Navbar collapseOnSelect expand="lg" className='navbar-top'>
        <Container>
            <img src={Logo}  alt="" className='logo-img' />
        </Container>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#signup">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#04367F'}}></Navbar>
    </div>
  );
};

export default AppNavbar;
