import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand as={NavLink} exact to="/" className="navbar-brand">
          &lt;M/J&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto mb-2 mb-sm-0">
            <Nav.Link as={NavLink} exact to="/" className="nav-link" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="nav-link" activeClassName="active">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link" activeClassName="active">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
