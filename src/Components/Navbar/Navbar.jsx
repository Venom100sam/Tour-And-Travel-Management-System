// package imports
import React from 'react'
import {Container, Row} from 'reactstrap'
import {NavLink} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import "./Navbar.css"

// array contains objects representing the navigation links to be displayed in the navigation bar
const nav__links=[
    {   path:'/home',
        display:'Home'    },
    {   path:'/',
        display:'Destinations'    },
    {   path:'/packages',
        display:'Packages'    },
    {   path:'/contact-us',
        display:'ContactUs'    },
    {   path:'/about-us',
        display:'AboutUs'    },
]

const Navbar = () => {    
  return (
    <header className="header">
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    {/* ==================LOGO=====================*/}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>                    
                    {/* ====================MENU================ */}
                    <div className="navigation" >
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav__links.map((item, index)=>(
                                    <li className="nav__item" key={index}>
                                        <NavLink 
                                            to={item.path} 
                                            className={navClass => 
                                                navClass.isActive ? "active__link" : ""
                                            }>
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>               
                    {/* ==========HAMBURGER MENU For responsive design yet to implement========== */}
                    <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                    </span>    
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Navbar
