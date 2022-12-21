import React, { useEffect, useState } from 'react';
import MyCartCard from '../MyCartCard/MyCartCard';
import Header from '../Shared/Header/Header';
import Loader from '../Shared/Loader/Loader';
import './MyCart.css';

const MyCart = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        // fetch('https://bd-go.onrender.com/orders')
        fetch('https://bd-go.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDelete = id => {
        // const url = `https://bd-go.onrender.com/orders/${id}`;
        const url = `https://bd-go.onrender.com/orders/${id}`;
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
        <>
            <Header />
            <div className="container pt-5">
                <h2 className='m-5'>Manage All <span>Orders</span> </h2>
                {orders.length === 0 ? (
                    <Loader />
                ) : (
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
                )}
            </div>
        </>
    );
};

export default MyCart;