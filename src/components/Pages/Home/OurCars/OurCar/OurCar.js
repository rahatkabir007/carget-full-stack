import React from 'react';
import { Link } from 'react-router-dom';
import './OurCar.css';
const OurCar = ({ product }) => {
    const { _id, carName, description, price, image } = product;
    return (
        <div className="col-md-6 col-lg-6 col-xxl-4 product-section mt-3">
            <div className="card product-card h-100 mx-auto " style={{ width: "24rem" }}>
                <img src={image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                <div className="card-body text-left product-text">
                    <h2 className="card-title">{carName}</h2>
                    <p className="card-text" id="description">{description}</p>
                    <p className="card-text" id="price">Price:  {price}$</p>
                </div>
                <div className="text-left p-3">
                    <Link to={`/selectedproduct/${_id}`} className="booking-btn ">Buy Now</Link>
                </div>


            </div>
        </div>
    );
};

export default OurCar;