import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Harry Tutorials</Link>
        </div>
        <div className={`menu-icon ${isOpen ? "change" : ""}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {isOpen && (
            <li className="close-btn">
              <button onClick={closeSidebar}>&times;</button>
            </li>
          )}
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/courses" onClick={closeSidebar}>Courses</Link></li>
          <li><Link to="/faq" onClick={closeSidebar}>FAQ</Link></li>
        </ul>
      </nav>
      {isOpen && <div className="nav-overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
