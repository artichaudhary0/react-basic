import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
    <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
    <Link to="/reports" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Reports</Link>
    <Link to="/settings" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Settings</Link>
  </nav>
);

export default Navbar;
