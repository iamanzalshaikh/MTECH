'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

function CountUpNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    // For larger numbers, step faster to finish within duration
    let step = Math.ceil(end / 60); 
    let incrementTime = 25; 
    
    let timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}
import CourseRecommender from '@/components/CourseRecommender';
import Hero from '@/components/Hero';

// Mock Testimonials
const testimonials = [
  {
    name: "Gulshan Sharma",
    text: "M-Tech Computers has been a game-changer for me in my pursuit of becoming a skilled IT professional. The trainers are highly knowledgeable and passionate about what they teach, making the learning experience both engaging and enjoyable..."
  },
  {
    name: "Khatri A R",
    text: "I enrolled in M-Tech Computers' training program, and I was impressed by the comprehensive curriculum they offered. The course material was well-structured, and the practical assignments helped me apply what I learned in real-world scenarios..."
  },
  {
    name: "Govind Sundesha",
    text: "What sets M-Tech Computers apart is their personalized approach to learning. The instructors took the time to understand my strengths and weaknesses and provided individualized guidance to help me overcome challenges. They genuinely cared about my progress and success..."
  },
  {
    name: "M S Narendran",
    text: "The facilities at M-Tech Computers are top-notch. The computer labs are equipped with the latest software and hardware, creating an ideal learning environment. Additionally, the staff members are friendly and always ready to assist students..."
  }
];

// Collaboration Logos
const brandLogos = [
  'https://caddeskindia.com/wp-content/uploads/2023/09/8.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/7.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/6.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/5.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/4.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/3.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/2.png',
  'https://caddeskindia.com/wp-content/uploads/2023/09/1.png',
  'https://caddeskindia.com/wp-content/uploads/2025/02/header_logo.webp'
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-enquiry'));
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* 1. New Animated Hero Section */}
      <Hero />

      {/* 2. Top Stats Bar (Features) */}
      <section className="edubin-features-section-02">
        <div className="container">
          <div className="features-wrap">
            <div className="row">
              {/* Feature 1 */}
              <div className="features-item-02">
                <div className="features-img">
                  <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/all-icon/feat-4.png" alt="Franchise Icon" />
                </div>
                <div className="features-content">
                  <h3 className="title">Advanced Curriculum</h3>
                  <p>Industry-aligned software training</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="features-item-02">
                <div className="features-img">
                  <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/all-icon/feat-5.png" alt="Students Icon" />
                </div>
                <div className="features-content">
                  <h3 className="title">3L+ Student</h3>
                  <p>Certified learners placed globally</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="features-item-02">
                <div className="features-img">
                  <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/all-icon/feat-6.png" alt="Instructors Icon" />
                </div>
                <div className="features-content">
                  <h3 className="title">Expert Faculty</h3>
                  <p>Experienced IT professionals & Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Top Course Categories Section */}
      <section className="edubin-category-section-06">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Top Skill Courses<span></span></h2>
          </div>
          
          <div className="category-wrap-03">
            <div className="row">
              {/* Category 1 */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Civil/Architecture">
                      <img src="https://caddeskindia.com/wp-content/uploads/2026/04/Civil-arch.jpg" alt="Civil/Architecture" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Civil/Architecture">
                    <h4 className="title">Civil/Architecture</h4>
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Electrical/Electronics">
                      <img src="https://caddeskindia.com/wp-content/uploads/2026/04/ELECTRICAL.jpg" alt="Electrical/Electronics" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Electrical/Electronics">
                    <h4 className="title">Electrical/Electronics</h4>
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Mechanical/Automobile">
                      <img src="https://caddeskindia.com/wp-content/uploads/2026/04/Mechanical.jpg" alt="Mechanical/Automobile" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Mechanical/Automobile">
                    <h4 className="title">Mechanical/Automobile</h4>
                  </Link>
                </div>
              </div>

              {/* Category 4 */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Internship">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/03/Internship.jpg" alt="Internships" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Internship">
                    <h4 className="title">Internships</h4>
                  </Link>
                </div>
              </div>

              {/* Category 5 */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=CS/IT">
                      <img src="https://caddeskindia.com/wp-content/uploads/2026/04/CS.jpg" alt="CS/IT" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=CS/IT">
                    <h4 className="title">CS/IT</h4>
                  </Link>
                </div>
              </div>

              {/* Category 6 */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <a href="https://caddeskindia.com/online-training/" target="_blank" rel="noopener noreferrer">
                      <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/online-training-1.png" alt="Online programs" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <a href="https://caddeskindia.com/online-training/" target="_blank" rel="noopener noreferrer">
                    <h4 className="title">Online Programs</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trending Courses Section */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="section-title-container">
            <h2 className="title">Trending Courses<span></span></h2>
            <Link href="/courses" className="btn btn-black" id="trending-view-all-btn">
              View All Courses
            </Link>
          </div>

          <div className="category-wrap-03">
            <div className="row d-flex align-items-stretch">
              {/* Course 1 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/autocad-mechanical">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/ACAD-ME-1.jpg" alt="AutoCAD Mechanical" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/autocad-mechanical">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>AutoCAD Mechanical</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    A powerful drafting software used to create precise 2D Drawings and 3D Models.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ Mechanical/Automobile</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/autocad-mechanical" id="trending-det-acad-mech">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/autocad-civil-arch">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/ACAD-CE-1.jpg" alt="AutoCAD Civil/Arch." />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/autocad-civil-arch">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>AutoCAD Civil/Arch.</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    AutoCAD is a powerful drafting software used to create precise 2D Drawings and 3D Models.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>🏢 Civil/Architecture</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/autocad-civil-arch" id="trending-det-acad-civil">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/autocad-electrical">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/ACAD-EE-1.jpg" alt="AutoCAD Electrical" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/autocad-electrical">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>AutoCAD Electrical</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Most powerful programs have commands like wiring, circuiting, PLC modules, panels, and more.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚡ Electrical/Electronics</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/autocad-electrical" id="trending-det-acad-elec">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/solidworks">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/Solidworks.jpg" alt="Solidworks" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/solidworks">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>SolidWorks</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Popular in Product Industries (small and medium scale) due to user-friendly nature and easy working.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ Mechanical/Automobile</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/solidworks" id="trending-det-solidworks">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/nx-cad">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/CNC.jpg" alt="CNC Programming" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/nx-cad">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>CNC Programming</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    CNC Programming is the manual coding done by G-codes and M-codes for machining operations.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ Mechanical/Automobile</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/nx-cad" id="trending-det-cnc">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 6 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/catia">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/CATIA.jpg" alt="CATIA" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/catia">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>CATIA</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Used by most of the Automobile and aerospace companies for high-end body surface design.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ Mechanical/Automobile</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/catia" id="trending-det-catia">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. High Modular Courses Section */}
      <section className="section-padding bg-grey">
        <div className="container">
          <div className="section-title-container">
            <h2 className="title">High Modular Courses<span></span></h2>
            <Link href="/courses" className="btn btn-black" id="high-modular-view-all-btn">
              View All Courses
            </Link>
          </div>

          <div className="category-wrap-03">
            <div className="row d-flex align-items-stretch">
              {/* Course 1 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/solidworks">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/Solidworks.jpg" alt="Solidworks" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/solidworks">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>Solidworks</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Popular in Product Industries (small and medium scale) due to user-friendly nature.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>Mechanical/Automobile</span>
                  <div className="view-details">
                    <Link href="/courses/solidworks" style={{ color: 'var(--clr-crimson)' }} id="modular-det-solidworks">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/nx-cad">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/CNC.jpg" alt="CNC Programming" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/nx-cad">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>CNC Programming</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    CNC Programming is the manual coding done by G-codes and M-codes for machining.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>Mechanical/Automobile</span>
                  <div className="view-details">
                    <Link href="/courses/nx-cad" style={{ color: 'var(--clr-crimson)' }} id="modular-det-cnc">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/catia">
                      <img src="https://caddeskindia.com/wp-content/uploads/2021/02/CATIA.jpg" alt="CATIA" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/catia">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>CATIA</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Used by most of the Automobile and aerospace companies for body surface design.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>Mechanical/Automobile</span>
                  <div className="view-details">
                    <Link href="/courses/catia" style={{ color: 'var(--clr-crimson)' }} id="modular-det-catia">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Counter Start Section */}
      <div className="counter-section-04">
        <div className="container">
          <div className="counter-wrap-03">
            <div className="row align-items-center">
              <div className="counter-title-wrap">
                <h3 className="title">Access to unlimited courses with us</h3>
              </div>
              <div className="counter-content-wrap">
                <div className="row">
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/all-icon/counter-1.png" alt="Icon" />
                    </div>
                    <span><span className="counter"><CountUpNumber value={2} /></span>L+</span>
                    <p>Learners Enrolled</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/all-icon/counter-2.png" alt="Icon" />
                    </div>
                    <span><span className="counter"><CountUpNumber value={1000} /></span>+</span>
                    <p>College/ Corporate Training</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/all-icon/counter-1.png" alt="Icon" />
                    </div>
                    <span><span className="counter"><CountUpNumber value={3} /></span>+</span>
                    <p>Training Centres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 8. Student Testimonial Section */}
      <section className="edubin-testimonial-section-03">
        <div 
          className="testimonial-title-wrap" 
          style={{ backgroundImage: 'url(https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/testi-bg3.png)' }}
        >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Student <span>Testimonial</span></h2>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="testimonial-slider-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 testimonial-img">
                <img 
                  src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/testi-img.png" 
                  alt="Student Circular Collage" 
                />
              </div>
              <div className="col-lg-6">
                <div className="single-testimonial-02">
                  <div className="testimonial-cont">
                    <p>{testimonials[activeTestimonial].text}</p>
                    <h6 className="name">{testimonials[activeTestimonial].name}</h6>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <button onClick={prevTestimonial} className="testimonial-nav-btn" aria-label="Previous testimonial" id="testi-nav-prev-btn">
                      ❮
                    </button>
                    <button onClick={nextTestimonial} className="testimonial-nav-btn" aria-label="Next testimonial" id="testi-nav-next-btn">
                      ❯
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Advisor Form Section */}
      <CourseRecommender onOpenEnquiry={openEnquiry} />

      {/* 10. Our Placements Section */}
      <section className="faq-section-02 section-padding">
        <div className="container">
          <div className="faq-wrapper">
            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 35px 0' }}>
              <h2 className="section-title" style={{ display: 'block' }}>Our Placements</h2>
            </div>
            
            <div className="faq-accordion">
              <div className="faq-accordion-wrapper">
                <div className="faq-col">
                  <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#07294d' }}>
                    “Network has grown to more than 150+ cities in 22 states of India.”
                  </p>
                  <p>
                    M-Tech Computers is a leading IT training network of India. Since our inception, M-Tech Computers has developed as a leading franchise network and our network has grown to more than 150+ cities in 22 states of India. We have started operations in the overseas market as well.
                  </p>
                  <p>
                    M-Tech Computers focuses on student and works on development of his/her knowledge and skills. Various facilities are provided to them i.e. student kit, student panel, books and course material, Live projects, industrial visits, certification & Placement alerts. Certification process is initiated only after receiving feedback and project submission at all level.
                  </p>
                  <a href="https://career-desk.com/" className="btn btn-yellow" target="_blank" rel="noopener noreferrer" id="placement-career-btn">
                    Career with us
                  </a>
                </div>
                
                <div className="faq-col">
                  <div className="sidebar-details-wrap">
                    <div className="sidebar-details-video-description">
                      <div className="sidebar-description">
                        <a href="https://career-desk.com/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="https://caddeskindia.com/wp-content/themes/caddesk_official_new/assets/images/placement.png" 
                            alt="Placement Collage Banner" 
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Association Banner */}
      <section style={{ backgroundColor: '#07294d', padding: '20px 0', borderTop: '4px solid #f6b500', marginBottom: '40px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <h3 style={{ color: 'white', margin: 0, fontSize: '20px', fontWeight: 600 }}>In association with:</h3>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: 'white', padding: '10px 25px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/skill-india.png" alt="Skill India" style={{ maxHeight: '60px' }} />
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 25px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="https://caddeskindia.com/wp-content/uploads/2021/03/caddesklogo-1024x267-min.png" alt="CAD Desk" style={{ maxHeight: '60px' }} />
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 25px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/digital-india.png" alt="Digital India" style={{ maxHeight: '60px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Collaborations / Logos Slider Row */}
      <section className="edubin-brand-section-02 section-padding">
        <div className="container">
          <div className="brand-wrapper text-center">
            <h3 className="brand-title">Collaborations</h3>
            <div className="brand-2-active-row">
              {brandLogos.map((logoUrl, index) => (
                <img 
                  key={index} 
                  src={logoUrl} 
                  alt="M-Tech Computers Collaborations Brand Logo" 
                  id={`brand-logo-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
