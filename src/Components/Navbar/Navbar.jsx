import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/questions">Questions</Link>
            </div>
        </nav>
    );
};

export default Navbar;