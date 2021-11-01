import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddDelivery = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                }
            })
    }

    return (
        <div>
            <div className="add-service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("pickupPoint")} placeholder="Pickup From" />
                    <textarea {...register("SendTo")} placeholder="Send to" />
                    <input type="phone" {...register("phone")} placeholder="Phone" />
                    <input type="number" {...register("price")} placeholder="Weight Kg" />
                    {/* <input {...register("img")} placeholder="Add Image" /> */}

                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDelivery;