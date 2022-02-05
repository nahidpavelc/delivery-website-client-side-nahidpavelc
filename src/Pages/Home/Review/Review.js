import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://fierce-sierra-61655.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="container pb-4">
            <h2 className="my-5"><span>USER</span>  Review</h2>
            {reviews.length === 0 ? (
                <Loader />
            ) : (
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3  g-4 ">
                    {
                        reviews.map(review => <ReviewCart
                            key={review._id}
                            review={review}
                        ></ReviewCart>)
                    }
                </div>
            )}
        </div>
    );
};

export default Review;
