import axios from 'axios';
import React, { useState } from 'react';
import './MyorderCart.css'

const MyorderCart = ({ order }) => {
    const { _id, name, status, img, detail } = order;
    const [updateStatus, setUpdateStatus] = useState(status);

    const handleStatusUpdate = (id) => {
        axios
            .put(`https://bd-go.onrender.com/orders/${id}`, {
                statusUpdate: 'CANCELED',
            })
            .then((res) => {
                setUpdateStatus('CANCELED');
            })
        // .catch((err) => console.log(err));
    };

    return (
        <div className='CardSh'>
            <div class="col">
                <div class="card imgSize CardShadow">
                    <img src={img} className="card-img-top " alt="..." />
                    <div class="card-body text-start">
                        <h5 className="card-text mb-0">Name: {order.name}</h5>
                        <p className="card-text mb-0">Pickup From: {order.pickupPoint}</p>
                        <p className="card-text mb-0">Send To: {order.SendTo}</p>
                        <p className="card-text mb-0">Phone: {order.phone}</p>
                        <p className="card-text mb-0">Weight: {order.weight}Kg</p>
                        <p className="card-text mb-0 bg-blue">Order Status: <span>{order.status}</span></p>


                    </div>
                    <div class="card-footer text-start p-3">
                        <button
                            onClick={() => handleStatusUpdate(_id)}
                            type="button" class="btn btn-danger" data-bs-toggle="dropdown" aria-expanded="false">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyorderCart;