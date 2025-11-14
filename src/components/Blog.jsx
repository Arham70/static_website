import React from 'react'
import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      category: "Awards & Recognition",
      title: "CalMatters' Digital Democracy Honored with Emmy Award",
      link: "#"
    },
    {
      category: "Artificial Intelligence",
      title: "WordPress Launches AI Team With Google, Automattic, and DigitalAgency Leaders",
      link: "#"
    },
    {
      category: "Web Development",
      title: "Microsoft Research and Harvard School of Public Health Recognized in the 2025 Webby Awards",
      link: "#"
    }
  ]

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog</h2>
          <p className="blog-subtitle">Insights and impact. Our voice.</p>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <span className="blog-post-category">{post.category}</span>
              <h3 className="blog-post-title">{post.title}</h3>
              <a href={post.link} className="blog-post-link">Read More →</a>
            </div>
          ))}
        </div>

        <div className="blog-footer">
          <a href="#blog" className="read-stories-link">Read our Stories</a>
        </div>
      </div>
    </section>
  )
}

export default Blog


