import React from 'react';
import '../styles/Bookmarks.css';

function BookmarksPage() {
  return (
    <div className="bookmarks">
      <nav className="navbar">BeanThere</nav>

      <h2>Saved Cafes</h2>
      <div className="filters">
        <button>All</button>
        <button>Near Me</button>
        <button>Top Rated</button>
      </div>

      <div className="saved-list">
        <div className="cafe-card">Bookmarked Cafe 1</div>
        <div className="cafe-card">Bookmarked Cafe 2</div>
      </div>

      <footer className="footer">© BeanThere 2025</footer>
    </div>
  );
}

export default BookmarksPage;