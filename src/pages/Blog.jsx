import React from 'react'
import './BlogPage.css'

function Blog() {
  const blogPosts = [
    {
      category: "Awards & Recognition",
      title: "CalMatters' Digital Democracy Honored with Emmy Award",
      date: "January 15, 2025",
      excerpt: "Our work on digital democracy platforms has been recognized with a prestigious Emmy Award.",
      link: "#"
    },
    {
      category: "Artificial Intelligence",
      title: "WordPress Launches AI Team With Google, Automattic, and DigitalAgency Leaders",
      date: "January 10, 2025",
      excerpt: "We're excited to announce our partnership in WordPress's new AI initiative.",
      link: "#"
    },
    {
      category: "Web Development",
      title: "Microsoft Research and Harvard School of Public Health Recognized in the 2025 Webby Awards",
      date: "January 5, 2025",
      excerpt: "Our collaborative projects have been honored in this year's Webby Awards.",
      link: "#"
    },
    {
      category: "Mobile Development",
      title: "The Future of Mobile Apps: Trends to Watch in 2025",
      date: "December 28, 2024",
      excerpt: "Exploring the latest trends and technologies shaping mobile app development.",
      link: "#"
    },
    {
      category: "Growth Strategy",
      title: "Data-Driven Growth: How Analytics Transform Businesses",
      date: "December 20, 2024",
      excerpt: "Understanding how proper analytics implementation can drive business growth.",
      link: "#"
    },
    {
      category: "Design",
      title: "Creating Memorable User Experiences in 2025",
      date: "December 15, 2024",
      excerpt: "Best practices for designing user experiences that resonate and convert.",
      link: "#"
    }
  ]

  return (
    <div className="blog-page">
      <div className="blog-page-hero">
        <div className="blog-page-container">
          <h1 className="blog-page-title">Blog</h1>
          <p className="blog-page-subtitle">Insights and impact. Our voice.</p>
        </div>
      </div>

      <div className="blog-page-content">
        <div className="blog-page-container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-post-card">
                <div className="blog-post-category">{post.category}</div>
                <h2 className="blog-post-title">{post.title}</h2>
                <div className="blog-post-date">{post.date}</div>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-post-link">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog


