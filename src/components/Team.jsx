import React from 'react'
import './Team.css'

function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in digital transformation",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech innovator specializing in AI and scalable architectures",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer creating memorable brand experiences",
      image: "👩‍🎨"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack expert building robust and performant applications",
      image: "👨‍🔧"
    },
    {
      name: "Jessica Williams",
      role: "Growth Strategist",
      bio: "Data-driven strategist helping businesses scale effectively",
      image: "👩‍💼"
    },
    {
      name: "James Anderson",
      role: "Mobile Lead",
      bio: "iOS and Android specialist creating award-winning apps",
      image: "👨‍💻"
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      bio: "Ensuring seamless delivery and client satisfaction",
      image: "👩‍💼"
    },
    {
      name: "Robert Martinez",
      role: "Senior Developer",
      bio: "Backend architect building scalable enterprise solutions",
      image: "👨‍💻"
    }
  ]

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">The talented individuals behind our success</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-image">{member.image}</div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-bio">{member.bio}</p>
              <div className="team-member-social">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team


