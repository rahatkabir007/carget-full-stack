import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../../images/logo.png';
import Banner from '../../Home/Banner/Banner';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar-area">
                <Container>
                    <Navbar.Brand className="logo-area"><img src={logo} className="logo" alt="CARGET" /></Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: '#f18d4d'}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-area">
                            <Link to='/home'>Home</Link>
                            <Link to='/explore'>Explore</Link>
                            <Link to='/about'>About</Link>
                        </Nav>
                        <Nav className="nav-area">
                            <Link to='/dashboard'>Dashboard</Link>
                            <Link  to='/login'>
                               Login
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Navigation;