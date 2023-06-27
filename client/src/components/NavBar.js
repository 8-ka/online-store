import React, { useContext } from 'react'
import { Context } from '..'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white", textDecoration: 'none' }} to={SHOP_ROUTE}>Device4U</NavLink>
                {user.isAuth
                    ? <Nav>
                        <Button variant='outline-secondary'>Admin Panel</Button>
                        <Button variant='outline-secondary' className="ms-2">Log Out</Button>
                    </Nav>
                    : <Nav>
                        <Button variant='outline-secondary' onClick={() => user.setIsAuth(true)}>Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
});

export default NavBar