import React, { useEffect, useState } from 'react';
import './OurCars.css';
import { Spinner } from 'react-bootstrap';
import OurCar from './OurCar/OurCar';
import { Link } from 'react-router-dom';

const OurCars = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://carget-full-stack-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    return (
        <div className="products-section" id="products">
            <h1 className="text-center my-3">Latest Cars</h1>
            <hr />
            <div className="container">

                <div className="row">
                    {
                        products.slice(1, 4).map(product => <OurCar key={product._id} product={product}></OurCar>)
                    }
                </div>
                <div className="text-center p-3">
                    <Link to='/explore' className="secondary-btn">Show More</Link>
                </div>
            </div>
        </div>
    );
};

export default OurCars;