import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <p className="footer-text">2024 © All Rights Reserved</p>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Contact Information</h3>
          <ul className="footer-list">
            <li className="footer-item"><strong>Email:</strong> mahdiajebin.dev@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-backdrop"></div>
    </footer>
  );
};

export default Footer;
