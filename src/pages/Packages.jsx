import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/package.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import tourData from '../assets/data/tour'

import {Container, Row, Col} from 'reactstrap'

const Packages = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(()=>{  
    const pages = Math.ceil(5/ 4) //later use backend data count
    setPageCount(pages)
  },[page]);

  return (
    <>
      <CommonSection  title={"All Tours"}/>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {
              tourData?.map(tour=> 
                <Col lg="3" className='mb-4' key={tour.id}>
                  <TourCard tour={tour}/>
                </Col>)
            }
          </Row>

          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center gap-3">
              {[...Array(pageCount).keys()].map(number=> (
                <span key={number} onClick={()=>setPage(number)}
                className={page===number ? "active__page" :""}>
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>

        </Container>
      </section>
    </>
  )
}

export default Packages
