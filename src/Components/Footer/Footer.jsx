import React from 'react'
import'./footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links=[
  {   path:'/home',
      display:'Home'    },
  {   path:'/packages',
      display:'Packages'    },
  {   path:'/about-us',
      display:'AboutUs'    },
];

const quick__links2=[
  {   path:'/contact-us',
      display:'Contact Us'    },
  {   path:'/login',
      display:'Admin Login'    },
];




const Footer = () => {
  return (
   <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Our Socials : </p>

            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#'>
                <i className="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to='#'>
                <i className="ri-facebook-circle-line"></i>
                </Link>
              </span>

              <span>
                <Link to='#'>
                <i className="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                <Link to='#'>
                <i className="ri-twitter-line"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>

        <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>

          <ListGroup className="footer__quick-links">
            {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>

          <ListGroup className="footer__quick-links2">
            {
              quick__links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>

          <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="ri-map-pin-2-line"></i>
                </span>
                Address:
              </h6>
              <p className='contact mb-0'>Naxal, Kathmandu</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                Email:
              </h6>
              <p className='contact mb-0'>travelmonkey@gmail.com</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="ri-phone-fill"></i>
                </span>
                Phone:
              </h6>
              <p className='contact mb-0'>+9770987654321</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
   </footer>
  )
}

export default Footer
