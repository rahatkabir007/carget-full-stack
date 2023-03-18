import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import './AddProducts.css';

const AddProducts = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post(`${process.env.REACT_APP_API_LINK}/products`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset();
                }
            })
    }
    return (
        <>
            <div className="container my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto text-center add-form-area">
                    <input
                        {...register("name")}
                        defaultValue={user?.displayName}
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("email")}
                        defaultValue={user?.email}
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("carName", { required: true })}
                        placeholder="Car Name"
                        className="p-2 m-2 w-100"
                    />
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Car Description"
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        className="p-2 m-2 w-100"
                    />

                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <div className="">
                        <input type="submit" value="ADD" className="secondary-btn my-2" />
                    </div>
                </form>
            </div>


        </>
    );
};

export default AddProducts;