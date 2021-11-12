import React from 'react';
import './Facilities.css';
const Facilities = () => {

    const facilities = [
        {
            key: '1',
            img: " https://i.ibb.co/Ntq2dK4/194-Travelling-in-Balloon.png",
            name: 'Activities',
            detail: 'We have many different activites!Skydiving, Paragliding etc.'
        },
        {
            key: '2',
            img: ' https://i.ibb.co/v47wrBP/137-Flying-for-Holiday.png',
            name: 'Travel Arrangement',
            detail: 'You can book your tickets from us!Planes, Trains etc.'
        },
        {
            key: '3',
            img: ' https://i.ibb.co/zrmyxpC/87-Going-on-Roadtrip.png',
            name: 'Private Guide',
            detail: 'We provide private guide to enjoy the places with safety!'
        },
        {
            key: '4',
            img: '  https://i.ibb.co/bmk1bzY/156-Explore-the-World.png',
            name: 'Location Manager',
            detail: 'Location Manager will help you to locate different beautiful places'
        },
    ]
    return (
        <div className="mt-3 facilities-section container">
            <h1 className="text-center my-3">Our Facilities</h1>
            <hr />
            <div className="row my-2">
                {

                    facilities.map(facility => <div className="col-md-6 col-lg-6 col-xxl-3 facility-section my-3">
                        <div className="card facility-card h-100 mx-auto  " style={{ width: "18rem" }}>
                            <img src={facility.img} className="card-img-top h-50" alt="..." />
                            <div className="card-body text-center facility-text">
                                <h2 className="card-title  ">{facility.name}</h2>
                                <p className="card-text">{facility.detail}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Facilities;