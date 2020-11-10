import React from 'react';
import logo from '../../images/logo_white.png';
import './navbar.css';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <img src={logo} alt="logo" className="logo"/>
            </nav>
        </header>
    )
}