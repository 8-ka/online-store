import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: '600px' }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
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
            {isLogin ?
              <div>
                <NavLink style={{ textDecoration: 'none' }} to={REGISTRATION_ROUTE}>Sign In</NavLink>
              </div>
              :
              <div>
                <NavLink style={{ textDecoration: 'none' }} to={LOGIN_ROUTE}>Log In</NavLink>
              </div>
            }
            <Button variant='outline-info'>{isLogin ? 'Log In' : 'Sign In'}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth