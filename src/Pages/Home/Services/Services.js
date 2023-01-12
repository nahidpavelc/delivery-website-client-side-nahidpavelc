import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Loader from '../../Shared/Loader/Loader';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    // fetch('https://bd-go.onrender.com/services')
    fetch('https://bd-go.onrender.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <>
      <Header />
      <div className="container pt-5" id="services">
        <h2 className="m-5"><span>Delivery</span>  Services</h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {
            services.map(service => <Service
              key={service.id}
              service={service}
            ></Service>)
          }
        </div>
      </div >
    </>

  );
};

export default Services;