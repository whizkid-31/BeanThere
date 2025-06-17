import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <header className="hero-with-bg">
        <div className="hero-content">Welcome to BeanThere</div>
      </header>

      <div className="explore-button-wrapper">
        <button className="explore-btn" onClick={() => navigate('/explore')}>
          Explore Cafés
        </button>
      </div>

      <section className="services">
        <h2>🌟 Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Location-Based Discovery</h3>
            <p>Find cafés near you using precise location filters.</p>
          </div>
          <div className="service-card">
            <h3>Verified Reviews</h3>
            <p>Read real customer experiences before your visit.</p>
          </div>
          <div className="service-card">
            <h3>Bookmark Favorites</h3>
            <p>Save cafés you love and revisit them with ease.</p>
          </div>
          <div className="service-card">
            <h3>Ambience Tags</h3>
            <p>Filter by vibes—quiet, aesthetic, work-friendly, and more.</p>
          </div>
        </div>
      </section>

      <footer className="footer">© BeanThere 2025 • Brewed with love ☕</footer>
    </div>
  );
}

export default HomePage;