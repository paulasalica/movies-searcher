import React from 'react';
import logo from '../images/logo_black.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <img src={logo} alt="logo"/>
            </nav>
        </header>
    )
}