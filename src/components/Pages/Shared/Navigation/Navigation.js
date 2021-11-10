import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar-area">
                <Container>
                    <Navbar.Brand className="logo-area me-auto"><img src={logo} className="logo" alt="CARGET" /></Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: '#f18d4d'}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-area">
                            <Link to='/home'>Home</Link>
                            <Link to='/explore'>Explore</Link>
                            <Link to='/about'>About</Link>
                        </Nav>
                        <Nav className="nav-area ms-end">
                            <Link to='/dashboard'>Dashboard</Link>
                            <Link to='/login'>
                               Login
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </>
    );
};

export default Navigation;