import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';

const Delete = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('https://fierce-sierra-61655.herokuapp.com/services')
        fetch('https://fierce-sierra-61655.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        // const url = `https://fierce-sierra-61655.herokuapp.com/services/${id}`;
        const url = `https://fierce-sierra-61655.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }


    return (
        <div className="container">
            <Menu></Menu>
            <h2>Delete Services</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(service => <div class="col" key={service._id}>
                        <div class="card">
                            <img src={service.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{service.name}</h5>
                                <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Delete;