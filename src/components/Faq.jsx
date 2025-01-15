import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Plus, Minus } from 'lucide-react';
import styles from './Faq.module.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How accurate is the AI resume scoring?",
      answer: "Our AI screening system has a 99% accuracy rate in matching candidates to job requirements, validated through extensive testing and real-world usage."
    },
    {
      question: "What types of assessments are available?",
      answer: "We offer technical assessments, soft skills evaluations, coding challenges, personality tests, and custom assessments tailored to your specific needs."
    },
    {
      question: "How does the AI proctoring system work?",
      answer: "Our AI proctoring system uses advanced face detection and multi-screen monitoring to ensure assessment integrity while complying with privacy regulations."
    },
    {
      question: "Can I integrate with my existing ATS?",
      answer: "Yes, we offer seamless integration with major ATS platforms including Workday, Greenhouse, and Lever through our API and native connectors."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our platform
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className={styles.icon} />
                ) : (
                  <Plus className={styles.icon} />
                )}
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Faq;