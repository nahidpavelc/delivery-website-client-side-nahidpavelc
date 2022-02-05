import React, { useEffect, useState } from 'react';
import MyCartCard from '../MyCartCard/MyCartCard';
import './MyCart.css';

const MyCart = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        // fetch('https://fierce-sierra-61655.herokuapp.com/orders')
        fetch('https://fierce-sierra-61655.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDelete = id => {
        // const url = `https://fierce-sierra-61655.herokuapp.com/orders/${id}`;
        const url = `https://fierce-sierra-61655.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }

    // const handleConfirm = () => {
    //     alert("Order Confirmed");
    // }

    return (
        <div className="container">
            <h2 className='my-4'>Manage All <span>Orders</span> </h2>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    orders.map(order =>
                        <MyCartCard
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                        ></MyCartCard>

                    )
                }

            </div>
        </div>
    );
};

export default MyCart;