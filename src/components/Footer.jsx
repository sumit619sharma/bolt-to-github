import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">RecrulT AI</h5>
            <p className="text-muted">
              Transforming recruitment with AI-powered solutions for modern businesses.
            </p>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-3">Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#features" className="text-muted text-decoration-none">Features</a></li>
              <li className="mb-2"><a href="#pricing" className="text-muted text-decoration-none">Pricing</a></li>
              <li className="mb-2"><a href="#demo" className="text-muted text-decoration-none">Demo</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about" className="text-muted text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#careers" className="text-muted text-decoration-none">Careers</a></li>
              <li className="mb-2"><a href="#contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Stay Updated</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center text-muted">
          <small>&copy; 2023 RecrulT AI. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;