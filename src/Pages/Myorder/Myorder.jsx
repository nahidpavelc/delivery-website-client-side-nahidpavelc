import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyorderCart from '../MyorderCart/MyorderCart';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://fierce-sierra-61655.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])

    console.log(orders);

    return (
        <div className='container'>
            <h2 className='my-4'>My <span>Orders</span> </h2>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                {orders.map(order =>
                    <MyorderCart
                        key={order._id}
                        order={order}
                    ></MyorderCart>
                )}
            </div>

        </div>
    );
}
export default Myorder;