import React,{useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../../utils/config'

const Booking = ({tour}) => {
    const {price, title} = tour;
    const navigate = useNavigate ()

    const [booking, setBooking] = useState({
        userEmail:'',
        fullName: '',
        tourName: title,
        phone:'',
        bookAt: '',
        guestSize: 1,        
        enquiry: ''
    })

    const handleChange = e=> {
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee =10
    const totalAmount =Number(price) * Number(booking.guestSize)+ Number(serviceFee)

    //send data to the server
    const handleClick=async e=>{
        e.preventDefault();

        const res=await fetch(`${BASE_URL}/tours/booking`, {
            method: "post",
        headers:{
            'content-type': "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
    })

        console.log(booking);
        navigate("/thank-you");
    }
  return(
  <div className="booking">
     <div className="booking__top d-flex  align-items-center justify-content-between">
        <h3>
            NPR {price}
            <span>/per person</span>
        </h3>
     </div>
     {/* ==========booking form========== */}
     <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="email" placeholder='Email' id='userEmail' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex  align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                <input type="number" placeholder='Total Travelers' id='guestSize' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex  align-items-center gap-3'>
                <textarea type="date" placeholder='Your Enquiry' id='enquiry' rows='5'  required onChange={handleChange}/>
            </FormGroup>
        </Form>
     </div>

     {/* ======booking bottom======= */}
     <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5>NPR {price} <i className="ri-close-line"></i>  1 person</h5>
                <span>NPR {price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>NPR {serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='total border-0 px-0'>
                <h5>Total</h5>
                <span>NPR {totalAmount} </span>
            </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
     </div>
  </div> 
  );
};

export default Booking
