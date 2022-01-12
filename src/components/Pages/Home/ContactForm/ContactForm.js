import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
    const notify = () => toast.success("Your Message Has Been Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7iaqeso', 'template_9wqvv3l', e.target, 'user_inFIVwRc7SjNNDXGcxTHl')
            .then(res => { notify() })
            .catch(err => console.log(err));
        

    }
    return (
        <>
            <div className='contact-section'>
                <h1 className="text-center">Contact Us</h1>
                <hr />
                <div className='contact-area'>
                    <div className='contact-img'>
                        <img src="https://i.ibb.co/m470Lgq/5127314-removebg-preview.png" alt="" />
                    </div>
                    <div className="contact-form">
                        <form onSubmit={sendEmail}>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" required />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="user_email" required />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                            <input type="submit" value="Send" className='contact-btn'/>
                            <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;