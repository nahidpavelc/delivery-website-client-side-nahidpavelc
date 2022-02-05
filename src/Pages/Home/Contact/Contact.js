import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Alert } from 'react-bootstrap';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        //Input Field not be Empty
        if (document.getElementById("name").value.length == 0) {
            alert("Input Name")
            return false;
        }
        if (document.getElementById("email").value.length == 0) {
            alert("Input Email")
            return false;
        }
        if (document.getElementById("message").value.length == 0) {
            alert("Please input Message")
            return false;
        }



        emailjs.sendForm('gmail', 'bd_go', form.current, 'user_EAWWzTEURI75xgM53keUA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert('Confirm');
        return;
    };
    return (
        <div className="contactcolor">
            <h2 className="m-5"><span>Contact</span> Us</h2>

            <form id="con-form" ref={form} onSubmit={sendEmail}>
                <input id="name" name="name" type="text" class="feedback-input" placeholder="Name" />
                <input id="email" name="email" type="email" class="feedback-input" placeholder="Email" />
                <textarea id="message" name="message" class="feedback-input" placeholder="Message"></textarea>
                <input type="submit" value="SEND" />
            </form>
        </div>
    );
};

export default Contact;