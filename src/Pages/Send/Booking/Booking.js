import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddDelivery from '../../AddDelivery/AddDelivery';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        // fetch(`https://fierce-sierra-61655.herokuapp.com/services/${serviceId}`)
        fetch(`https://fierce-sierra-61655.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { name, img, detail, _id } = service;

    return (
        <div className="container py-5">
            <div class="card my-5" >
                <div class="row g-0 add-review">
                    <div class="col-sm-12 col-md-12 col-lg-6 pt-4">
                        <h5 class="card-title" className='mt-2 mb-4 booking-text'>We Provide Fast Service</h5>
                        <img src={img} class="img-fluid rounded-start service-img" alt="..." />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="card-body">
                            {/* <p class="card-text">{detail}</p> */}
                            <AddDelivery
                                key={service._id}
                                service={service}
                            ></AddDelivery>
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