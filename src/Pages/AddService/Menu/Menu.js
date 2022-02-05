import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Menu.css';

const Menu = () => {
    return (
        <div className='pt-3'>
            <div className="d-flex justify-content-center menu-button">
                <Nav.Link className="si-button" as={HashLink} to="/AddService">Add</Nav.Link>
                <Nav.Link className="si-button" as={HashLink} to="/Delete">Delete</Nav.Link>
            </div>
        </div>
    );
};

export default Menu;