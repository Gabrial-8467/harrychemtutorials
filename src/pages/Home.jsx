import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Master Chemistry with Harry Tutorials</h1>
            <p className="hero-subtitle">For Class 11 & 12 | CBSE & State Boards</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Choose Harry Tutorials?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <img src="https://images.pexels.com/photos/5124849/pexels-photo-5124849.jpeg?cs=srgb&dl=pexels-cottonbro-5124849.jpg&fm=jpg" alt="Top Class Notes" className="feature-img" />
            <h3>Top Class Notes</h3>
            <p>Carefully curated notes for each chapter following the latest syllabus.</p>
          </div>
          <div className="feature-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-DJlWoLwmd_Jkr3TSWw_cr_L7lRjiw2bPw&s" alt="Easy Concepts" className="feature-img" />
            <h3>Easy Concepts</h3>
            <p>Complex chemistry concepts explained in the simplest way possible.</p>
          </div>
          <div className="feature-box">
            <img src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/96057/online-classes-for-class-1-to-10706902223.jpg" alt="Doubt Support" className="feature-img" />
            <h3>Doubt Support</h3>
            <p>One-on-one doubt sessions and instant support via WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="courses">
        <h2>Courses We Offer</h2>
        <div className="course-banner">
          <img src="https://img.freepik.com/premium-vector/chemistry-lab-school-class-science-education-banner_331172-1560.jpg" alt="Courses Banner" className="course-image" />
        </div>
        <ul className="course-list">
          <li>📘 Class 11 Full Chemistry (Organic + Inorganic)</li>
          <li>📕 Class 12 Full Chemistry (Boards Exam)</li>
        </ul>
      </section>
      <section className="map-section">
  <h2 className="map-heading">Visit Us</h2>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1549.6160734743419!2d75.86726061516127!3d30.86530960618977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a831b604a9f21%3A0x1626997f64327fd!2sGuru%20Ji%20Enterprises!5e1!3m2!1sen!2sin!4v1744599209889!5m2!1sen!2sin" 
      className="google-map"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Harry Tutorials Location"
    ></iframe>
  </div>
</section>

      
    </div>
  )
}

export default Home
 