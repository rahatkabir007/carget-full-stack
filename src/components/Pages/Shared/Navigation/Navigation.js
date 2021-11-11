import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar-area">
                <Container>
                    <Navbar.Brand className="logo-area me-auto"><img src={logo} className="logo" alt="CARGET" /></Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: '#f18d4d' }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-area" id="left-nav">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/explore'>Explore</NavLink>
                            <NavLink to='/about'>About</NavLink>
                        </Nav>
                        <Nav className="nav-area ms-auto">
                            {
                                user?.email ?
                                    <div className="hidden-nav">
                                        <span style={{ textDecoration: 'none', color: 'white', fontSize: '20px'}} id="username">Welcome, {user?.displayName}</span>
                                        <NavLink to='/dashboard'>Dashboard</NavLink>
                                        <NavLink onClick={logOut} to='/home'>Logout</NavLink>
                                    </div> :
                                    <NavLink to='/login'>
                                        Login
                                    </NavLink>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;