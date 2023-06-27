import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: '600px' }} className='p-5'>
        <h2 className='m-auto'>Authorization</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-2'
            placeholder='Write your e-mail'
          />
          <Form.Control
            className='mt-2'
            placeholder='Write your password'
          />
          <div className='d-flex justify-content-between mt-2 align-items-center'>
            <NavLink style={{ textDecoration: 'none' }} to={REGISTRATION_ROUTE}>Sign In</NavLink>
            <Button variant='outline-info'>
              Log In
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth