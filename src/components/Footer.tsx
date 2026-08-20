import React from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/config/site';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer-grid">
        {/* Address Widget */}
        <div className="footer-widget-about">
          <h4 className="footer-widget-title">Address</h4>

          <p style={{ fontWeight: 700, color: 'white', marginBottom: '4px', fontSize: '14px' }}>M-Tech Computers — Kalyan HO</p>
          <p style={{ fontWeight: 600, color: '#f6b500', marginBottom: '4px', fontSize: '13px' }}>Kalyan HO: 9049344991 / 8976178976</p>
          <p style={{ marginBottom: '20px', fontSize: '13px', lineHeight: '1.7' }}>
            Chandulal J Joshi Plaza,<br />
            Opp. Kalyan Platform No. 1,<br />
            Near Jumboking, Kalyan W.
          </p>

          <p style={{ fontWeight: 700, color: 'white', marginBottom: '4px', fontSize: '14px' }}>M-Tech Computers Dombivli</p>
          <p style={{ fontWeight: 600, color: '#f6b500', marginBottom: '4px', fontSize: '13px' }}>📞 7770048032</p>
          <p style={{ fontSize: '13px', lineHeight: '1.7' }}>
            Office No. 20, 3rd Floor, Vij Prabha Complex,<br />
            Patkar Rd, Near Kamath Medical,<br />
            Station Road, Ramnagar, Dombivli East.
          </p>
        </div>

        {/* Course Categories Widget */}
        <div>
          <h4 className="footer-widget-title">Course Categories</h4>
          <ul className="footer-links">
            <li>
              <Link href="/courses?category=Information Technology" className="footer-link">Information Technology</Link>
            </li>
            <li>
              <Link href="/courses?category=Civil/Architecture" className="footer-link">Civil &amp; Architecture</Link>
            </li>
            <li>
              <Link href="/courses?category=Mechanical/Automobile" className="footer-link">Mechanical</Link>
            </li>
            <li>
              <Link href="/courses?category=Electrical/Electronics" className="footer-link">Electrical</Link>
            </li>
            <li>
              <Link href="/courses?category=Project Planning" className="footer-link">Project Planning &amp; Management</Link>
            </li>
            <li>
              <Link href="/courses?category=Jewellery Design" className="footer-link">Jewellery Design</Link>
            </li>
            <li>
              <Link href="/courses?category=Accounting" className="footer-link">Accounting &amp; Computer</Link>
            </li>

            <li>
              <Link href="/courses?category=Piping" className="footer-link">Piping</Link>
            </li>
            <li>
              <Link href="/courses?category=Interior Design" className="footer-link">Interior Designer</Link>
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
              <Link href="/terms-conditions" className="footer-link">Terms &amp; Conditions</Link>
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
                <strong style={{ display: 'block', color: '#f6b500', fontSize: 12, marginBottom: 2 }}>Kalyan HO</strong>
                <a href="tel:9049344991" style={{ display: 'block', color: 'white' }}>9049344991</a>
                <a href="tel:8976178976" style={{ display: 'block', color: 'white' }}>8976178976</a>
                <a href="tel:7770048032" style={{ display: 'block', color: '#f6b500', fontSize: '12px' }}>7770048032 (Dombivli)</a>
              </div>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <div className="footer-contact-text">
                <strong>Email Address</strong>
                <a href="mailto:info@mtechcomputers.in" style={{ color: 'white' }}>info@mtechcomputers.in</a>
              </div>
            </li>
          </ul>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'white', marginBottom: '8px', textTransform: 'uppercase' }}>
              Follow Us
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Facebook</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Instagram</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>LinkedIn</a>
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
