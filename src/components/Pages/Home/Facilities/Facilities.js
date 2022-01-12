import React from 'react';
import './Facilities.css';
const Facilities = () => {

    const facilities = [
        {
            key: '1',
            img: "https://image.flaticon.com/icons/png/128/859/859835.png",
            name: 'Results Driven',
            detail: 'We have Best Cars Which Have Great Rating'
        },
        {
            key: '2',
            img: 'https://image.flaticon.com/icons/png/128/226/226537.png',
            name: 'Proven Technology',
            detail: 'Cars Which Has The Latest Technologies'
        },
        {
            key: '3',
            img: ' https://image.flaticon.com/icons/png/512/814/814421.png',
            name: 'Winning Culture',
            detail: 'So Many Beautiful Cars That You Can Compete'
        },
        {
            key: '4',
            img: 'https://image.flaticon.com/icons/png/128/646/646623.png',
            name: 'Top Performance',
            detail: 'Highest Speed and Less Oil Cost For Many Years'
        },
    ]
    return (
        <div className="mt-3 facilities-section container">
            <h1 className="text-center my-3">Our Facilities</h1>
            <hr />
            <div className="row my-2">
                {

                    facilities.map(facility => <div className="col-md-6 col-lg-6 col-xxl-3 facility-section my-3">
                        <div className="facility-card h-100 mx-auto  " style={{ width: "18rem" }}>
                            {/* <img src={facility.img} className="card-img-top h-50" alt="..." /> */}
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