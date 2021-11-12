import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const displayName = user?.displayName;
    const email = user?.email;

    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = (data) => {
        data.displayName = displayName;
        data.email = email;
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Review Has Been Submitted");
                    reset();
                }
            })
    }
    useEffect(() => {
       
    }, [])
    return (
        <div>
            <h1>This is review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 d-flex flex-column">
                <textarea
                    {...register("review")}
                    placeholder="Please Share Your Review With Us"
                    className="p-2 my-2 mx-auto w-50 h-100"
                />
                <input
                    {...register("rating")}
                    placeholder="Please Give Us A Rating Out of 5"
                    className="p-2 my-2 mx-auto w-50"
                />
                   <input
                        {...register("image")}
                        placeholder="Please Share a Live Link Of Your Own Image"
                        className="p-2 my-2 mx-auto w-50"
                    />
                <input type="submit" value="Share Review" className="btn btn-dark my-2 m-auto w-50" id="place-order-btn" />
            </form>
        </div>
    );
};

export default Review;