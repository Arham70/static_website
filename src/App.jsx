import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
import Work from './pages/Work'
import Company from './pages/Company'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/work" element={<Work />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App

