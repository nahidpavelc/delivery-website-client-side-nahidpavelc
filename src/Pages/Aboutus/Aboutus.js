import React from 'react';
import abt1 from '../../images/Aboutus/anoutus (1).jpg'
import abt2 from '../../images/Aboutus/anoutus (2).jpg'
import Header from '../../Pages/Shared/Header/Header';

const Aboutus = () => {
    return (
        <>
            <Header></Header>
            <div>
                <div class="card bg-dark text-white mt-4 mb-5">
                    <img src={abt1} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h1 class="card-titler text-black"><span>About</span>  us</h1>
                        <p class="card-text"></p>
                        <h4 class="card-text"> <span className="text-success">Why us?</span> </h4>
                    </div>
                </div>
                <div className="container">
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={abt2} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h2 class="card-title"><span className="text-danger">BDGO</span>  Delivery Around Bangladesh</h2>
                                    <h6 class="card-text">Perspiciatis dolorem assumenda ipsam! Vitae vehicula libero ducimus nibh ultricies volutpat eum consectetuer suspendisse sequi labore ea habitant</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;