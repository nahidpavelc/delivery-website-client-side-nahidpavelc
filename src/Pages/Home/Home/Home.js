import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import Services from '../Services/Services';
import './Home.css';
import Header from '../../Shared/Header/Header';


const logo1 = 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const Home = () => {
    return (
        <>
            <Header></Header>
            <div id="home">
                <Banner></Banner>
                <Services className></Services>

                <div className="card mt-5 mb-3 container" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={logo1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title">Country Best Online <span>Delivery Provider</span> </h2>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Review></Review>
                <Contact></Contact>
            </div>
        </>

    );
};

export default Home;