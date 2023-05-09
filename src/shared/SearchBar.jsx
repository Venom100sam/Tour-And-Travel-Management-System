import React,{useRef} from 'react'
import './search-bar.css'
import {Col, Form, FormGroup} from 'reactstrap'

import {BASE_URL} from './../utils/config'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    // Refs for the search input fields
    const locationRef =useRef('')
    const distancenRef =useRef(0)
    const maxGroupSizeRef =useRef(0)
    const navigate = useNavigate()

    // Handler for the search button click
    const searchHandler= async()=>{
        // Get the values of the search input fields
        const location = locationRef.current.value
        const distance = distancenRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        // If any of the search input fields is empty, show an alert
        if(location===''|| distance===''||maxGroupSize===''){
            return alert('All fields are required')
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if(!res.ok) alert('Something went Wrong')
        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})
    }
    
  return (
    <Col lg='12' >
        <div className="search__bar">
            {/* =================Search form with three input fields and a search button=================== */}
            <Form className='d-flex align-items-center gap-4'>
                {/* ==============Location input field================= */}
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef} />
                    </div>
                </FormGroup>

                {/*=================== Distance input field====================*/}
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-pin-distance-fill"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distancenRef} />
                    </div>
                </FormGroup>

                {/* ===================Max group size input field =================*/}
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                    <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>

                {/*======================= Search button================= */}
                <span className="search__icon" type='submit' onClick={searchHandler}>
                <i class="ri-search-2-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar
