import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <div className="logo">
        <Link to="/" style={logoStyle}>#VANLIFE</Link>
      </div>
      <nav>
        <Link to="/about" style={navLinkStyle}>About</Link>
        <Link to="/vans" style={navLinkStyle}>Vans</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFF5E1',
  borderBottom: '1px solid #ddd',
};

const logoStyle = {
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#000',
};

const navLinkStyle = {
  marginLeft: '20px',
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
};
