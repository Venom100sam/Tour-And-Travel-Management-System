import React from 'react'

import './activity.css'
import { Container, Col, Row } from 'reactstrap'
import bungee from '../../assets/clips/bungeejump.mp4'
import raft from '../../assets/clips/rafting.mp4'
import trek from '../../assets/clips/trekking.mp4'
import zipline from '../../assets/clips/zipline.mp4'
import paraglide from '../../assets/clips/paragliding.mp4'
import safari from '../../assets/clips/safari.mp4'

const activities = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="activity__content">
                <div className="activity__title d-flex align-items-center">
                  <h2 className="activity">ACTIVITIES</h2>
                </div>
              </div>
            </Col>
            </Row>

            <Row>
            <Col lg='2'>
              <div className="video_box">
                <video src={trek} alt='' muted autoPlay loop/>
                <h4>Trekking</h4>
              </div>
            </Col>

            <Col lg='2'>
              <div className="video_box">
                <video src={raft} alt="" muted autoPlay loop/>
                <h4>Rafting</h4>
              </div>
            </Col>

            <Col lg='2'>
              <div className="video_box">
              <video src={paraglide} alt="" muted autoPlay loop/>
                <h4>Paragliding</h4>
              </div>
            </Col>

            <Col lg='2'>
              <div className="video_box">
              <video src={bungee} alt="" muted autoPlay loop/>
                <h4>Bungee</h4>
              </div>
            </Col>

            <Col lg='2'>
              <div className="video_box">
              <video src={zipline} alt="" muted autoPlay loop/>
                <h4>Zipline</h4>
              </div>
            </Col>

            <Col lg='2'>
              <div className="video_box">
              <video src={safari} alt="" muted autoPlay loop/>
                <h4>Safari</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
  )
}

export default activities
