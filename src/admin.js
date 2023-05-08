import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/dashboard";
import packages from "./pages/Admin/packages";
import booking from "./pages/Admin/booking-details";





const Admin = () => {
  return (
    <>
      <Routes>
       
        <Route path="/dashboard" element={<Dashboard />} />
      
        <Route path="/packages" element={<packages />} />
    
        <Route path="/booking-details" element={<booking-details />} />
        
      </Routes>
    </>
  );
};
export default Admin;