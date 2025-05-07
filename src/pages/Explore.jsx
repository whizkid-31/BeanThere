import React from 'react';
import '../styles/Explore.css';

function ExplorePage() {
  return (
    <div className="explore">
      <nav className="navbar">☕ BeanThere</nav>

      <div className="explore-content">
        <aside className="filters">
          <h3>🔍 Filters</h3>

          <label>Location</label>
          <input type="text" placeholder="Enter location" />

          <label>Rating</label>
          <select>
            <option>All</option>
            <option>3+</option>
            <option>4+</option>
            <option>5</option>
            <option>Best Customer Reviews</option>
          </select>

          <label>Category</label>
          <select>
            <option>Brewery</option>
            <option>Cafe</option>
            <option>Restaurant</option>
            <option>Takeaway</option>
          </select>
        </aside>

        <main className="cafes">
          <h2>Explore Cafés Near You</h2>
          <div className="cafe-grid">
            <div className="cafe-card">☕  Cafe 1</div>
            <div className="cafe-card">☕  Cafe 2</div>
            <div className="cafe-card">☕  Cafe 3</div>
          </div>
        </main>
      </div>

      <footer className="footer">© BeanThere 2025 • Explore the Aroma!</footer>
    </div>
  );
}

export default ExplorePage;