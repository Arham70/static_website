import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-tags">
          <span className="tag">AI</span>
          <span className="tag">Mobile</span>
          <span className="tag">Web</span>
          <span className="tag">Growth</span>
        </div>
        <h1 className="hero-title">Digital Done Right</h1>
        <p className="hero-subtitle">
          Sharp strategy. Precision execution. Experiences that drive impact.
        </p>
        <div className="hero-play">
          <button className="play-button">
            <span>▶</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


