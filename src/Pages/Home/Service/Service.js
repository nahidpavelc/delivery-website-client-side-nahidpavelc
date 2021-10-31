import React from 'react';

const Service = ({ service }) => {
    const { name, price, time, img, detail } = service;
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
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;