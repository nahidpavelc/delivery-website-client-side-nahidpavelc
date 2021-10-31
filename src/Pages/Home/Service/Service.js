import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, img, detail } = service;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6>Cost: {price}</h6>
                        <p class="card-text">{detail}</p>

                    </div>
                    <div class="card-footer">
                        <Link to={`/Booking/${id}`}>
                            <button className="btn btn-warning">Send Items</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;