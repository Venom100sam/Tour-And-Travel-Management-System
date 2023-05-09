import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Dashboard  from '../pages/Admin/dashboard';
// import adminPackage  from '../pages/Admin/packages';

import Packages from './../pages/Packages';
import SearchResult from './../pages/SearchResult';
import Login from './../pages/Login';
import TourDetails from './../pages/TourDetails';
import ContactUs from './../pages/ContactUs';
import AboutUs from './../pages/AboutUs';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/packages' element={<Packages />}/>
      <Route path='/tours/:id' element={<TourDetails />}/>
      <Route path='/tours/search' element={<SearchResult />}/>
      <Route path='/about-us' element={<AboutUs />}/>
      <Route path='/contact-us' element={<ContactUs />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/thank-you' element={<ThankYou />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      {/* <Route path='/admin/package' element={<adminPackage />}/> */}
    </Routes>
  )
}

export default Routers
