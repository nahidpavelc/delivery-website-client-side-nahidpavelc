import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const notFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to='/'><button className="btn btn-success">Go Back</button></Link>
        </div>
    );
};

export default notFound; <h2>Not Found</h2>