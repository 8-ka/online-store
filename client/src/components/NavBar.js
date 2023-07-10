import React, { useContext } from 'react'
import { Context } from '..'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white", textDecoration: 'none' }} to={SHOP_ROUTE}>Device4U</NavLink>
                {user.isAuth
                    ? <Nav>
                        <Button
                            variant='outline-secondary'
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button
                            variant='outline-secondary'
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Log Out
                        </Button>
                    </Nav>
                    : <Nav>
                        <Button variant='outline-secondary' onClick={() => navigate(LOGIN_ROUTE)}>Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
});

export default NavBar