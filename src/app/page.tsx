'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import CourseRecommender from '@/components/CourseRecommender';
import Hero from '@/components/Hero';
import { placedStudentsByYear } from '@/data/placedStudents';
import { GMB_LOCATIONS } from '@/config/site';

function CountUpNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

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
  },
  {
    name: "Vaishnavi Gaikar",
    text: "The practical labs and placement guidance helped me land my role as MIS Executive. Highly recommend M-Tech Computers for career-focused training."
  },
  {
    name: "Harsh Dabhi",
    text: "React training at M-Tech was clear, project-based, and industry-ready. I got placed as a React Developer soon after completing the course."
  }
];

const homeBranches = [
  {
    city: 'Kalyan',
    label: 'Kalyan W — Head Office',
    mapsUrl: GMB_LOCATIONS.kalyan,
  },
  {
    city: 'Dombivli',
    label: 'Dombivli East',
    mapsUrl: GMB_LOCATIONS.dombivli,
  },
];

const placedCandidates = placedStudentsByYear['2025-2026']
  .filter((s) => s.photo)
  .slice(0, 8);

// Collaboration Logos
const brandLogos = [
  '/images/caddeskindia_com_wp-content_uploads_2023_09_8.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_7.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_6.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_5.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_4.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_3.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_2.png',
  '/images/caddeskindia_com_wp-content_uploads_2023_09_1.png',
  '/images/caddeskindia_com_wp-content_uploads_2025_02_header_logo.webp'
];

export default function HomePage() {
  const openEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-enquiry'));
    }
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
                  <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_feat-4.png" alt="Franchise Icon" />
                </div>
                <div className="features-content">
                  <h3 className="title">Advanced Curriculum</h3>
                  <p>Industry-aligned software training</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="features-item-02">
                <div className="features-img">
                  <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_feat-5.png" alt="Students Icon" />
                </div>
                <div className="features-content">
                  <h3 className="title">5000+ Students Trained</h3>
                  <p>Certified learners placed successfully</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="features-item-02">
                <div className="features-img">
                  <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_feat-6.png" alt="Instructors Icon" />
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
              {/* Category 1 - Information Technology */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Information Technology">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_CS.jpg" alt="Information Technology" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Information Technology">
                    <h4 className="title">Information Technology</h4>
                  </Link>
                </div>
              </div>

              {/* Category 2 - Civil/Architecture */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Civil/Architecture">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_Civil-arch.jpg" alt="Civil & Architecture" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Civil/Architecture">
                    <h4 className="title">Civil &amp; Architecture</h4>
                  </Link>
                </div>
              </div>

              {/* Category 3 - Electrical */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Electrical/Electronics">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_ELECTRICAL.jpg" alt="Electrical" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Electrical/Electronics">
                    <h4 className="title">Electrical</h4>
                  </Link>
                </div>
              </div>

              {/* Category 4 - Mechanical */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Mechanical/Automobile">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_Mechanical.jpg" alt="Mechanical" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Mechanical/Automobile">
                    <h4 className="title">Mechanical</h4>
                  </Link>
                </div>
              </div>

              {/* Category 5 - Project Planning */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Project Planning">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg" alt="Project Planning & Management" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Project Planning">
                    <h4 className="title">Project Planning &amp; Management</h4>
                  </Link>
                </div>
              </div>

              {/* Category 6 - Interior Design */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Interior Design">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Sketch-up.jpg" alt="Interior Design" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Interior Design">
                    <h4 className="title">Interior Designer</h4>
                  </Link>
                </div>
              </div>

              {/* Category 7 - Jewellery Design */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Jewellery Design">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_category_ctg-3.jpg" alt="Jewellery Design" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Jewellery Design">
                    <h4 className="title">Jewellery Design</h4>
                  </Link>
                </div>
              </div>


              {/* Category 9 - Piping */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Piping">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_civil-3d.jpg" alt="Piping" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Piping">
                    <h4 className="title">Piping</h4>
                  </Link>
                </div>
              </div>

              {/* Category 10 - Accounting & Computer */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Accounting">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg" alt="Accounting & Computer" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Accounting">
                    <h4 className="title">Accounting &amp; Computer</h4>
                  </Link>
                </div>
              </div>

              {/* Category 11 - Digital Marketing */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Digital Marketing">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg" alt="Digital Marketing" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Digital Marketing">
                    <h4 className="title">Digital Marketing</h4>
                  </Link>
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
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg" alt="AutoCAD Mechanical" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
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
                    <Link href="/courses?category=Mechanical" id="trending-det-acad-mech">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Civil/Architecture">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-CE-1.jpg" alt="AutoCAD Civil/Arch." />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Civil/Architecture">
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
                    <Link href="/courses?category=Civil/Architecture" id="trending-det-acad-civil">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Electrical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-EE-1.jpg" alt="AutoCAD Electrical" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Electrical">
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
                    <Link href="/courses?category=Electrical" id="trending-det-acad-elec">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Solidworks.jpg" alt="Solidworks" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
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
                    <Link href="/courses?category=Mechanical" id="trending-det-solidworks">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_CNC.jpg" alt="CNC Programming" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
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
                    <Link href="/courses?category=Mechanical" id="trending-det-cnc">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 6 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_CATIA.jpg" alt="CATIA" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
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
                    <Link href="/courses?category=Mechanical" id="trending-det-catia">View Details</Link>
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
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Solidworks.jpg" alt="Solidworks" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>Solidworks</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Popular in Product Industries (small and medium scale) due to user-friendly nature.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>Mechanical/Automobile</span>
                  <div className="view-details">
                    <Link href="/courses?category=Mechanical" style={{ color: 'var(--clr-crimson)' }} id="modular-det-solidworks">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_CNC.jpg" alt="CNC Programming" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>CNC Programming</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    CNC Programming is the manual coding done by G-codes and M-codes for machining.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>Mechanical/Automobile</span>
                  <div className="view-details">
                    <Link href="/courses?category=Mechanical" style={{ color: 'var(--clr-crimson)' }} id="modular-det-cnc">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses?category=Mechanical">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_CATIA.jpg" alt="CATIA" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses?category=Mechanical">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>CATIA</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Used by most of the Automobile and aerospace companies for body surface design.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>Mechanical/Automobile</span>
                  <div className="view-details">
                    <Link href="/courses?category=Mechanical" style={{ color: 'var(--clr-crimson)' }} id="modular-det-catia">View Details</Link>
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
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-1.png" alt="Icon" />
                    </div>
                    <span><span className="counter"><CountUpNumber value={5000} /></span>+</span>
                    <p>Students Trained</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-2.png" alt="Icon" />
                    </div>
                    <span><span className="counter"><CountUpNumber value={50} /></span>+</span>
                    <p>College/ Corporate Training</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-1.png" alt="Icon" />
                    </div>
                    <span><span className="counter"><CountUpNumber value={32} /></span>+</span>
                    <p>Training Centres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 8. Advisor Form Section */}
      <CourseRecommender onOpenEnquiry={openEnquiry} />

      {/* 9. Our Branches */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ color: '#07294d' }}>Our Branches</h2>
          </div>
          <div className="home-branches-grid">
            {homeBranches.map((branch, idx) => (
              <a
                key={branch.city}
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="home-branch-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="home-branch-num">{String(idx + 1).padStart(2, '0')}</span>
                <div className="home-branch-pin" aria-hidden="true">📍</div>
                <h3>{branch.city}</h3>
                <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#64748b' }}>{branch.label}</p>
                <span style={{ display: 'inline-block', marginTop: '12px', fontSize: '13px', fontWeight: 700, color: '#0ea5e9' }}>
                  Live Location →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Recently Placed Candidates */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ color: '#07294d' }}>Recently Placed Candidates</h2>
            <p className="section-subtitle">
              Our students are building careers across banking, IT, and product companies.{' '}
              <Link href="/placed-students" style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>
                View all placements →
              </Link>
            </p>
          </div>
          <div className="placed-candidates-grid">
            {placedCandidates.map((student) => (
              <div key={student.name} className="placed-candidate-card">
                <div className="placed-candidate-avatar">
                  {student.photo ? (
                    <img src={student.photo} alt={student.name} className="placed-candidate-photo" />
                  ) : (
                    student.name.split(' ').map((n) => n[0]).join('').slice(0, 2)
                  )}
                </div>
                <h3>{student.name}</h3>
                <p className="placed-candidate-role">{student.role}</p>
                <div className="placed-candidate-company">{student.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Association Banner */}
      <section style={{ backgroundColor: '#07294d', padding: '20px 0', borderTop: '4px solid #f6b500' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <h3 style={{ color: 'white', margin: 0, fontSize: '20px', fontWeight: 600 }}>In association with:</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/digital-india.png" alt="Digital India" style={{ maxHeight: '60px' }} />
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/mtech-logo.png" alt="M-Tech Computers" style={{ maxHeight: '60px' }} />
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/skill-india.png" alt="Skill India" style={{ maxHeight: '60px' }} />
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/msme.png" alt="MSME Ministry of MSME, Govt. of India" style={{ maxHeight: '60px' }} />
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
              <img src="/make-in-india.png" alt="Make in India" style={{ maxHeight: '60px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations section removed as per client feedback */}

      {/* Running Testimonials (end of page) */}
      <section className="running-testimonials-section">
        <div className="container" style={{ marginBottom: '28px' }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <h2 className="section-title" style={{ color: '#07294d' }}>Student Testimonials</h2>
          </div>
        </div>
        <div className="running-testimonials-track" aria-label="Scrolling student testimonials">
          <div className="running-testimonials-row">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <article key={`${item.name}-${idx}`} className="running-testimonial-card">
                <p>&ldquo;{item.text}&rdquo;</p>
                <h4>— {item.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
