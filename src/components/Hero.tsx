'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';

// 5 Hero Slides – one per major course domain
const heroSlides = [
  {
    id: 1,
    label: 'Mechanical CAD',
    image: '/images/caddeskindia_com_wp-content_uploads_2026_04_Mechanical.jpg',
    heading: 'Mechanical CAD & CAM',
    sub: 'AutoCAD Mechanical · SolidWorks · CATIA · CNC Programming',
    link: '/courses?category=Mechanical/Automobile',
    color: '#f97316',
  },
  {
    id: 2,
    label: 'Civil / Architecture CAD',
    image: '/images/caddeskindia_com_wp-content_uploads_2026_04_Civil-arch.jpg',
    heading: 'Civil & Architecture CAD',
    sub: 'AutoCAD Civil · Revit · STAAD Pro · SketchUp · BIM',
    link: '/courses?category=Civil/Architecture',
    color: '#0ea5e9',
  },
  {
    id: 3,
    label: 'Electrical CAD',
    image: '/images/caddeskindia_com_wp-content_uploads_2026_04_ELECTRICAL.jpg',
    heading: 'Electrical CAD',
    sub: 'AutoCAD Electrical · EPLAN · PLC · SCADA · MATLAB',
    link: '/courses?category=Electrical/Electronics',
    color: '#eab308',
  },
  {
    id: 4,
    label: 'Project Planning & Management',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
    heading: 'Project Planning & Management',
    sub: 'Primavera P6 · MS Project · Project Scheduling · Resource Management',
    link: '/courses?category=Project Planning',
    color: '#10b981',
  },
  {
    id: 5,
    label: 'IT Programming',
    image: '/images/caddeskindia_com_wp-content_uploads_2026_04_CS.jpg',
    heading: 'IT & Programming Courses',
    sub: 'Web Dev · Python · Java · React · Node.js · Data Analytic Course · Data Science · AI/ML',
    link: '/courses?category=Information Technology',
    color: '#8b5cf6',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<SVGSVGElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const goToSlide = (idx: number) => {
    if (isTransitioning || idx === activeSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    const next = (activeSlide + 1) % heroSlides.length;
    goToSlide(next);
  };

  const goToPrev = () => {
    const prev = (activeSlide - 1 + heroSlides.length) % heroSlides.length;
    goToSlide(prev);
  };

  useEffect(() => {
    if (gearRef.current) {
      gsap.to(gearRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'linear'
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

  const slide = heroSlides[activeSlide];

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
              India's No. 1 CAD, CAM &amp; IT Training Network
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
                <h4>32+</h4>
                <p>Learning Centers</p>
              </div>
              <div className="hero-stat-box">
                <h4>5000+</h4>
                <p>Students Trained</p>
              </div>
              <div className="hero-stat-box">
                <h4>100%</h4>
                <p>Placement Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Course Image Slider */}
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

              {/* Course Image Slider Card */}
              <motion.div 
                className="main-collage-card hero-slider-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
              >
                <div className="card-glass-glow" />

                {/* Slide Image */}
                <div
                  className="hero-slide-img-wrap"
                  style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.3s ease' }}
                >
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="collage-image hero-slide-img"
                  />
                  {/* Gradient Overlay with text */}
                  <div className="hero-slide-overlay" style={{ background: `linear-gradient(to top, ${slide.color}ee 0%, transparent 60%)` }}>
                    <Link href={slide.link} className="hero-slide-content">
                      <span className="hero-slide-label">{slide.label}</span>
                      <p className="hero-slide-sub">{slide.sub}</p>
                    </Link>
                  </div>
                </div>

                {/* Prev / Next arrows */}
                <button
                  className="hero-slider-arrow hero-slider-prev"
                  onClick={goToPrev}
                  aria-label="Previous slide"
                >
                  ❮
                </button>
                <button
                  className="hero-slider-arrow hero-slider-next"
                  onClick={goToNext}
                  aria-label="Next slide"
                >
                  ❯
                </button>

                {/* Dot indicators */}
                <div className="hero-slider-dots">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      className={`hero-slider-dot ${i === activeSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{ backgroundColor: i === activeSlide ? slide.color : 'rgba(255,255,255,0.4)' }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Placement Badge */}
              <div ref={card2Ref} className="floating-badge-card badge-right hero-placement-badge-wrap">
                <img
                  src="/placement-badge.png"
                  alt="100% Placement Assistance"
                  className="hero-placement-badge-img"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
