import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Explore.css';

function ExplorePage() {
  const [region, setRegion] = useState('');
  const [area, setArea] = useState('');
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const navigate = useNavigate();

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setArea('');
    setCafes([]);
    setStatusMsg('');
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
    setCafes([]);
    setStatusMsg('');
  };

  const handleSearch = async () => {
    if (!area) return;

    setLoading(true);
    setStatusMsg('');

    try {
      const response = await fetch('https://681f384b72e59f922ef599b9.mockapi.io/beanthere/Cafes');
      const data = await response.json();

      const filteredCafes = data.filter((cafe) =>
        cafe.location?.toLowerCase().includes(area.toLowerCase())
      );

      if (filteredCafes.length === 0) {
        setStatusMsg('No cafés found in this area.');
      }

      setCafes(filteredCafes);
    } catch (error) {
      console.error('Error fetching café data:', error);
      setStatusMsg('Failed to fetch café data. Try again.');
    }

    setLoading(false);
  };

  const areaOptions = {
    delhi: ['North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi'],
    ncr: ['Faridabad', 'Ghaziabad', 'Noida', 'Gurgaon', 'Sonipat'],
  };

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
    <div className="explore">
      <nav className="navbar">☕ BeanThere</nav>

      <div className="explore-content">
        <div className="filters">
          <h3 style={{ textAlign: 'center' }}>Find Cafés</h3>

          <label htmlFor="region">Region</label>
          <select id="region" value={region} onChange={handleRegionChange}>
            <option value="">-- Select Region --</option>
            <option value="delhi">Delhi</option>
            <option value="ncr">NCR</option>
          </select>

          {region && (
            <>
              <label htmlFor="area">Area</label>
              <select id="area" value={area} onChange={handleAreaChange}>
                <option value="">-- Select Area --</option>
                {areaOptions[region].map((areaName) => (
                  <option key={areaName} value={areaName}>
                    {areaName}
                  </option>
                ))}
              </select>
            </>
          )}

          <button className="search-btn" onClick={handleSearch}>
            Get Cafés
          </button>
        </div>

        <div className="cafes">
          <h2>Explore Cafés</h2>

          {loading && <p className="status-msg">Loading...</p>}
          {statusMsg && <p className="status-msg error">{statusMsg}</p>}

          <div className="cafe-grid">
            {cafes.map((cafe, idx) => (
              <div
                key={cafe.id}
                className="cafe-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/cafe/${cafe.id}`, { state: { cafe } })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigate(`/cafe/${cafe.id}`, { state: { cafe } });
                  }
                }}
              >
                <img
                  src={cafeImages[idx % cafeImages.length]}
                  alt={cafe.name}
                  className="cafe-img"
                  onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                />
                <div className="cafe-info">
                  <h3 className="cafe-name">{cafe.name}</h3>
                  <p className="cafe-location">
                    <strong>📍</strong> {cafe.location}
                  </p>
                  <p className="cafe-rating">
                    <strong>⭐</strong> {cafe.rating} / 5
                  </p>
                  <p className="cafe-category">
                    <strong>☕</strong> {cafe.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">© BeanThere 2025 • Sip. Savor. Smile.</footer>
    </div>
  );
}

export default ExplorePage;