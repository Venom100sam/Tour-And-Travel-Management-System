import React, { useEffect } from 'react'

import '../styles/tourdetails.css'
import {Container, Row, Col} from 'reactstrap'
import {useParams} from 'react-router-dom'
import Booking from '../Components/Booking/Booking'
import useFetch from '../hooks/useFetch'
import {BASE_URL} from '../utils/config'

const TourDetails = () => {

  const {id} = useParams()
  
  //fetch data from database
  const {data:tour,loading, error} =useFetch(`${BASE_URL}/tours/${id}`)

  //destructure properties from tour objet
  const {photo, title, desc, price, address, city, distance, maxGroupSize}= tour

  useEffect (()=> {
    window.scrollTo(0,0)
  },[tour]);

  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading..........</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
          {
            !loading && !error &&
            <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
              </div>
              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span>
                    <i className="ri-map-pin-line"></i>{address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span>
                  <i className="ri-map-pin-2-line"></i>{city}
                  </span>
                  <span>
                  <i className="ri-money-dollar-box-line"></i>${price} /per person
                  </span>
                  <span>
                  <i className="ri-pin-distance-line"></i>{distance} km
                  </span>
                  <span>
                  <i className="ri-group-line"></i>{maxGroupSize} people
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>
            </Col>

            <Col lg='4'>
              <Booking tour={tour}/>
            </Col>
            
          </Row>
          }
        </Container>
      </section>
    </>
  )
}

export default TourDetails