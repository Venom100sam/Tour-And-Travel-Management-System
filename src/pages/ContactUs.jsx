import React from 'react';
import Image from '../assets/images/Contactus.jpeg';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/ContactUs.css';
import Phone from '../assets/images/phone.png'
import Mobile from '../assets/images/mobile.png'
import Mail from '../assets/images/mail.png'
import Locations from '../assets/images/location.png'




const ContactUs = () => {
  return (
    <div className='contact-us'>
         <div className='img-contact'><img src={Image} />

        </div>
        <section>
            <Container>
                <Row>
                <Col lg='8'>
                <div className='queries'>
            <h3>Any Queries? Let us know</h3>
            <Form className='form'>
                <FormGroup>
                    <p>Full Name</p>
                    <input type="Text" required id="Full Name" />
                </FormGroup>
                <FormGroup>
                    <p>Email</p>
                    <input type="Email" required id="Email" />
                </FormGroup>
                <FormGroup>
                    <p>Phone Number</p>
                    <input type="Integer" required id="Phone Number" />
                </FormGroup>
                <FormGroup>
                    <p>Your Enquiry</p>
                    <textarea className='textarea' type="text" required id="Enquiry" rows='8' />
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </Col>
        <Col>
            <div className="details">
                <h3>Contact Details</h3>
                <div className='location-png'><img src={Locations}/>Naxal Bhagwati, Kathmandu, Nepal</div>
            </div>
        </Col>
        </Row>
            </Container>
        </section>
        
       

    </div>
  );
}

export default ContactUs;