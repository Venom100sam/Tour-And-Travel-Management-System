import React from 'react'
import Carousel from '../Components/ImageSlider/Carousel'
import SearchBar from '../shared/SearchBar'
import Activity from '../Components/Activity/Activities'
import FeatureTourList from '../Components/Featured-Tours/FeatureTourList'
import Blogs from '../Components/Blog/Blogs'
import { Container, Col, Row } from 'reactstrap'

import '../styles/home.css'

const Home = () => {
  return (
    <div>
      <Carousel />
      <SearchBar />
      <Activity />

      {/* ====================Featured Tour ======================*/}
      <section>
        <Container>
          <Row>
            <Col lg="10" className='mb-5'>
              {/* <Subtitle subtitle={"Explore"}/> */}
              <h2 className="Featured_package-title">FEATURED PACKAGES</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>

      {/* ==================== Blogs ======================*/}
      <section>
        <Container>
          <Row>
            <Col>
              <h2 className="blog__title">BLOGS</h2>
            </Col>
            <Col lg='12'>
              <Blogs />
              <p></p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
