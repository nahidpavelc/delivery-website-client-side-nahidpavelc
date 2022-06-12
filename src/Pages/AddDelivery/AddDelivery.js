import React from 'react';
import './AddDelivery.css'
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const AddDelivery = ({ service }) => {

    const { user } = useAuth();
    const { name, img, detail, _id } = service;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [sendFrom, setSendFrom] = useState('');
    const [sendTo, setSendTo] = useState('');
    const [phone, setPhone] = useState('');
    const [weight, setWeight] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', userName);
        formData.append('email', email);
        formData.append('image', image);
        formData.append('sendFrom', sendFrom);
        formData.append('sendTo', sendTo);
        formData.append('phone', phone);
        formData.append('weight', weight);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
            })
            .catch(error => {
                console.error('error', error);
            });
    };

    return (
        <>
            <div className="add-review">
                <h5 class="card-title">{name}</h5>

                <form className="del-form" onSubmit={handleSubmit}>
                    <input
                        required
                        label='Name'
                        className="del del-input"
                        placeholder="Your Name"
                        onChange={e => setUserName(e.target.value)} />
                    <input
                        required
                        label='Name'
                        className="del del-input"
                        placeholder="Your E-mail"
                        onChange={e => setEmail(e.target.value)} />
                    <input
                        className="del del-input"
                        placeholder="Image url"
                        type="file" accept="image/*"
                        onChange={e => setImage(e.target.files[0])} />
                    <textarea
                        required
                        label='sendFrom'
                        id="textarea"
                        className="del del-textarea"
                        placeholder="Send From"
                        onChange={e => setSendFrom(e.target.value)} />
                    <textarea
                        required
                        label='sendTo'
                        id="textarea"
                        className="del del-textarea"
                        onChange={e => setSendTo(e.target.value)}
                        placeholder="Send To" />
                    <input
                        required
                        className="del del-input"
                        type="number"
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone" />
                    <input
                        className="del del-input"
                        type="number"
                        onChange={e => setWeight(e.target.value)}
                        placeholder="Weight Kg" />
                    <input
                        className="btn btn-success del-submit"
                        type="submit" />
                </form>

            </div>
        </>
    );
};

export default AddDelivery;