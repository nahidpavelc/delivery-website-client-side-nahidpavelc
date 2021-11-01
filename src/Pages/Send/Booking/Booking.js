import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddDelivery from '../../AddDelivery/AddDelivery';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { name, img, detail } = service;

    return (
        <div className="container">
            <div class="card m-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{detail}</p>
                            <AddDelivery></AddDelivery>
                        </div>
                    </div>
                </div>
            </div>

            <h2> Confirm {name}</h2>
            <hr />

        </div>
    );
};

export default Booking;