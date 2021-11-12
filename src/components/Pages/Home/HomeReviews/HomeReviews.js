import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const HomeReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-mesa-50717.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    if (reviews.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }


    return (
        <>
            <div className="container my-orders my-4">
                <div className="row">
                    {
                        reviews.map(review => <div className="col-md-6 col-lg-6 col-xxl-4 service-section mt-3">
                            <div className="card service-card h-100 mx-auto " style={{ width: "18rem" }}>
                                <img src={review?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                <div className="card-body text-center service-text">
                                    <h2 className="card-title">{review?.displayName}</h2>
                                    <p className="card-text" id="description">{review?.review}</p>
                                    <p className="card-text" id="price">{review?.rating}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </>
    );
};

export default HomeReviews;