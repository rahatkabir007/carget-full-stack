import React, { useState } from 'react';
import { Carousel, Col, Row , Container, Button} from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <React.Fragment>
        <div className="banner-section">
                <Container>
                    <Row className="row-area">
                        <Col lg={6} className="left-banner-area my-5">
                            <h1>Welcome to <span style={{ color: '#f18d4d', fontWeight: 'bolder' ,textShadow: '4px 4px black'}}>CARGATE</span></h1>
                            <h4>LIFE'S TOO SHORT TO DRIVE BORING CARS</h4>
                            <h5>FIND YOUR DREAM CAR HERE</h5>
                            <Button className="primary-btn">Buy Now</Button>

                        </Col>
                        <Col lg={6} className="right-banner-area">
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item className="">
                                    <img
                                        className="d-block w-100 "
                                        src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="First slide"
                                    />
                                   
                                </Carousel.Item>
                                <Carousel.Item className="">
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="Second slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item className="">
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
             </Container>
          
            </div>
            </React.Fragment>
    );
};

export default Banner;