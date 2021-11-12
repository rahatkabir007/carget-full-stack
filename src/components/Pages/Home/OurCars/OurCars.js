import React, { useEffect, useState } from 'react';
import './OurCars.css';
import { Spinner } from 'react-bootstrap';
import OurCar from './OurCar/OurCar';

const OurCars = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    return (
        <div className="products-section" id="products">
            <h1 className="text-center">Our Cars</h1>
            <hr />
            <div className="container">
                <div className="row">
                    {
                        products.slice(0, 6).map(product => <OurCar key={product._id} product={product}></OurCar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurCars;