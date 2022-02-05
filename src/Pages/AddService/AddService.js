import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import Menu from './Menu/Menu';
import Header from '../Shared/Header/Header';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        // axios.post('https://fierce-sierra-61655.herokuapp.com/services', data)
        axios.post('https://fierce-sierra-61655.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                }
            })
    }

    return (
        <>
            <Header></Header>
            <div className="add-service mt-5">
                <Menu></Menu>

                <h2>Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("detail")} placeholder="Detail" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image url" />

                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddService;