import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
        </div>
    );
};

export default Home;