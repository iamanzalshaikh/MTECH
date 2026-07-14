'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { use } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<SVGSVGElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP floating animations for side cards and vector gear rotation
    if (gearRef.current) {
      gsap.to(gearRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'linear'
      });
    }

    if (card1Ref.current) {
      gsap.to(card1Ref.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }

    if (card2Ref.current) {
      gsap.to(card2Ref.current, {
        y: 15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5
      });
    }
  }, []);

  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-enquiry'));
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="new-hero-section" ref={containerRef} id="new-hero">
      {/* Blueprint Grid Overlay */}
      <div className="blueprint-grid" />
      
      {/* Glow Effects */}
      <div className="glow-orb orange-glow" />
      <div className="glow-orb blue-glow" />

      <div className="container">
        <div className="new-hero-grid">
          {/* Left Column: Text & Content */}
          <motion.div 
            className="hero-left-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag Badge */}
            <motion.div className="hero-tag-badge" variants={itemVariants}>
              <span className="tag-pulse" />
              India's No. 1 IT Training Network
            </motion.div>

            {/* Main Animated Title */}
            <motion.h1 className="hero-main-title" variants={itemVariants}>
              Shape Your Skills <br />
              <span>To Build The Future</span>
            </motion.h1>


            {/* CTA Buttons */}
            <motion.div className="hero-cta-group" variants={itemVariants}>
              <Link href="/courses" className="btn btn-primary hero-btn-main" id="hero-explore-btn">
                Explore Courses <span>➔</span>
              </Link>
              
              <button 
                onClick={openEnquiry} 
                className="btn btn-outline-hero"
                id="hero-enquiry-trigger-btn"
              >
                Free Career Counselling
              </button>
            </motion.div>

            {/* Stats Summary row */}
            <motion.div className="hero-stats-row" variants={itemVariants}>
              <div className="hero-stat-box">
                <h4>3+</h4>
                <p>Learning Centers</p>
              </div>
              <div className="hero-stat-box">
                <h4>3L+</h4>
                <p>Trained Students</p>
              </div>
              <div className="hero-stat-box">
                <h4>100%</h4>
                <p>Placement Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Interactive Visuals */}
          <div className="hero-right-visuals">
            <div className="visuals-wrapper">
              
              {/* Rotating Blueprint Gear */}
              <svg 
                ref={gearRef}
                className="floating-gear-svg" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="30" stroke="rgba(0, 80, 157, 0.08)" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="20" stroke="rgba(249, 115, 22, 0.1)" strokeWidth="1" />
                <path d="M50 10V18M50 82V90M10 50H18M82 50H90M21.7 21.7L27.4 27.4M72.6 72.6L78.3 78.3M21.7 78.3L27.4 72.6M72.6 21.7L78.3 27.4" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="2" strokeLinecap="round" />
                <path d="M46 5h8v6h-8zM46 89h8v6h-8zM5 46h6v8H5zM89 46h6v8h-8z" fill="rgba(0, 80, 157, 0.1)" />
                <circle cx="50" cy="50" r="6" fill="rgba(249, 115, 22, 0.1)" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1.5" />
              </svg>

              {/* Main Student Collage Wrapper with Glow */}
              <motion.div 
                className="main-collage-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
              >
                <div className="card-glass-glow" />
                <img 
                  src="https://caddeskindia.com/wp-content/uploads/2021/07/web-image-1.png" 
                  alt="M-Tech Computers Success Students" 
                  className="collage-image"
                />
              </motion.div>

              {/* Floating Badge 1 (Autodesk Certified) */}
              <div ref={card1Ref} className="floating-badge-card badge-left">
                <span className="badge-icon">🎖</span>
                <div>
                  <h5>Autodesk Partner</h5>
                  <p>Official Curriculum</p>
                </div>
              </div>

              {/* Floating Badge 2 (Placement Record) */}
              <div ref={card2Ref} className="floating-badge-card badge-right">
                <span className="badge-icon">💼</span>
                <div>
                  <h5>100% Placements</h5>
                  <p>Via Career Desk Portal</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
