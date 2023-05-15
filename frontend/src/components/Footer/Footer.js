import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Essential Oils Online Shop. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
