import React from 'react';
import '../styles/Home.css';

function HomePage() {
  return (
    <div className="home">
      <nav className="navbar">
        <span className="logo">☕  BeanThere</span>
      </nav>

      <header className="hero">
        <h1>Find Your Perfect Brew</h1>
        <p>Discover cozy cafes near you</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter your location" />
          <button className="search-btn">Search</button>
        </div>
      </header>

      <section className="featured">
        <h2>✨ Featured Cafes</h2>
        <div className="carousel">Carousel Coming Soon!</div>
      </section>

      <footer className="footer">© BeanThere 2025 • Brewed with love ☕</footer>
    </div>
  );
}

export default HomePage;