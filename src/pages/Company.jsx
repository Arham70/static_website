import React from 'react'
import Team from '../components/Team'
import './CompanyPage.css'

function Company() {
  return (
    <div className="company-page">
      <div className="company-page-hero">
        <div className="company-page-container">
          <h1 className="company-page-title">Company</h1>
          <p className="company-page-subtitle">Building the future of digital experiences.</p>
        </div>
      </div>

      <div className="company-page-content">
        <div className="company-page-container">
          <div className="company-intro">
            <h2 className="company-intro-title">Who We Are</h2>
            <p className="company-intro-text">
              We are a team of passionate designers, developers, and strategists dedicated to 
              creating exceptional digital experiences. With years of expertise across AI, 
              mobile, web, and growth, we help businesses transform their digital presence 
              and achieve their goals.
            </p>
            <p className="company-intro-text">
              Our approach combines sharp strategy with precision execution, delivering 
              solutions that not only look great but drive real business impact.
            </p>
          </div>
        </div>
      </div>

      <Team />

      <div className="company-values">
        <div className="company-page-container">
          <h2 className="company-values-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Precision</h3>
              <p className="value-description">Every detail matters. We deliver with precision and attention to excellence.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">We stay ahead of the curve, embracing new technologies and methodologies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Partnership</h3>
              <p className="value-description">We work closely with our clients as true partners in their success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3 className="value-title">Impact</h3>
              <p className="value-description">We measure success by the real-world impact we create for our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company


