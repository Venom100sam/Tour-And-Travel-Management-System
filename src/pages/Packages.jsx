import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/package.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'

import {Container, Row, Col} from 'reactstrap'

import useFetch from '../hooks/useFetch'
import {BASE_URL} from '../utils/config'

const Packages = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data: tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(()=>{  
    const pages = Math.ceil(tourCount/ 8)
    setPageCount(pages)
    window.scrollTo(0, 0);
  },[page, tourCount, tours]);

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

          {loading && <h4 className='text-center pt-5'>Loading...........</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          
          {!loading && !error && tours && tours.length > 0 && (
              <Row>
                {tours.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
                <Col lg="12">
                  <div className="pagination d-flex align-items-center justify-content-center gap-3">
                    {(() => {
                      const pages = [];
                      for (let i = 0; i < pageCount; i++) {
                        pages.push(
                          <span
                            key={i}
                            onClick={() => setPage(i)}
                            className={page === i ? "active__page" : ""}
                          >
                            {i + 1}
                          </span>
                        );
                      }
                      return pages;
                    })()}
                  </div>

                </Col>
              </Row>
          )}
        </Container>
      </section>
    </>
  )
}

export default Packages
