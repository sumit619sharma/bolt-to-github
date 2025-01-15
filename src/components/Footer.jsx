import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.mainContent}>
          <Col lg={4} md={6} className="mb-4">
            <div className={styles.companyInfo}>
              <h3 className={styles.logo}>RecrulT AI</h3>
              <p className={styles.description}>
                Transforming recruitment with AI-powered solutions for modern businesses.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Mail size={18} />
                  <span>contact@recruitai.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={18} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={18} />
                  <span>123 AI Street, Tech Valley, CA 94025</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h4 className={styles.columnTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#demo">Demo</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press Kit</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <h4 className={styles.columnTitle}>Stay Connected</h4>
            <p className={styles.newsletterText}>
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" className={styles.emailInput} />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
            </div>
          </Col>
        </Row>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} RecrulT AI. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;