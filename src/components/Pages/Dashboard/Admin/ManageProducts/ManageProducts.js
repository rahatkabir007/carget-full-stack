import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
import { Spinner } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://carget-full-stack-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    if (products.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="bproduct" variant="success" /></div>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            const url = `https://carget-full-stack-server.vercel.app/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setproducts(remaining);
                        alert("Product Has Been Deleted");
                    }
                })
        }

    }


    return (
        <div className="product-section" id="products">
            <h1 className="text-center">Our Cars</h1>
            <hr />
            <div className="container my-products my-4">
                <div className="row">
                    {
                        products.map(product => <div className="col-md-12 col-lg-12 col-xxl-4 service-section mt-3">
                            <div className="card product-card h-100 mx-auto " style={{ width: "25rem" }}>
                                <img src={product?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                <div className="card-body text-center product-text">
                                    <h2 className="card-title">{product?.carName}</h2>
                                    <p className="card-text" id="description">{product?.description}</p>
                                    <p className="card-text" id="price">Price:  {product?.price}$</p>
                                </div>
                                <div className="text-center p-3">
                                    <button className="secondary-btn" onClick={() => handleDelete(product?._id)}>Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageProducts;