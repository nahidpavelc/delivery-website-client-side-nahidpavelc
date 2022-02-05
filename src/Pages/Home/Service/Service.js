import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img, detail } = service;

    return (
        <>
            <div className="col">
                <div className="card service-card">
                    <img src={img} className="card-img-top service-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>Cost: {price}</h6>
                        <p className="card-text">{detail.slice(0 - 30)}</p>

                    </div>
                    <div className="card-footer">
                        <Link to={`/Booking/${_id}`}>
                            <button className="btn btn-warning">Send Items</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;