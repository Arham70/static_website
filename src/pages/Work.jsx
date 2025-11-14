import React from 'react'
import './WorkPage.css'

function Work() {
  const caseStudies = [
    {
      title: "We Made a Community Mural with AI",
      description: "We used ChatGPT and DALL-E to turn human sentiment into a digital work of art with Microsoft Research.",
      tags: ["AI", "Backend", "Design", "Research", "Web"],
      category: "AI, Backend, Design, Research, Web",
      image: "🎨"
    },
    {
      title: "We Put Google's Most Popular Tools Inside WordPress",
      description: "We partnered with Google to make Site Kit, and put tools like Analytics and Search Console inside WordPress… and into the hands of 5 million site owners.",
      tags: ["Backend", "Branding", "Design", "Research", "Web"],
      category: "Backend, Branding, Design, Research, Web",
      image: "🔧"
    },
    {
      title: "We Sparked Sales Growth",
      description: "We helped Apple grow iPhone sales among EMEA carriers through gamified experiences.",
      tags: ["Backend", "Design", "iOS", "Research"],
      category: "Backend, Design, iOS, Research",
      image: "📱"
    },
    {
      title: "We Digitized Democracy",
      description: "We relaunched WhiteHouse.gov in 8 weeks, ensuring the security and stability demanded by the high-stakes transition.",
      tags: ["Backend", "Web"],
      category: "Backend, Web",
      image: "🏛️"
    },
    {
      title: "We Unlocked Revenue",
      description: "We enabled the New York Times to unlock an affiliate revenue stream on Wirecutter.",
      tags: ["Backend", "Branding", "Design", "Research", "Web"],
      category: "Backend, Branding, Design, Research, Web",
      image: "💰"
    },
    {
      title: "Enterprise E-Commerce Platform",
      description: "Built a scalable e-commerce solution handling millions of transactions with seamless user experience.",
      tags: ["Backend", "Web", "E-Commerce"],
      category: "Backend, Web, E-Commerce",
      image: "🛒"
    }
  ]

  return (
    <div className="work-page">
      <div className="work-page-hero">
        <div className="work-page-container">
          <h1 className="work-page-title">Our Work</h1>
          <p className="work-page-subtitle">Projects that drive impact and deliver results.</p>
        </div>
      </div>

      <div className="work-page-content">
        <div className="work-page-container">
          <div className="work-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="work-card">
                <div className="work-card-image">{study.image}</div>
                <div className="work-card-category">{study.category}</div>
                <h2 className="work-card-title">{study.title}</h2>
                <p className="work-card-description">{study.description}</p>
                <div className="work-card-tags">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="work-tag">{tag}</span>
                  ))}
                </div>
                <a href="#" className="work-card-link">Read Case Study →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work


