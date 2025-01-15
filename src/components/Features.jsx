import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Features.module.css';

function Features() {
  return (
    <section className={`${styles.section} py-5`}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Powerful Features for Modern Recruitment</h2>
          <p className="lead text-muted">
            Our AI-powered platform streamlines your recruitment process from start to finish
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop" alt="Resume" className={styles.image} />
            </div>
            <h3 className={styles.title}>Smart Resume Scoring</h3>
            <p className={styles.description}>
              AI-powered resume analysis that matches candidates to job requirements with 99% accuracy
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&auto=format&fit=crop" alt="Assessment" className={styles.image} />
            </div>
            <h3 className={styles.title}>Skill Assessments</h3>
            <p className={styles.description}>
              Customizable assessments that evaluate technical and soft skills in real-time
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500&auto=format&fit=crop" alt="Proctoring" className={styles.image} />
            </div>
            <h3 className={styles.title}>AI Proctoring</h3>
            <p className={styles.description}>
              Secure remote assessments with advanced AI monitoring and fraud detection
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;