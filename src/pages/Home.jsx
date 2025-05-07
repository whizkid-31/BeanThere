import React from 'react';
import '../styles/Home.css';

function HomePage() {
  return (
    <div className="home">
      <nav className="navbar">BeanThere</nav>

      <header className="hero">
        <h1>Find Your Perfect Brew</h1>
        <p>Discover cafes near you</p>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Enter your location" />
      </div>

      <section className="featured">
        <h2>Featured Cafes</h2>
        <div className="carousel">Yet to be uploaded</div>
      </section>

      <footer className="footer">© BeanThere 2025</footer>
    </div>
  );
}

export default HomePage;