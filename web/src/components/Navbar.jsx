import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#000' }}>
      <img src={logo} alt="Happie Nails" style={{ height: '50px' }} />
      <div>
        <Link to="/" style={{ margin: '0 10px', color: '#D4AF37', textDecoration: 'none' }}>Home</Link>
        <Link to="/services" style={{ margin: '0 10px', color: '#D4AF37', textDecoration: 'none' }}>Services</Link>
        <Link to="/book" style={{ margin: '0 10px', color: '#D4AF37', textDecoration: 'none' }}>Book</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: '#D4AF37', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
