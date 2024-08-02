import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© Copyright {new Date().getFullYear()}. Made by Mahdia Jebin</p>
        <p><strong>Email:</strong> <a href="mailto:mahdiajebin.dev@gmail.com">mahdiajebin.dev@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
