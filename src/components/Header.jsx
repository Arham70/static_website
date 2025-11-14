import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>DigitalAgency</Link>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/expertise" onClick={closeMobileMenu} className={location.pathname === '/expertise' ? 'active' : ''}>Expertise</Link>
          <Link to="/work" onClick={closeMobileMenu} className={location.pathname === '/work' ? 'active' : ''}>Work</Link>
          <Link to="/company" onClick={closeMobileMenu} className={location.pathname === '/company' ? 'active' : ''}>Company</Link>
          <Link to="/blog" onClick={closeMobileMenu} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

