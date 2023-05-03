import React from 'react'
import Carousel from '../Components/ImageSlider/Carousel'
import SearchBar from '../shared/SearchBar'
import Activity from '../Components/Activity/Activities'
import { Container, Col, Row } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Carousel />
      <SearchBar />
      <Activity />

            {/* Featured Tour */}
            <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              {/* <Subtitle subtitle={"Explore"}/> */}
              <h2 className="Features-packsages">FEATURED PACKAGES</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
