import React from 'react';
import '../styles/Courses.css'; // Importing CSS for styling

const courses = [
  {
    id: 1,
    title: 'Class 11 Chemistry Classes',
    description: 'Daily classes focusing on atomic structure, periodic table, chemical bonding, and more to build a strong foundation.',
    price: '₹1200 per month',
    batches: [
      'Class 11th Batch: 6:00 PM - 7:00 PM',
    ],
  },
  {
    id: 2,
    title: 'Class 12 Advanced Chemistry Classes',
    description: 'Daily classes covering Organic, Inorganic, and Physical Chemistry to prepare for boards and competitive exams.',
    price: '₹1200 per month',
    batches: [
      'Class 12th Batch 1: 4:00 PM - 5:00 PM',
      'Class 12th Batch 2: 5:00 PM - 6:00 PM',
    ],
  }
];

const Courses = () => {
  return (
    <div className="courses">
      <h2 className="courses-heading">Our Courses</h2>
      <p className="courses-description">
        Daily live classes for Class 11 and 12 students. Choose your preferred batch timing and start your learning journey today!
      </p>
      
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-price"><strong>Price:</strong> {course.price}</p>
            <div className="course-batches">
              <strong>Batch Timings:</strong>
              <ul>
                {course.batches.map((batch, index) => (
                  <li key={index}>{batch}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
