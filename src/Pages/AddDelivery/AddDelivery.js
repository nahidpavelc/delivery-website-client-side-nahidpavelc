import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddDelivery = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        // axios.post('https://fierce-sierra-61655.herokuapp.com/orders', data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("img")} placeholder="Image url" />
                <textarea {...register("pickupPoint")} placeholder="Pickup From" />
                <textarea {...register("SendTo")} placeholder="Send to" />
                <input type="number" {...register("phone")} placeholder="Phone" />
                <input type="number" {...register("weight")} placeholder="Weight Kg" />
                {/* <input {...register("img")} placeholder="Add Image" /> */}

                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddDelivery;