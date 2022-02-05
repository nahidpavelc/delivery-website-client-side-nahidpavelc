import React from 'react';





const MyCartCard = ({ order, handleDelete }) => {


    return (
        <>
            <div className='CardSh'>
                <div class="col">
                    <div class="card imgSize CardShadow">
                        <img src={order.img} className="card-img-top " alt="..." />

                        <div class="card-footer">
                            <div class="card-body text-start">
                                <p className="card-text mb-0">Name: {order.name}</p>
                                <p className="card-text mb-0">Pickup From: {order.pickupPoint}</p>
                                <p className="card-text mb-0">Send To: {order.SendTo}</p>
                                <p className="card-text mb-0">Phone: {order.phone}</p>
                                <p className="card-text mb-0">Weight: {order.weight}Kg</p>
                            </div>

                            <div className="btn-group mb-3 d-flex justify-content-around" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {order.status}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li><a class="dropdown-item text-success" >CONFIRM</a></li>
                                    <li><a class="dropdown-item text-success" >CANCEL</a></li>
                                </ul>
                                <button onClick={() => handleDelete(order._id)} className='btn btn-danger'>Delete</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCartCard;