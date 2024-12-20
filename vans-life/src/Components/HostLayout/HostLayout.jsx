import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <>
      <header style={hostLayoutStyle}>
        <nav>
          <NavLink to="dashboard" style={navLinkStyle} activeStyle={activeLinkStyle} end>
            Dashboard</NavLink>
          <NavLink to="income" style={navLinkStyle} activeStyle={activeLinkStyle}>
            Income</NavLink>
          <NavLink to="my-van" style={navLinkStyle} activeStyle={activeLinkStyle}>
            My Van</NavLink>
          <NavLink to="price" style={navLinkStyle} activeStyle={activeLinkStyle}>
            Price
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const hostLayoutStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFF5E1',
  borderBottom: '1px solid #ddd',
};

const navLinkStyle = {
  marginLeft: '20px',
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
};

const activeLinkStyle = {
  color: '#FF6347',
  fontWeight: 'bold',
};
