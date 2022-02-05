import React, { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';
import img from '../../../images/banner/img.jpg'

const Riders = () => {
    const [riders, setRiders] = useState([])

    useEffect(() => {
        fetch('Riders.json')
            .then(res => res.json())
            .then(data => setRiders(data));
    }, [])

    console.log(riders);

    return (
        <div id="riders">
            <div class="card bg-dark text-white mb-5">
                <img src={img} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h1 class="card-titler text-black">Delivery <span>Riders</span></h1>
                    <p class="card-text"></p>
                    <h4 class="card-text"> <span cla>We have our Best Riders</span> </h4>
                </div>
            </div>
            <div className="container">
                <h2 className='m-5'>Our <span className="text-warning"> Riders</span> </h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        riders.map(rider => <Rider
                            key={rider.id}
                            rider={rider}
                        ></Rider>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Riders;