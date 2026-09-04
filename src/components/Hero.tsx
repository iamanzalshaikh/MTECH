'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { STUDENTS_TRAINED } from '@/config/site';

type HeroSlide = {
  id: number;
  label: string;
  heading: string;
  sub: string;
  link: string;
  color: string;
  image: string;
};

/** One IT course image per slide — no collage */
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    label: 'Full Stack',
    image: '/images/it/fullstack.png',
    heading: 'Full Stack Web Development',
    sub: 'Frontend · Backend · Database · Deployment',
    link: '/courses?category=Information Technology',
    color: '#8b5cf6',
  },
  {
    id: 2,
    label: 'React JS',
    image: '/images/it/react-js.png',
    heading: 'React JS — Modern Web Apps',
    sub: 'Hooks · Routing · State · API Integrations',
    link: '/courses?category=Information Technology',
    color: '#06b6d4',
  },
  {
    id: 3,
    label: 'JavaScript',
    image: '/images/it/js-programming.png',
    heading: 'JavaScript Programming',
    sub: 'Basics to Advanced · DOM · Async · Modern JS',
    link: '/courses?category=Information Technology',
    color: '#eab308',
  },
  {
    id: 4,
    label: 'Node.js',
    image: '/images/it/nodejs.png',
    heading: 'Node.js Backend Development',
    sub: 'Express · APIs · MongoDB · Scalable Servers',
    link: '/courses?category=Information Technology',
    color: '#22c55e',
  },
  {
    id: 5,
    label: 'Data Analytics',
    image: '/images/it/data-analytics.png',
    heading: 'Data Analytics',
    sub: 'Excel · SQL · Power BI · Business Insights',
    link: '/courses?category=Information Technology',
    color: '#3b82f6',
  },
  {
    id: 6,
    label: 'Artificial Intelligence',
    image: '/images/it/artificial-intelligence.png',
    heading: 'Artificial Intelligence',
    sub: 'Machine Learning · Neural Networks · Real-World AI',
    link: '/courses?category=Information Technology',
    color: '#a855f7',
  },
  {
    id: 7,
    label: 'MERN Stack',
    image: '/images/it/mern-stack.png',
    heading: 'MERN Stack Development',
    sub: 'MongoDB · Express · React · Node.js',
    link: '/courses?category=Information Technology',
    color: '#10b981',
  },
  {
    id: 8,
    label: 'Cloud Computing',
    image: '/images/it/cloud-computing.png',
    heading: 'Cloud Computing',
    sub: 'AWS · Azure · GCP · Cloud Security',
    link: '/courses?category=Information Technology',
    color: '#0ea5e9',
  },
  {
    id: 9,
    label: 'AWS Cloud',
    image: '/images/it/aws-cloud.png',
    heading: 'AWS Cloud Computing',
    sub: 'EC2 · S3 · VPC · IAM · RDS',
    link: '/courses?category=Information Technology',
    color: '#f97316',
  },
  {
    id: 10,
    label: 'Generative AI',
    image: '/images/it/gen-ai-agentic.png',
    heading: 'Generative AI & Agentic AI',
    sub: 'LLMs · Prompt Engineering · RAG · AI Agents',
    link: '/courses?category=Information Technology',
    color: '#ec4899',
  },
  {
    id: 11,
    label: 'Angular',
    image: '/images/it/angular.png',
    heading: 'Angular Development',
    sub: 'Components · Routing · Services · Deployment',
    link: '/courses?category=Information Technology',
    color: '#ef4444',
  },
  {
    id: 12,
    label: 'Golang',
    image: '/images/it/golang.png',
    heading: 'Golang Programming',
    sub: 'Concurrency · Backend Systems · High Performance',
    link: '/courses?category=Information Technology',
    color: '#14b8a6',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<SVGSVGElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const goToSlide = (idx: number) => {
    if (isTransitioning || idx === activeSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(idx);
      setIsTransitioning(false);
    }, 280);
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
      <div className="blueprint-grid" />
      <div className="glow-orb orange-glow" />
      <div className="glow-orb blue-glow" />

      <div className="container">
        <div className="new-hero-grid">
          <motion.div
            className="hero-left-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-tag-badge" variants={itemVariants}>
              <span className="tag-pulse" />
              IT Training &amp; Placement
            </motion.div>

            <motion.h1 className="hero-main-title" variants={itemVariants}>
              Shape Your Skills <br />
              <span>To Build The Future</span>
            </motion.h1>

            <motion.div className="hero-cta-group" variants={itemVariants}>
              <Link href="/courses?category=Information Technology" className="btn btn-primary hero-btn-main" id="hero-explore-btn">
                Explore IT Courses <span>➔</span>
              </Link>

              <button
                onClick={openEnquiry}
                className="btn btn-outline-hero"
                id="hero-enquiry-trigger-btn"
              >
                Free Career Counselling
              </button>
            </motion.div>

            <motion.div className="hero-stats-row" variants={itemVariants}>
              <div className="hero-stat-box">
                <h4>2+</h4>
                <p>Learning Centers</p>
              </div>
              <div className="hero-stat-box">
                <h4>{STUDENTS_TRAINED}</h4>
                <p>Students Trained</p>
              </div>
              <div className="hero-stat-box">
                <h4>100%</h4>
                <p>Placement Support</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="hero-right-visuals">
            <div className="visuals-wrapper">
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

              <motion.div
                className="main-collage-card hero-slider-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
              >
                <div className="card-glass-glow" />

                <div
                  className="hero-slide-img-wrap"
                  style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.28s ease' }}
                >
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="hero-slide-img"
                  />
                  <div
                    className="hero-slide-overlay"
                    style={{ background: `linear-gradient(to top, ${slide.color}dd 0%, transparent 55%)` }}
                  >
                    <Link href={slide.link} className="hero-slide-content">
                      <span className="hero-slide-label">{slide.heading}</span>
                      <p className="hero-slide-sub">{slide.sub}</p>
                    </Link>
                  </div>
                </div>

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
