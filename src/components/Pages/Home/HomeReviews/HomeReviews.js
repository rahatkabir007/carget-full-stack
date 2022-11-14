import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Slider from "react-slick";
import './HomeReviews.css';
const HomeReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://carget-full-stack-server-production.up.railway.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    if (reviews.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }
    return (
        <>
            <div className="container-fluid  my-5">
                <div className="slider-section">
                    <Slider {...settings} className="slider">
                        {
                            reviews.map(review => <div className=" mt-3">
                                <div className="card review-card mx-auto" style={{ width: "35rem", height: '23rem' }}>
                                    <img src={review?.image} className="card-img-top" style={{ width: '15rem', height: "12rem", borderRadius: '50%' }} alt="..." />
                                    <div className="card-body text-center review-text h-100">
                                        <h2 className="card-title">{review?.displayName}</h2>
                                        <p className="card-text" id="description">{review?.review}</p>
                                        {review?.rating === 1 ?
                                            <>
                                                <FaStar color="#ffc107" />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                            </>
                                            : review?.rating === 2 ?
                                                <>
                                                    <FaStar color="#ffc107" />
                                                    <FaStar color="#ffc107" />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                </> : review?.rating === 3 ?
                                                    <>
                                                        <FaStar color="#ffc107" />
                                                        <FaStar color="#ffc107" />
                                                        <FaStar color="#ffc107" />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </> : review?.rating === 4 ?
                                                        <>
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                            <FaRegStar />
                                                        </> :
                                                        <>
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                            <FaStar color="#ffc107" />
                                                        </>

                                        }
                                    </div>
                                </div>
                            </div>)
                        }

                    </Slider>
                </div>


            </div>

        </>
    );
};

export default HomeReviews;