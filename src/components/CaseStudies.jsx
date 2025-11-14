import React from 'react'
import './CaseStudies.css'

function CaseStudies() {
  const caseStudies = [
    {
      title: "We Made a Community Mural with AI",
      description: "We used ChatGPT and DALL-E to turn human sentiment into a digital work of art with Microsoft Research.",
      tags: ["AI", "Backend", "Design", "Research", "Web"],
      link: "#"
    },
    {
      title: "We Put Google's Most Popular Tools Inside WordPress",
      description: "We partnered with Google to make Site Kit, and put tools like Analytics and Search Console inside WordPress… and into the hands of 5 million site owners.",
      tags: ["Backend", "Branding", "Design", "Research", "Web"],
      link: "#"
    },
    {
      title: "We Sparked Sales Growth",
      description: "We helped Apple grow iPhone sales among EMEA carriers through gamified experiences.",
      tags: ["Backend", "Design", "iOS", "Research"],
      link: "#"
    },
    {
      title: "We Digitized Democracy",
      description: "We relaunched WhiteHouse.gov in 8 weeks, ensuring the security and stability demanded by the high-stakes transition.",
      tags: ["Backend", "Web"],
      link: "#"
    },
    {
      title: "We Unlocked Revenue",
      description: "We enabled the New York Times to unlock an affiliate revenue stream on Wirecutter.",
      tags: ["Backend", "Branding", "Design", "Research", "Web"],
      link: "#"
    }
  ]

  return (
    <section className="case-studies" id="work">
      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <h2 className="case-study-title">{study.title}</h2>
            <p className="case-study-description">{study.description}</p>
            <div className="case-study-tags">
              {study.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="case-study-tag">{tag}</span>
              ))}
            </div>
            <a href={study.link} className="case-study-link">Read Case Study →</a>
          </div>
        ))}
        <div className="case-studies-footer">
          <a href="#work" className="explore-link">Explore Our Work</a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies


