import React from 'react';
import { Container } from 'react-bootstrap';
import { Play } from 'lucide-react';
import styles from './Demo.module.css';

function Demo() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>See RecrulT AI in Action</h2>
        <p className={styles.subtitle}>
          Watch how our AI-powered platform transforms the recruitment process
        </p>
        
        <div className={styles.demoGrid}>
          <div className={styles.videoCard}>
            <div 
              className={styles.thumbnail}
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className={styles.playButton}>
                <Play size={24} color="#1E88E5" />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>AI-Powered Resume Scoring</h3>
              <p className={styles.cardText}>
                See how our AI analyzes and scores resumes in real-time
              </p>
            </div>
          </div>

          <div className={styles.videoCard}>
            <div 
              className={styles.thumbnail}
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className={styles.playButton}>
                <Play size={24} color="#1E88E5" />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Smart Assessment Platform</h3>
              <p className={styles.cardText}>
                Experience our intelligent assessment and proctoring system
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Demo;