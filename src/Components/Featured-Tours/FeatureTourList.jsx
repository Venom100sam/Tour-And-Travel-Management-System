
import React from 'react'
import TourCard from '../../shared/TourCard'
// import tourData from '../../assets/data'
import {Col} from 'reactstrap'


const FeatureTourList = () => {
  return (
    <>
    {
        tourData?.map(tour=>(
            <Col lg='3' className='mb-4' key={tour}>
                <TourCard tour={tour} />
            </Col>
        ))
    }
    </>
  )
}

export default FeatureTourList
