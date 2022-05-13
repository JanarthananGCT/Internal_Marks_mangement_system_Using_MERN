
import React from 'react';


import { Container, Navbar, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="brand">Internal Marks Management System</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/" className="brand">Home</Nav.Link>
          <Nav.Link href="/add" className="brand">+Add New Marks</Nav.Link>

        </Nav>
      </Container>
    </Navbar>

  );
};

export default Home;
/*
<nav className="NavBar-Wrapper">
      <div>
        <h3 className="NavBar-Title">Internal Marks Management System</h3>
      </div>
      <div className="NavBar-Links">
        <Link to="/" className="NavBar-Link">Home</Link>
        <Link to="/add" className="NavBar-Link">Add</Link>
      </div>
    </nav>
*/
