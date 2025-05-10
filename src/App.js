import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import ExplorePage from "./pages/Explore";
import CafeDetailsPage from "./pages/CafeDetails";
import BookmarksPage from "./pages/Bookmarks";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "25px 0" }}>☕ Welcome to BeanThere</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/cafe-details" element={<CafeDetailsPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
