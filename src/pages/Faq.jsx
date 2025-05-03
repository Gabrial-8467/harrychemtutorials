import React, { useState } from 'react';
import '../styles/Faq.css'; // Importing CSS for styling

const faqData = [
  {
    question: "What courses do you offer?",
    answer: "We offer Chemistry Tuition Classes for Class 11 and Class 12 students, including foundational courses, advanced topics for both classes.",
  },
  {
    question: "How can I enroll in a course?",
    answer: "To enroll, simply visit our Contact page and talk with our teacher to enroll in a course. ",
  },
  {
    question: "Are your courses online or offline?",
    answer: "Currently, our courses are offered offline, practice materials, and one-on-one sessions are available. We do not offer online classes at this moment.",
  },
  {
    question: "Do you provide course materials?",
    answer: "Yes! We provide comprehensive study materials for each course, including notes, practice papers, and regular assessments to help students prepare for exams.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if the same question is clicked
    } else {
      setActiveIndex(index); // open the clicked question
    }
  };

  return (
    <div className="faq">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
