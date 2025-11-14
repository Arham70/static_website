import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-section-title">Navigation</h3>
            <nav className="footer-nav">
              <Link to="/expertise">Expertise</Link>
              <Link to="/work">Work</Link>
              <Link to="/company">Company</Link>
              <Link to="/blog">Blog</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Company</h3>
            <nav className="footer-nav">
              <Link to="/contact">Contact</Link>
              <a href="#careers">Careers</a>
              <a href="#diversity">Diversity</a>
            </nav>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Contact</h3>
            <div className="footer-contact">
              <a href="mailto:hello@digitalagency.com">hello@digitalagency.com</a>
              <a href="tel:+12127637726">(212) 763-7726</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Social</h3>
            <nav className="footer-nav">
              <a href="#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <span>DigitalAgency is carbon neutral</span>
          </div>
          <div className="footer-copyright">
            © 2025 DigitalAgency • All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

