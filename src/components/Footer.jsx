import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>Harry Tutorials</h2>
          <p>
            Providing quality Chemistry education for classes 11 and 12. Focused on building concepts and scoring high in board and competitive exams.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: harrytutorials@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Street No. 4, Near Kwality Chowk, Shimlapuri, Ludhiana, Punjab 141003</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Harry Tutorials. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
