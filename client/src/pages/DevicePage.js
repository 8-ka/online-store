import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

import starIcon from '../assets/star-icon.svg';

const DevicePage = () => {
  const device = { id: 1, name: "Iphone 12 Pro", price: 25000, rating: 5, img: '' };
  const description = [
    { id: 1, title: 'RAM', description: '5GB' },
    { id: 2, title: 'Camera', description: '12Mpx' },
    { id: 3, title: 'CPU', description: 'Intel 7i' },
    { id: 4, title: 'Core quantity', description: '4' },
    { id: 5, title: 'Battery', description: '4000' },
  ];

  return (
    <Container className='mt-2'>
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300} />
        </Col>
        <Col md={4} className='d-flex'>
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
        {description.map(info =>
          <Row key={info.id} style={{ background: info.id % 2 !== 0 && 'lightgray', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default DevicePage