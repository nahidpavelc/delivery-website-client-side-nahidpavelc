import React from 'react';
import Banner from '../Banner/Banner';
import Riders from '../Riders/Riders';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Riders></Riders>
        </div>
    );
};

export default Home;