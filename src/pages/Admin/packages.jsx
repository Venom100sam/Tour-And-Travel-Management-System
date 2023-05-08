import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import { NavLink } from 'react-router-dom';
import './packages.css';

const { Column } = Table;

const PackagesPanel = () => {
  const [Packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({
    Name: "",
    City: "",
    email: "",
    
    phoneNumber: "",
    description: "",
    degree: "",
    maxpeople: "",
 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const handleAddDoctor = () => {
    setPackages([...packages, newPackage]);
    setNewPackage({
      Name: "",
      City: "",
      email: "",
    
      phoneNumber: "",
      description: "",
      degree: "",
      maxpeople: "",
  
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">
          Admin Panel
        </div>
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
            <NavLink to="/Booking-Details" activeClassName="active">
              Support
            </NavLink>
          </li>
        </ul>
      </div>

    <div className="main-content">
      <div style={{ marginBottom: "16px" }}>
        <Input
          placeholder="Title"
          name="Name"
          value={newPackage.Name}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "10px" }}
        />
        <Input
          placeholder="City"
          name="City"
          value={newPackage.City}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Address"
          name="email"
          value={newPackage.email}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
       
        <Input
          placeholder="Enter Price"
          name="phoneNumber"
          value={newPackage.phoneNumber}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Description"
          name="description"
          value={newPackage.description}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Distance"
          name="degree"
          value={newPackage.degree}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="max group size"
          name="maxpeople"
          value={newPackage.maxpeople}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        
    
        <Button type="primary" onClick={handleAddDoctor}>
          Add Packages
        </Button>
      </div>
      <Table dataSource={packages}>
      <Column title="Title" dataIndex="Name" key="Name" />
    <Column title=" city" dataIndex="City" key="City" />
    <Column title="Address" dataIndex="email" key="email" />
    <Column title="Price" dataIndex="phoneNumber" key="phoneNumber" />
    <Column title="Description" dataIndex="description" key="description" />
    <Column title="Distance" dataIndex="degree" key="degree" />
    <Column title="Maxgroup size" dataIndex="maxpeople" key="maxpeople" />
  </Table>
</div>
</div>
);
};

export default PackagesPanel;
