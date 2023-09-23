import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="logo-container">
        <a href="index.html">
        <img className="Logo" src={`${process.env.PUBLIC_URL}/images/Logo.jpg`} alt="Logo" data-testid="logo-image" />
        </a>
      </div>
      <div className="nav-links">
        <Link to="calendar-section" className="nav-link" smooth={true} duration={500} offset={-80} data-testid="calendar-link">Calendar</Link>
        <Link to="news-section" className="nav-link" smooth={true} duration={500} offset={-80} data-testid="news-link">News</Link>
        <Link to="membership-section" className="nav-link" smooth={true} duration={500} offset={-80} data-testid="membership-link">Membership</Link>
        <Link to="about-section" className="nav-link" smooth={true} duration={500} offset={-80} data-testid="about-link">About the Club</Link>
      </div>
      <div className="nav-search">
        <input type="text" id="searchInput" placeholder="Search..." data-testid="search-input" />
        <button id="searchButton" data-testid="search-button">Search</button>
      </div>
      <div className="login" data-testid="login-section">
        <a href="Login" data-testid="login-link">Member Login</a>
      </div>
    </nav>
  );
}

export default Navigation;
