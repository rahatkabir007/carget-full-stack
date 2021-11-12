import React from 'react';
import './HomeAbout.css';
const HomeAbout = () => {
    return (
        <div className="container my-5 homeabout">
            <div className="homeabout-container row">
                <div className="homeabout-left-area col-lg-6 ">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeabout-right-area col-lg-5  ps-3">
                    <h1 className="p-3">About Us</h1>
                    <hr />
                    <p>Travelo is a trusted and reliable tour and travel company among all the leading and updated tour-operating services in Asia. We are here to bring the luxury to your traveling, Travelo is a proud member of Association of Travel Agents of Asia-ATAA and Tour Operators Association of Asia.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;