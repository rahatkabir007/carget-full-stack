import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ScrollEffect from 'react-animate-on-scroll';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://carget-full-stack-server-production.up.railway.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    return (
        <div>
            <Navigation></Navigation>
            <div id="products" style={{ backgroundColor: '#E6DDC4' }}>
                <h1 className="text-center" style={{ color: "#f18d4d", fontWeight: 700, paddingTop: '20px' }} >Explore More Of Our Cars</h1>
                <hr />
                <div className="container">
                    <div className="row">
                        {
                            products.map(product => <div key={product?._id} className="col-md-6 col-lg-6 col-xxl-4 products-section my-4">
                                <ScrollEffect animateIn="fadeInLeft" queueClass="queue" duration="2" queueDuration="2">
                                    <div className="card product-card h-100 mx-auto " style={{ width: "24rem" }}>
                                        <img src={product?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                        <div className="card-body text-start product-text">
                                            <h2 className="card-title">{product?.carName}</h2>
                                            <p className="card-text" id="description">{product?.description}</p>
                                            <p className="card-text" id="price">Price:  {product?.price}$</p>
                                        </div>
                                        <div className="text-start p-4">
                                            <Link to={`/selectedproduct/${product?._id}`} className="secondary-btn">Buy Now</Link>
                                        </div>


                                    </div>
                                </ScrollEffect>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;