import React from 'react';
import '../styles/CafeDetails.css';

function CafeDetailsPage() {
  return (
    <div className="cafe-details">
      <nav className="navbar" style={{textAlign: "center", }}>BeanThere</nav>

      <div className="banner">Yet to be uploaded</div>

      <section className="info">
        <h1>Cafe-Name as mentioned</h1>
        <p>Rating: (4/5) ⭐⭐⭐⭐</p>
        <p>Category: Cafe</p>
      </section>

      <section className="menu">
        <h2>Menu</h2>
        <ul>
          <li>Espresso - ₹99</li>
          <li>Latte - ₹139</li>
          <li>Cappuccino - ₹109</li>
          <li>Flavored Frappuccino - ₹169</li>
          <li>Veg Sandwich - ₹79</li>
          <li>Munchies/Treats - on MRP</li>
        </ul>
      </section>

      <section className="map">
        <h2>Map & Directions</h2>
        <div className="map-placeholder">Yet to be uploaded</div>
      </section>

      <footer className="footer">© BeanThere 2025</footer>
    </div>
  );
}

export default CafeDetailsPage;