import React from 'react';
import '../styles/Bookmarks.css';

function BookmarksPage() {
  return (
    <div className="bookmarks">
      <nav className="navbar">☕ BeanThere</nav>

      <header className="header">
        <h2>📌 Saved Cafés</h2>
        <div className="filters">
          <button className="active">All</button>
          <button>Near Me</button>
          <button>Top Rated</button>
        </div>
      </header>

      <section className="saved-list">
        <div className="cafe-card">
          <img
            src="/assets/cafeImage1.jpg"
            alt="Cafe Mocha House"
            className="cafe-img"
          />
          <div className="cafe-info">
            <h3>Café Mocha House</h3>
            <p>⭐ 4.5 • Cozy Vibes • 1.2 km away</p>
          </div>
        </div>

        <div className="cafe-card">
          <img
            src="/assets/cafeImage2.jpg"
            alt="Brew & Beans"
            className="cafe-img"
          />
          <div className="cafe-info">
            <h3>Brew & Beans</h3>
            <p>⭐ 4.8 • Top Rated • 3.0 km away</p>
          </div>
        </div>
      </section>

      <footer className="footer">© BeanThere 2025 • Your Taste, Your Trail</footer>
    </div>
  );
}

export default BookmarksPage;