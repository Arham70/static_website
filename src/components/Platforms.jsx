import React from 'react'
import './Platforms.css'

function Platforms() {
  const platforms = [
    "WordPress", "Sanity", "AWS", "WooCommerce", "Shopify",
    "PayloadCMS", "Swell (Commerce)", "Contentful", "Webflow",
    "Vercel", "Amplitude", "MoEngage", "Elasticsearch",
    "Microsoft Azure", "Google Analytics", "Parsely", "Marfeel"
  ]

  return (
    <section className="platforms">
      <div className="platforms-container">
        <div className="platforms-header">
          <h2 className="platforms-title">Platforms</h2>
          <p className="platforms-subtitle">Platforms and technology partnerships that elevate our clients.</p>
        </div>
        
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-item">
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platforms


