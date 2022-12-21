import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyorderCart from '../MyorderCart/MyorderCart';
import Header from '../Shared/Header/Header';
import Loader from '../Shared/Loader/Loader';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://bd-go.onrender.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])
    console.log(orders);

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <h2 className='m-5'>My <span>Orders</span> </h2>
                {orders.length === 0 ? (
                    <Loader />
                ) : (
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {orders.map(order =>
                            <MyorderCart
                                key={order._id}
                                order={order}
                            ></MyorderCart>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
export default Myorder;