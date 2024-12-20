import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {
  return (
    <header style={headerStyle}>
      <div className="logo">
        <NavLink to="/" style={logoStyle}>
          #VANLIFE
        </NavLink>
      </div>
      <nav>
        <NavLink
          to="host"
          style={navLinkStyle}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={navLinkStyle}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={navLinkStyle}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Vans
        </NavLink>
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

