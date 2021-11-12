import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
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
        <div>
            <Navigation></Navigation>
            <div className="products-section" id="products">
                <h1 className="text-center">Our Cars</h1>
                <hr />
                <div className="container">
                    <div className="row">
                        {
                            products.map(product => <div key={product?._id} className="col-md-6 col-lg-6 col-xxl-4 product-section mt-3">
                                <div className="card product-card h-100 mx-auto " style={{ width: "24rem" }}>
                                    <img src={product?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                    <div className="card-body text-center product-text">
                                        <h2 className="card-title">{product?.carName}</h2>
                                        <p className="card-text" id="description">{product?.description}</p>
                                        <p className="card-text" id="price">Price:  {product?.price}$</p>
                                    </div>
                                    <div className="text-center p-3">
                                        <Link to={`/selectedproduct/${product?._id}`} className="booking-btn ">Buy Now</Link>
                                    </div>


                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Explore;