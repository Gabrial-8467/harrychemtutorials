import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Importing CSS for styling

const NotFound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound-heading">404 - Page Not Found</h1>
      <p className="notfound-message">Sorry, the page you are looking for does not exist.</p>
      <p className="notfound-return">
        You can go back to the <Link to="/" className="home-link">Home Page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
