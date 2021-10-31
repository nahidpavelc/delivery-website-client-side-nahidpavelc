import React, { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';

const Riders = () => {
    const [riders, setRiders] = useState([])

    useEffect(() => {
        fetch('Riders.json')
            .then(res => res.json())
            .then(data => setRiders(data));
    }, [])

    return (
        <div className="container">
            <h2 className='m-5'> Our Riders</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    riders.map(rider => <Rider
                        key={rider.id}
                        rider={rider}
                    ></Rider>)
                }
            </div>
        </div>
    );
};

export default Riders;