import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner (1).jpg';
import banner2 from '../../../images/banner/banner (2).jpg';
import banner3 from '../../../images/banner/banner (3).jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item className="bg-dark">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 ><span>Food</span> DELIVERY</h1>
                        <h4>Our Riders are always near you</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-dark">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1> <span>Grocery</span> Delivery</h1>
                        <h4>Send you Best Quality Product</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-dark">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1><span>Logistic</span> Delivery</h1>
                        <h4>Go as far as you Want</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;