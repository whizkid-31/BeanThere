import React from 'react';
import '../styles/CafeDetails.css';

function CafeDetailsPage() {
  return (
    <div className="cafe-details">
      <nav className="navbar">☕ BeanThere</nav>

      <div className="banner">
        <h1>📍 Featured Cafe</h1>
        <p>Beautiful view, rich aroma, and cozy vibes</p>
      </div>

      <section className="info">
        <h2>Cafe Name</h2>
        <p><strong>Rating:</strong> 4/5 ⭐⭐⭐⭐</p>
        <p><strong>Category:</strong> Cafe</p>
      </section>

      <section className="menu">
        <h2>Menu</h2>
        <ul>
          <li><span>Espresso</span><span>₹99</span></li>
          <li><span>Latte</span><span>₹139</span></li>
          <li><span>Cappuccino</span><span>₹109</span></li>
          <li><span>Flavored Frappuccino</span><span>₹169</span></li>
          <li><span>Veg Sandwich</span><span>₹79</span></li>
          <li><span>Munchies/Treats</span><span>MRP</span></li>
        </ul>
      </section>

      <section className="map">
        <h2>Map & Directions</h2>
        <div className="map-placeholder">Location Map (Yet to be uploaded)</div>
      </section>

      <footer className="footer">© BeanThere 2025 • Sip. Savor. Smile.</footer>
    </div>
  );
}

export default CafeDetailsPage;