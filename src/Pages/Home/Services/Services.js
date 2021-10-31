import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div className="container">
            {
                services.map(service => <Service></Service>)
            }
        </div>
    );
};

export default Services;