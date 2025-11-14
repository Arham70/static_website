import React from 'react'
import './Expertise.css'

function Expertise() {
  const expertiseItems = [
    {
      title: "Expertise in AI",
      subtitle: "Artificial Intelligence (AI)",
      description: "Applying Artificial Intelligence, since before ChatGPT. From workflow automation, to rapid prototyping, to previously unthinkable experiences, we've been delivering real world applications of AI since it was called Machine Learning. Read all about it."
    },
    {
      title: "Content Management Systems (CMS)",
      subtitle: "The market leader in enterprise WordPress delivery.",
      description: "The top WP VIP partner since 2011. Their inaugural Gold Partner of the Quarter. And the Year. When it comes to making with and for WordPress, our 10up WordPress Practice leads the way."
    },
    {
      title: "Mobile apps",
      subtitle: "Award winning, chart topping iOS and iPadOS apps.",
      description: "Mobile apps that push the envelope since the iPhone App Store burst onto the scene. We've notched App of the Year for clients and help them top the charts. Apple even asked us to make an app for them."
    }
  ]

  return (
    <section className="expertise" id="expertise">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">Expertise</h2>
          <p className="expertise-subtitle">Built on Mastery. Delivered with Precision.</p>
        </div>
        
        <div className="expertise-items">
          {expertiseItems.map((item, index) => (
            <div key={index} className="expertise-item">
              <h3 className="expertise-item-title">{item.title}</h3>
              <h4 className="expertise-item-subtitle">{item.subtitle}</h4>
              <p className="expertise-item-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="expertise-footer">
          <a href="#expertise" className="what-we-can-do-link">What We Can Do</a>
        </div>
      </div>
    </section>
  )
}

export default Expertise


