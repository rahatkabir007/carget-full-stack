import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeReviews from '../HomeReviews/HomeReviews';
import OurCars from '../OurCars/OurCars';
import SalesCount from '../SalesCount/SalesCount';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <SalesCount></SalesCount>
            <HomeAbout></HomeAbout>
            <Collection></Collection>
            <OurCars></OurCars>
            <HomeReviews></HomeReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;