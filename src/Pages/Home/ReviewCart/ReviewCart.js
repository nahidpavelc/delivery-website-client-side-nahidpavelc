import React from 'react';
import './ReviewCart.css';

const ReviewCart = (props) => {
    const { name, review, rating } = props.review;

    return (
        <>
            <div class="col">
                <div class="card text-dark card-has-bg click-col pt-4 service-card">
                    <div class="media">
                        <img class="mr-3 rounded-circle" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                        <div class="media-body">
                            <span><h6 class="my-1 d-block">{name}</h6></span>
                            <small>Rating <span>{rating}</span> </small>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{review}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCart;