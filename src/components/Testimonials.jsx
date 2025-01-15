import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "Tech Solutions Inc",
      text: "RecrulT AI has revolutionized our hiring process. The AI-powered assessments have saved us countless hours and improved our candidate selection accuracy by 85%."
    },
    {
      name: "Michael Chen",
      role: "Talent Acquisition Manager",
      company: "Global Innovations",
      text: "The automated screening process is incredibly accurate. We've seen a 40% reduction in time-to-hire and a significant improvement in the quality of our technical hires."
    },
    {
      name: "Emily Rodriguez",
      role: "Recruiting Lead",
      company: "StartUp Hub",
      text: "The platform's AI proctoring features give us confidence in remote assessments. Our hiring success rate has increased by 60% since implementing RecrulT AI."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Trusted by Industry Leaders</h2>
        <p className={styles.subtitle}>
          See how leading companies are transforming their recruitment process
        </p>
        
        <div className={styles.carousel}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ''}`}
            >
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.info}>
                  <h5>{testimonial.name}</h5>
                  <p className={styles.meta}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          <div className={styles.controls}>
            <button className={styles.button} onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className={styles.button} onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;