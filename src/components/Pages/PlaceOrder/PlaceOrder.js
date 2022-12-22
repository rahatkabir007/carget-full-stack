import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
const PlaceOrder = () => {

    const { user } = useAuth();
    const email = user?.email
    const [productDetails, setProductDetails] = useState([]);
    const { productId } = useParams();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "PENDING";
        data.description = productDetails?.description;
        console.log(data);
        axios.post('https://carget-full-stack-server.vercel.app/placeOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Order Has Been Booked");
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://carget-full-stack-server.vercel.app/selectedproduct/${productId}`)
            .then(res => res.json())
            .then(data => setProductDetails(data));
    }, [productId])

    return (
        <div>
            <Navigation></Navigation>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-5 left-order-details ms-auto">
                        <div className="image-area my-3 w-75 ms-auto" >
                            <img className="w-100 ms-auto mt-5" src={productDetails?.image} alt="" />
                        </div>
                        <div className="text-area w-75 ms-auto mb-5">
                            <h1>{productDetails?.carName}</h1>
                            <p>{productDetails?.description}</p>
                            <p style={{ fontSize: "30px" }}>Price: {productDetails?.price}$</p>
                        </div>
                    </div>
                    <div className="col-lg-7 my-5 right-order-form text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="ms-auto mt-5">
                            <input
                                {...register("name")}
                                value={user?.displayName}
                                className="p-2 m-2 w-100"
                            />
                            {
                                productDetails.name && <input
                                    {...register("carName")}
                                    value={productDetails?.carName}
                                    className="p-2 m-2 w-100"
                                />
                            }
                            {
                                productDetails.name && <input
                                    {...register("price")}
                                    value={productDetails?.price}
                                    className="p-2 m-2 w-100"
                                />
                            }
                            <input
                                {...register("date")}

                                defaultValue={new Date().toLocaleDateString()}
                                className="p-2 m-2 w-100"
                            />
                            {
                                productDetails.name && <input
                                    {...register("image")}
                                    defaultValue={productDetails?.image}
                                    className="p-2 m-2 w-100"
                                />
                            }
                            <input
                                {...register("address")}
                                placeholder="Please Type Your Address"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("phone", { required: true })}
                                placeholder="Please Type Your Phone Number"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input type="submit" value="Place Order" className="secondary-btn my-2" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;