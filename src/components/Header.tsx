'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setOpenSection(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (section: string) => {
    if (typeof window !== 'undefined' && window.innerWidth > 992) return;
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-nav-open', isMobileMenuOpen);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-nav-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <header style={{ width: '100%' }}>
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      />
      {/* Top Header Information Bar */}
      <div className="header-top">
        <div className="container header-top-wrap">
          <div className="header-contact-list">
            <span className="header-contact-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <FaPhoneAlt size={12} /> 9049344991 / 8976178976
            </span>
            <span className="header-contact-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <FaPhoneAlt size={12} /> 7770048032 (Dombivli)
            </span>
          </div>
          <div className="header-top-right">
            <div className="header-socials" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a href="https://www.facebook.com/caddeskindia/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}><FaFacebookF size={14} /></a>
              <a href="https://www.instagram.com/caddeskindia" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}><FaInstagram size={14} /></a>
              <a href="https://www.linkedin.com/in/caddeskindia" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}><FaLinkedinIn size={14} /></a>
              <a href="https://www.youtube.com/@mtechcomputers" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}><FaYoutube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar-section" id="navbar">
        <div className="container navbar-wrap">
          <div className="logo">
            <Link href="/" onClick={closeMobileMenu}>
              <img 
                src="/mtech-logo.png" 
                alt="M-Tech Computers" 
              />
            </Link>
          </div>

          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={toggleMobileMenu} 
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            id="mobile-nav-toggle"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li className="nav-drawer-head">
              <span>Menu</span>
              <button
                type="button"
                className="nav-drawer-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
            </li>
            
            <li className="nav-item">
              <button
                type="button"
                className="nav-link nav-accordion-toggle"
                onClick={() => toggleSection('courses')}
                aria-expanded={openSection === 'courses'}
              >
                Courses
                <span className={`nav-chevron ${openSection === 'courses' ? 'is-open' : ''}`}>▾</span>
              </button>
              <ul className={`nav-dropdown ${openSection === 'courses' ? 'open' : ''}`}>
                 <li>
                  <Link href="/courses?category=IT Course" className="dropdown-link" onClick={closeMobileMenu}>
                    IT Course
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Civil &amp; Arch" className="dropdown-link" onClick={closeMobileMenu}>
                    Civil &amp; Arch
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Mechanical" className="dropdown-link" onClick={closeMobileMenu}>
                    Mechanical
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Piping Course" className="dropdown-link" onClick={closeMobileMenu}>
                    Piping Course
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Electrical" className="dropdown-link" onClick={closeMobileMenu}>
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Project Planning &amp; Management" className="dropdown-link" onClick={closeMobileMenu}>
                    Project Planning &amp; Management
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Accounting &amp; Computer" className="dropdown-link" onClick={closeMobileMenu}>
                    Accounting &amp; Computer
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Jewellery Design" className="dropdown-link" onClick={closeMobileMenu}>
                    Jewellery Design
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Digital Marketing" className="dropdown-link" onClick={closeMobileMenu}>
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link nav-accordion-toggle"
                onClick={() => toggleSection('about')}
                aria-expanded={openSection === 'about'}
              >
                About Us
                <span className={`nav-chevron ${openSection === 'about' ? 'is-open' : ''}`}>▾</span>
              </button>
              <ul className={`nav-dropdown ${openSection === 'about' ? 'open' : ''}`}>
                <li>
                  <Link href="/our-training-methodology" className="dropdown-link" onClick={closeMobileMenu}>Our Training Methodology</Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="dropdown-link" onClick={closeMobileMenu}>Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="dropdown-link" onClick={closeMobileMenu}>Refund Policy</Link>
                </li>
                <li>
                  <Link href="/about-us" className="dropdown-link" onClick={closeMobileMenu}>Our Journey</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="dropdown-link" onClick={closeMobileMenu}>Privacy Policy</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/locate" className="nav-link" onClick={closeMobileMenu}>Locate Center</Link>
            </li>

            <li className="nav-item nav-item-enquiry">
              <button 
                type="button"
                onClick={() => { closeMobileMenu(); onOpenEnquiry(); }} 
                className="btn btn-primary nav-enquiry-btn"
                id="header-enquiry-btn"
              >
                Enquiry Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
