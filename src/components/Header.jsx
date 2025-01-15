import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styles from './Header.module.css';

function Header() {
  useEffect(() => {
    // Update hash in URL without scrolling
    const updateHash = (hash) => {
      window.history.pushState(null, '', hash);
    };

    const scrollToSection = (e) => {
      e.preventDefault();
      const hash = e.target.getAttribute('href');
      const element = document.querySelector(hash);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        updateHash(hash);
      }
    };

    // Add click handlers to all nav links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', scrollToSection);
      });
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={styles.brand}>
          <span className="gradient-text">RecrulT AI</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto ${styles.nav}`}>
            <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="#features" className={styles.navLink}>Features</Nav.Link>
            <Nav.Link href="#testimonials" className={styles.navLink}>Testimonials</Nav.Link>
            <Nav.Link href="#demo" className={styles.navLink}>Demo</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Pricing</Nav.Link>
            <Nav.Link href="#faq" className={styles.navLink}>FAQ</Nav.Link>
          </Nav>
          <Button className="btn-gradient rounded-pill px-4">Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;