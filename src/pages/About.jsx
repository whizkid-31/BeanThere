import React from 'react';
import '../styles/About.css';

function AboutPage() {
  return (
    <div className="about">
        <nav className="navbar">BeanThere</nav>

        <section className="mission">
            <h2>Our Mission</h2>
            <p>To connect coffee-lovers with the best cafes in their proximity.</p>
        </section>

        <section className="team">
            <h2>Our Team</h2>
            <div className="team-member">Aaryan Gera — Founder</div>
        </section>

    <footer className="footer">© BeanThere 2025</footer>
    </div>
  );
}

export default AboutPage;