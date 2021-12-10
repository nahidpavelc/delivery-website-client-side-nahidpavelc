import React, { useEffect, useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="container pb-4">
            <h2 className="m-5"><span>USER</span>  Review</h2>

            <div class="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    reviews.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                    ></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default Review;
