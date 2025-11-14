import React, { useState } from 'react'
import './ContactPage.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="contact-page-hero">
        <div className="contact-page-container">
          <h1 className="contact-page-title">Contact Us</h1>
          <p className="contact-page-subtitle">Let's build something amazing together.</p>
        </div>
      </div>

      <div className="contact-page-content">
        <div className="contact-page-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-text">
                Have a project in mind? Want to learn more about our services? 
                We'd love to hear from you.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📧</div>
                  <div>
                    <h3 className="contact-detail-label">Email</h3>
                    <a href="mailto:hello@digitalagency.com" className="contact-detail-value">
                      hello@digitalagency.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <h3 className="contact-detail-label">Phone</h3>
                    <a href="tel:+12127637726" className="contact-detail-value">
                      (212) 763-7726
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <h3 className="contact-detail-label">Location</h3>
                    <p className="contact-detail-value">
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


