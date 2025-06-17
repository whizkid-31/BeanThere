import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/CafeDetails.css';

function CafeDetailsPage() {
  const location = useLocation();
  const cafe = location.state?.cafe;

  if (!cafe) {
    return (
      <div className="cafe-details">
        <nav className="navbar">☕ BeanThere</nav>
        <div className="error-msg">
          <h2>Café data not found.</h2>
          <p>Please explore some cafés first!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cafe-details">
      <nav className="navbar">☕ BeanThere</nav>

      <div className="banner">
        <h1>📍 {cafe.name}</h1>
        <p>{cafe.description || "Beautiful view, rich aroma, and cozy vibes"}</p>
      </div>

      <div className="info">
        <p><strong>Rating:</strong> {cafe.rating} ⭐</p>
        <p><strong>Category:</strong> {cafe.category}</p>
        <p><strong>Address:</strong> {cafe.address}</p>
        <p><strong>Area:</strong> {cafe.location}</p>
      </div>

      <div className="cafe-img-wrapper">
        <img src={cafe.image} alt={cafe.name} className="cafe-details-img" />
      </div>

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