import React from 'react';
import { NavLink } from 'react-router-dom';
// import adminPackage from './packages'
import './dashboard.css';

const AdminPanel = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">

          Travel App</div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar">
        <ul className="sidebar__nav">
          <li>
            <NavLink to="/Dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/packages" activeClassName="active">
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking-details" activeClassName="active">
              Bookings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Welcome to Dashboard</h2>
        <div className="boxes">
          <div className="box">
            <h3>Total Packages</h3>
            <p className="count">10</p>
          </div>
          <div className="box">
            <h3>Total Bookings</h3>
            <p className="count">50</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminPanel;