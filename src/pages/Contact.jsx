import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    
    // You can handle form submission here, for example sending data to a backend server.

    // Simulate a successful submission
    setTimeout(() => {
      setFormStatus('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' }); // reset form fields
    }, 2000);
  };

  return (
    <div className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        Have any questions or want to learn more about Harry Tutorials? Fill out the form below, and we'll get in touch with you as soon as possible!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
