import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './booking-details.css';

const Booking = () => {
  const [BookingDetails, setBookingDetails] = useState([
  ]);

  const handleDetailstatusChange = (index) => {
    const newBookingDetails = [...BookingDetails];
    const ticket = newBookingDetails[index];
    ticket.status = ticket.status === 'Open' ? 'Closed' : 'Open';
    setBookingDetails(newBookingDetails);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">Admin Panel</div>
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
            <NavLink to="/Packages" activeClassName="active">
              Packages
            </NavLink>
          </li>
      
          <li>
            <NavLink to="/Booking" activeClassName="active">
              Bookings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Booking Details */}
      <div className="Booking-Details-container">
        <h1>Booking Details</h1>
        <table>
          <thead>
            <tr>
              <th>User Email</th>
              <th>Tour Name</th>
              <th>Full Name</th>
              <th>Guest Size</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {BookingDetails.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.email}</td>
                <td>{/* replace with tour name */}</td>
                <td>{ticket.name}</td>
                <td>{/* replace with guest size */}</td>
                <td>{/* replace with phone */}</td>
                <td>{/* replace with date */}</td>
                <td>{ticket.status}</td>
                <td>
                  <button onClick={() => handleDetailstatusChange(index)} className="change-status-button">
                    {ticket.status === 'Open' ? 'Close' : 'Reopen'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
