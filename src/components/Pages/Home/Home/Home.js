import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeReviews from '../HomeReviews/HomeReviews';
import OurCars from '../OurCars/OurCars';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <OurCars></OurCars>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;