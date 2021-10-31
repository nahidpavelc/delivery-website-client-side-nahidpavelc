import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo1 from '../../../images/food-delivery-logo.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt="Logo"
                        src={logo1}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> BDGO </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/Riders">Riders</Nav.Link>
                            <Nav.Link as={HashLink} to="/About">About us</Nav.Link>
                        </Nav>

                        <Nav>
                            <Navbar.Text>
                                <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                            {user?.email ?
                                <Nav.Link as={HashLink} to="/">
                                    <Button onClick={logOut} className="btn btn-warning">Logout</Button>
                                </Nav.Link> :
                                <Nav.Link as={HashLink} to="/Login">
                                    <Button className="btn btn-success">Login</Button>
                                </Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;