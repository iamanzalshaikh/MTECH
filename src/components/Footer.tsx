import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer-grid">
        {/* Address Widget */}
        <div className="footer-widget-about">
          <h4 className="footer-widget-title">Address</h4>
          <p style={{ fontWeight: 600, color: 'white', marginBottom: '8px' }}>Head Office (Lalkothi):</p>
          <p style={{ marginBottom: '20px', fontSize: '13px', lineHeight: '1.6' }}>
            1st Floor Pink Tower, Lalkothi District Shopping Centre, Opp. Nehru Garden, Behind Sahara Chamber, Jaipur-302015, (Rajasthan) India
          </p>
          <p style={{ fontWeight: 600, color: 'white', marginBottom: '8px' }}>Sitabari Branch:</p>
          <p style={{ fontSize: '13px', lineHeight: '1.6' }}>
            1st Floor, Shree Shyam Kripa Tower, Opposite Jamuna Garden, Kalyan Nagar, Tonk Rd, Sitabari, Jaipur, Rajasthan 302011
          </p>
        </div>

        {/* Course Categories Widget */}
        <div>
          <h4 className="footer-widget-title">Course Categories</h4>
          <ul className="footer-links">
            <li>
              <Link href="/courses?category=Civil/Architecture" className="footer-link">Civil & Architecture</Link>
            </li>
            <li>
              <Link href="/courses?category=Electrical/Electronics" className="footer-link">Electrical & Electronics</Link>
            </li>
            <li>
              <Link href="/courses?category=Mechanical/Automobile" className="footer-link">Mechanical & Automobile</Link>
            </li>
            <li>
              <Link href="/courses?category=CS/IT" className="footer-link">CS & IT Designing</Link>
            </li>
            <li>
              <Link href="/courses?category=Internship" className="footer-link">Internships Programs</Link>
            </li>
            <li>
              <Link href="/locate" className="footer-link">College & Corporate Training</Link>
            </li>
          </ul>
        </div>

        {/* Other Links Widget */}
        <div>
          <h4 className="footer-widget-title">Other Link</h4>
          <ul className="footer-links">
            <li>
              <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="footer-link">Refund Policy</Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="footer-link">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/disclaimer" className="footer-link">Disclaimer</Link>
            </li>
            <li>
              <Link href="/locate" className="footer-link">Locate Centre</Link>
            </li>
            <li>
              <Link href="/locate" className="footer-link">Seminar</Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </li>
            <li>
              <Link href="/student-corner#work" className="footer-link">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Connect Widget */}
        <div>
          <h4 className="footer-widget-title">Connect</h4>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <div className="footer-contact-text">
                <a href="tel:4567891012" style={{ display: 'block', color: 'white' }}>(456) 789 10 12</a>
              </div>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <div className="footer-contact-text">
                <strong>Email Address</strong>
                <a href="mailto:admin@jkfindia.com" style={{ color: 'white' }}>admin@jkfindia.com</a>
              </div>
            </li>
          </ul>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'white', marginBottom: '8px', textTransform: 'uppercase' }}>
              Follow Us
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.facebook.com/caddeskindia/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Facebook</a>
              <a href="https://www.instagram.com/caddeskindia" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Instagram</a>
              <a href="https://www.linkedin.com/in/caddeskindia" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <div className="container">
          <p>© {new Date().getFullYear()} M-Tech Computers | All Rights Reserved. Designed in Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
