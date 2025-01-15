import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Clock, IndianRupee, Bot } from 'lucide-react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundPattern} />
      
      <Container className="text-center position-relative">
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Next-Gen</span>{' '}
          <span className={styles.gradientText2}>AI-Powered</span>
          <br />
          Recruitment Tool
        </h1>
        <p className={styles.subtitle}>
          Transform your hiring process with AI-driven insights, automated<br />
          assessments, and intelligent candidate matching.
        </p>
        
        <div className={styles.buttonGroup}>
          <Button className="btn-gradient rounded-pill px-4 py-3">Get Started Free</Button>
          <Button className="btn-outline rounded-pill px-4 py-3">Watch Demo</Button>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <Clock size={32} className={styles.statIcon} />
            <div className={styles.statValue}>70%</div>
            <div className={styles.statLabel}>Save 70% Time</div>
          </div>
          <div className={styles.statItem}>
            <IndianRupee size={32} className={styles.statIcon} />
            <div className={styles.statValue}>50%</div>
            <div className={styles.statLabel}>Reduce Costs</div>
          </div>
          <div className={styles.statItem}>
            <Bot size={32} className={styles.statIcon} />
            <div className={styles.statValue}>99%</div>
            <div className={styles.statLabel}>AI Accuracy</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;