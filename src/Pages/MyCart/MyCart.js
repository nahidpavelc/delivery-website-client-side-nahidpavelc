import React, { useEffect, useState } from 'react';

const MyCart = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        // fetch('https://fierce-sierra-61655.herokuapp.com/orders')
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDelete = id => {
        // const url = `https://fierce-sierra-61655.herokuapp.com/orders/${id}`;
        const url = `http://localhost:5000/orders/${id}`;
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

    const hndleConfirm = () => {
        alert("Order Confirmed");
    }

    return (
        <div className="container">
            <h2>Your Orders</h2>

            <div class="row row-cols-1 row-cols-md-3 g-6">
                {
                    orders.map(order => <div key={order._id}>
                        <div class="col">
                            <div class="card">
                                <img src={order.img} class="card-img-top" alt="..." />
                                <div class="card-body text-start">
                                    <p className="card-text mb-0">Name: {order.name}</p>
                                    <p className="card-text mb-0">Pickup From: {order.pickupPoint}</p>
                                    <p className="card-text mb-0">Send To: {order.SendTo}</p>
                                    <p className="card-text mb-0">Phone: {order.phone}</p>
                                    <p className="card-text mb-0">Weight: {order.weight}Kg</p>
                                </div>
                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <button onClick={hndleConfirm} className="btn btn-success m-5">Confirm Order</button>
        </div>
    );
};

export default MyCart;