import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

const DeviceItem = ({ device }) => {
  return (
    <Col md={3} className='mt-3'>
      <Card style={{ width: '150px', cursor: 'pointer'}} border='light'>
        <Card.Img variant="top" src={device.img} width={150} height={150} />
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>
          <Card.Text>
            desc
          </Card.Text>
        </Card.Body>

      </Card>
    </Col>
  )
}

export default DeviceItem