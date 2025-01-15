import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './AiProctoring.module.css';

function AiProctoring() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Advanced AI Proctoring Features</h2>
          <p className={styles.subtitle}>
            Ensure assessment integrity with our comprehensive AI monitoring system
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=500&auto=format&fit=crop" 
                alt="Face Detection" 
                className={styles.image} 
              />
            </div>
            <h3 className={styles.cardTitle}>Face Detection</h3>
            <p className={styles.description}>
              Advanced monitoring system ensures candidate authenticity throughout the assessment
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=500&auto=format&fit=crop" 
                alt="Multi-screen Detection" 
                className={styles.image} 
              />
            </div>
            <h3 className={styles.cardTitle}>Multi-screen Detection</h3>
            <p className={styles.description}>
              Advanced monitoring system detects additional display usage during tests
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=500&auto=format&fit=crop" 
                alt="Eye-ball Tracking" 
                className={styles.image} 
              />
            </div>
            <h3 className={styles.cardTitle}>Eye-ball Tracking</h3>
            <p className={styles.description}>
              Real-time eye movement monitoring to prevent unauthorized assistance
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AiProctoring;