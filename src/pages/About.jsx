import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="about-heading">About Harry Tutorials</h2>

      <div className="about-section">
        <img
          src="/teacher.png"
          alt="Teacher"
          className="about-image"
        />
        <div className="about-content">
          <h3 className="about-subheading">Welcome to Harry Tutorials</h3>
          <p className="about-text">
            At Harry Tutorials, we are dedicated to helping students achieve
            excellence in their Chemistry studies. With years of experience in
            teaching Chemistry to students of Class 11 and Class 12, we provide
            personalized lessons tailored to individual learning needs. Our
            teaching methodology emphasizes interactive learning, practical
            application, and critical thinking, ensuring that our students are
            well-prepared for their exams and beyond.
          </p>

          <h3 className="about-subheading">Our Mission</h3>
          <p className="about-text">
            Our mission is to make Chemistry accessible and enjoyable for every
            student. We believe in building strong foundations, helping students
            master concepts, and providing the necessary support for them to
            excel in their academic journey.
          </p>

          <h3 className="about-subheading">Why Choose Us?</h3>
          <ul className="about-reasons">
            <li>Experienced and highly-qualified instructor</li>
            <li>Interactive lessons and personalized approach</li>
            <li>Proven track record of excellent exam results</li>
            <li>Regular assessments and feedback for continuous improvement</li>
            <li>Flexible schedules to meet student needs</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default About;
