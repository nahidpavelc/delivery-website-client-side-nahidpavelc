import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddDelivery.css'
import useAuth from '../../hooks/useAuth';

const AddDelivery = ({ service }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { name, img, detail, _id } = service;

    console.log(user);

    const onSubmit = (data) => {
        // axios.post('https://fierce-sierra-61655.herokuapp.com/orders', data)
        axios.post('https://fierce-sierra-61655.herokuapp.com/orders', {
            name: data.name,
            email: data.email,
            img: data.img,
            SendFrom: data.sendFrom,
            sendTo: data.sendTo,
            phone: data.phone,
            weight: data.weight,
            status: 'PENDING'
        })
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    };



    return (
        <div className="add-review">
            <h5 class="card-title">{name}</h5>
            <form className="del-form" onSubmit={handleSubmit(onSubmit)}>

                <input className="del del-input" value={user.displayName}
                    {...register("name")} />
                <input className="del del-input" value={user.email}
                    {...register("email")} />

                <input className="del del-input"
                    {...register("img")} placeholder="Image url" />

                <textarea id="textarea" className="del del-textarea"
                    {...register("sendFrom")} placeholder="Send From" />
                <textarea id="textarea" className="del del-textarea"
                    {...register("sendTo")} placeholder="Send to" />
                <input className="del del-input" type="number"
                    {...register("phone")} placeholder="Phone" />
                <input className="del del-input" type="number"
                    {...register("weight")} placeholder="Weight Kg" />
                {/* <input {...register("img")} placeholder="Add Image" /> */}
                <input className="btn btn-success del-submit" type="submit" />

            </form>
        </div>
    );
};

export default AddDelivery;