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

  const cafeImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="cafe-details">
      <nav className="navbar">☕ BeanThere</nav>

      <div className="cafe-banner">
        <h1 className="cafe-name">{cafe.name.toUpperCase()}</h1>
      </div>

      <div className="cafe-top-section">
        <div className="cafe-img-container">
          <img src={cafeImages[0]} alt={cafe.name} className="cafe-main-img" />
        </div>
        <div className="cafe-info-box">
          <p><strong>⭐ Rating:</strong> {cafe.rating} / 5</p>
          <p><strong>☕ Category:</strong> {cafe.category}</p>
          <p><strong>📍 Location:</strong> {cafe.location}</p>
        </div>
      </div>

      <section className="favorites-section">
  <h2 className="fav-heading">FAVORITE ITEMS</h2>
  <p className="fav-tagline">Explore our bestsellers!</p>

  <div className="favorites-row">
    {cafe.favorites.slice(0, 2).map((item, index) => (
      <div className="favorite-card" key={index}>
        <img src={cafeImages[index + 1]} alt={item.name} className="favorite-img" />
        <div className="favorite-info">
          <h3>{item.name}</h3>
          <p>₹{item.price} approx</p>
        </div>
      </div>
    ))}
  </div>

  {cafe.favorites[2] && (
    <div className="favorites-row single-center">
      <div className="favorite-card wider-card">
        <img
          src={cafeImages[3]}
          alt={cafe.favorites[2].name}
          className="favorite-img"
        />
        <div className="favorite-info">
          <h3>{cafe.favorites[2].name}</h3>
          <p>₹{cafe.favorites[2].price} approx</p>
        </div>
      </div>
    </div>
  )}
  </section>

      <footer className="footer">© BeanThere 2025 • Sip. Savor. Smile.</footer>
    </div>
  );
}

export default CafeDetailsPage;