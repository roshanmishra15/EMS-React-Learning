import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                {/* Logo */}
                <div className="navbar-logo">
                    <span className="logo-icon">E</span>
                    <span c lassName="logo-text">EMS</span>
                </div>

                {/* Navigation */}
                <div className="navbar-links">
                    <Link to="/" className="nav-link active">
                        Home
                    </Link>

                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </div>

                {/* Right Side */}
                <div className="navbar-profile">
                    <div className="profile-avatar">
                        R
                    </div>

                    <div className="profile-info">
                        <span className="profile-name">Roshan</span>
                        <span className="profile-role">Admin</span>
                    </div>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;