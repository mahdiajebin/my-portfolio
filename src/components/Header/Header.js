import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'; 


const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-primary">
      <div className="container-fluid text-primary">
        <NavLink exact to="/" className="navbar-brand" > &lt;M/J&gt;</NavLink>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-primary" id="navbarsExample03">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0  ">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Header;
