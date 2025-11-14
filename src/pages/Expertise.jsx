import React from 'react'
import './ExpertisePage.css'

function Expertise() {
  const expertiseItems = [
    {
      title: "Expertise in AI",
      subtitle: "Artificial Intelligence (AI)",
      description: "Applying Artificial Intelligence, since before ChatGPT. From workflow automation, to rapid prototyping, to previously unthinkable experiences, we've been delivering real world applications of AI since it was called Machine Learning. Read all about it.",
      icon: "🤖"
    },
    {
      title: "Content Management Systems (CMS)",
      subtitle: "The market leader in enterprise WordPress delivery.",
      description: "The top WP VIP partner since 2011. Their inaugural Gold Partner of the Quarter. And the Year. When it comes to making with and for WordPress, our 10up WordPress Practice leads the way.",
      icon: "📝"
    },
    {
      title: "Mobile apps",
      subtitle: "Award winning, chart topping iOS and iPadOS apps.",
      description: "Mobile apps that push the envelope since the iPhone App Store burst onto the scene. We've notched App of the Year for clients and help them top the charts. Apple even asked us to make an app for them.",
      icon: "📱"
    },
    {
      title: "Web Development",
      subtitle: "Modern, scalable web applications.",
      description: "Building cutting-edge web experiences with the latest technologies. From e-commerce platforms to enterprise applications, we deliver solutions that perform.",
      icon: "🌐"
    },
    {
      title: "Growth & Strategy",
      subtitle: "Data-driven growth strategies.",
      description: "We help businesses scale through strategic planning, analytics, and optimization. Our growth strategies are backed by data and proven methodologies.",
      icon: "📈"
    },
    {
      title: "Branding & Design",
      subtitle: "Creating memorable brand experiences.",
      description: "From brand identity to user experience design, we create cohesive visual languages that resonate with audiences and drive engagement.",
      icon: "🎨"
    }
  ]

  return (
    <div className="expertise-page">
      <div className="expertise-page-hero">
        <div className="expertise-page-container">
          <h1 className="expertise-page-title">Expertise</h1>
          <p className="expertise-page-subtitle">Built on Mastery. Delivered with Precision.</p>
        </div>
      </div>

      <div className="expertise-page-content">
        <div className="expertise-page-container">
          <div className="expertise-grid">
            {expertiseItems.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h2 className="expertise-card-title">{item.title}</h2>
                <h3 className="expertise-card-subtitle">{item.subtitle}</h3>
                <p className="expertise-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise


