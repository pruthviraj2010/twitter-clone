import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  // Initialize state with the value from localStorage, or default to "home"
  const [activeNav, setActiveNav] = useState(localStorage.getItem("activeNav") || "home");

  const handleClick = (navItem) => {
    setActiveNav(navItem);
    // Store the selected nav item in localStorage
    localStorage.setItem("activeNav", navItem);
  };

  useEffect(() => {
    // Update the activeNav state from localStorage when the component mounts
    const storedNav = localStorage.getItem("activeNav");
    if (storedNav) {
      setActiveNav(storedNav);
    }
  }, []);

  return (
    <div>
      <nav className="nav flex-column align-items-start" style={{ marginInlineStart: "157px" }}>
        <Link className="nav-link navbar-link" aria-current="page" to="home">
          <i className="fa-brands icon fa-xl fa-x-twitter"></i>
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'home' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('home')}
          to="/home"
        >
          <i className="fa-solid icon fa-house"></i> Home
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'explore' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('explore')}
          to="explore"
        >
          <i className="fa-solid icon fa-magnifying-glass"></i> Explore
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'notification' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('notification')}
          to="a"
        >
          <i className="fa-regular icon fa-bell"></i> Notification
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'messages' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('messages')}
          to="a"
        >
          <i className="fa-regular icon fa-envelope"></i> Messages
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'grok' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('grok')}
          to="a"
        >
          <i className="fa-regular icon fa-square-minus"></i> Grok
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'communities' ? 'fw-bold' : ''}`}
          onClick={() => handleClick('communities')}
          to="a"
        >
          <i className="fa-solid mi fa-user-group"></i> Communities
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'premium' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('premium')}
          to="a"
        >
          <i className="fa-brands icon fa-x-twitter"></i> Premium
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'verifiedOrgs' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('verifiedOrgs')}
          to="a"
        >
          <i className="fa-solid icon fa-bolt-lightning"></i> Verified Orgs
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'profile' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('profile')}
          to="a"
        >
          <i className="fa-regular icon fa-user"></i> Profile
        </Link>
        <Link
          className={`nav-link navbar-link ${activeNav === 'more' ? ' fw-bold' : ''}`}
          onClick={() => handleClick('more')}
          to="a"
        >
          <i className="fa-solid icon fa-ellipsis"></i> More
        </Link>
        <Link className="nav-link rounded-pill postbtn fw-bold" to="a">Post</Link>
      </nav>
    </div>
  );
};

export default Navbar;
