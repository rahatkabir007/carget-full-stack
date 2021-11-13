import axios from 'axios';
import { FaStar } from 'react-icons/fa'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import './Review.css';

const Review = () => {
    const { user } = useAuth();
    //star rating 
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const displayName = user?.displayName;
    const email = user?.email;

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.displayName = displayName;
        data.email = email;
        data.rating = rating;
        console.log(data);
        axios.post('https://cryptic-mesa-50717.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Review Has Been Submitted");
                    reset();
                }
            })
    }
    
    return (
        <div>
            <h1>Please Share Your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 d-flex flex-column">
                <textarea
                style={{height: '200px'}}
                    {...register("review")}
                    placeholder="Please Share Your Review With Us"
                    className="p-2 my-2 mx-auto w-50"
                />
                <div className="d-flex justify-content-center my-3 flex-column">
                    <div>
                        <h3>Drop a Rating:</h3>
                   </div>
                    <div>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}

                                />
                                <FaStar className="star" size={25}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} />
                            </label>;
                        })}
                   </div>
               </div>
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