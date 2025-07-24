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
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // cozy cafe interior
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // coffee shop with people
    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80", // cafe counter
    "https://images.unsplash.com/photo-1515442261605-cd4ce40f1d89?auto=format&fit=crop&w=800&q=80", // barista pouring coffee
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=800&q=80", // latte art
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // coffee and croissant
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // coffee cup on table
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // cafe with plants
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80", // cafe seating
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // espresso shot
    "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=80", // coffee beans
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80", // cafe with window
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80", // coffee shop counter
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80", // espresso machine
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80", // coffee on table
    "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=800&q=80"  // coffee shop with people
  ];
  const fallbackImg = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="cafe-details">
      <nav className="navbar">☕ BeanThere</nav>

      <div className="cafe-banner">
        <h1 className="cafe-name">{cafe.name.toUpperCase()}</h1>
      </div>

      <div className="cafe-top-section">
        <div className="cafe-img-container">
          <img src={cafeImages[0]} alt={cafe.name} className="cafe-main-img" onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }} />
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
        <img src={item.image} alt={item.name} className="favorite-img" onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }} />
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
          src={cafe.favorites[2].image}
          alt={cafe.favorites[2].name}
          className="favorite-img"
          onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
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