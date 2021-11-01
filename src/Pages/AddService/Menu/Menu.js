import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Menu = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Nav.Link as={HashLink} to="/AddService">Add</Nav.Link>
                <Nav.Link as={HashLink} to="/Update">Update</Nav.Link>
                <Nav.Link as={HashLink} to="/Delete">Delete</Nav.Link>
            </div>
        </div>
    );
};

export default Menu;