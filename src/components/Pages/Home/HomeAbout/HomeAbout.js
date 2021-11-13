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
                                <img src="https://images.pexels.com/photos/7144176/pexels-photo-7144176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://image.freepik.com/free-photo/close-up-sales-manager-black-suit-selling-car-customer_146671-14738.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://image.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-20978.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeabout-right-area col-lg-5  ps-3">
                    <h1 className="p-3">About Us</h1>
                    <hr />
                    <p>CARGET is a trusted and reliable vehicle dealership company among all the leading and updated companies in Asia. We are here to bring the luxury cars. CARGET is a proud member of Association of Dealership Agents of Asia-ATDA and Vehicle Management Association of Asia.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;