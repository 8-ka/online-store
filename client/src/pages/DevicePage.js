import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

import starIcon from '../assets/star-icon.svg';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams(); 

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data));
  }, [])

  return (
    <Container className='mt-2'>
      <Row>
        <Col md={4} className='d-flex'>
          <Image src={process.env.REACT_APP_API_URL + '/' + device.img} width={300} height={300} />
        </Col>
        <Col md={4} className='d-flex flex-column align-items-center justify-content-center'>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ background: `url(${starIcon}) no-repeat center center`, width: 150, height: 150, fontSize: 34 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex align-items-center justify-content-around' style={{ width: 300, height: 300, border: 'solid 2px lightgray' }}>
            <Card.Title>From: {device.price} rubles</Card.Title>
            <Button variant='outline-dark'>Add to Cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='mt-3'>
      <h2>Features</h2>
        {device.info.map(info =>
          <Row key={info.id} style={{ background: info.id % 2 !== 0 && 'lightgray', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default DevicePage