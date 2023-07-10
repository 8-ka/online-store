import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className='mt-3' onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: '150px', cursor: 'pointer'}} border='dark'>
        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + '/' + device.img} width={150} height={150} />
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