import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo1 from '../../../images/food-delivery-logo.png';
import logo2 from '../../../images/icon/icon (2).png';
import logo3 from '../../../images/icon/icon (3).png';
import logo5 from '../../../images/icon/icon (4).png';
import { HashLink } from 'react-router-hash-link';
import Dropdown from '@restart/ui/esm/Dropdown';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt="Logo"
                        src={logo1}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> <span>BD</span><span className="text-warning">GO</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/Riders">Riders</Nav.Link>
                            <Nav.Link as={HashLink} to="/aboutus">About us</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link as={HashLink} to="/addservice" className="fw-bold text-danger" style={{ paddingTop: 19 }}
                            >Admin</Nav.Link>

                            {user?.email ?
                                <button className="btn btn-success">
                                    <NavDropdown title={user?.displayName} id="navbarScrollingDropdown">
                                        <Nav.Link as={HashLink} to="/Services">
                                            <img className="ms-1" style={{ width: "25px" }} src={logo5} alt="" />
                                            <span className="text-dark">Order now</span>
                                        </Nav.Link>

                                        <Nav.Link as={HashLink} to="/MyCart">
                                            <img className="ms-1" style={{ width: "25px" }} src={logo2} alt="" />
                                            <span className="text-dark">My Orders</span>
                                        </Nav.Link>
                                        <Nav.Link as={HashLink} to="/">
                                            <Button onClick={logOut} className="btn btn-warning">Logout</Button>
                                        </Nav.Link>

                                    </NavDropdown>
                                </button>
                                :
                                <Nav.Link as={HashLink} to="/Login">
                                    <Button className="btn btn-success">Login</Button>
                                </Nav.Link>
                            }




                            {/* <Nav.Link as={HashLink} to="/MyCart">
                                <Button className="btn btn-success"><img className="ms-1" style={{ width: "25px" }} src={logo2} alt="" />My Orders</Button>
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/AddService">
                                <Button className="btn btn-danger"><img style={{ width: "25px" }} src={logo3} alt="" />Admin</Button>
                            </Nav.Link> */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;