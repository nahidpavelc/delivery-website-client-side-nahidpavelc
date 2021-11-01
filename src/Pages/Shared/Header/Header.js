import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo1 from '../../../images/food-delivery-logo.png';
import logo2 from '../../../images/icon/icon (2).png';
import logo3 from '../../../images/icon/icon (3).png';
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
                                <button className="btn btn-dark">{user?.displayName}</button>
                            </Navbar.Text>
                            {user?.email ?
                                <Nav.Link as={HashLink} to="/">
                                    <Button onClick={logOut} className="btn btn-warning">Logout</Button>
                                </Nav.Link> :
                                <Nav.Link as={HashLink} to="/Login">
                                    <Button className="btn btn-success">Login</Button>
                                </Nav.Link>
                            }
                            <Nav.Link as={HashLink} to="/MyCart">
                                <Button className="btn btn-success"><img style={{ width: "25px" }} src={logo2} alt="" />MyCart</Button>
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/AddService">
                                <Button className="btn btn-danger"><img style={{ width: "25px" }} src={logo3} alt="" />Admin</Button>
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;