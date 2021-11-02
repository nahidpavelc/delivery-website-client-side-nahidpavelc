import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';


const logo1 = 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>

            <div class="card mt-5 mb-3 container" >
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src={logo1} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h2 class="card-title">Country Best Contract <span>Delivery Provider</span> </h2>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;