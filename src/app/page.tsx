'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import CourseRecommender from '@/components/CourseRecommender';
import Hero from '@/components/Hero';
import { placedStudentsByYear } from '@/data/placedStudents';
import { GMB_LOCATIONS, STUDENTS_TRAINED, SOCIAL_LINKS } from '@/config/site';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

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


      {/* Impact Stats — below features */}
      <section className="impact-stats-section">
        <div className="container">
          <div className="impact-stats-grid">
            <div className="impact-stat-card">
              <div className="impact-stat-icon impact-stat-icon--green" aria-hidden="true">🌐</div>
              <h3>{STUDENTS_TRAINED}</h3>
              <p>Students Empowered</p>
            </div>
            <div className="impact-stat-card">
              <div className="impact-stat-icon impact-stat-icon--blue" aria-hidden="true">💻</div>
              <h3>50+</h3>
              <p>College / Corporate Training</p>
              <div className="impact-stat-socials">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={14} /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={14} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={14} /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={14} /></a>
              </div>
            </div>
            <div className="impact-stat-card">
              <div className="impact-stat-icon impact-stat-icon--red" aria-hidden="true">🎓</div>
              <h3>11+</h3>
              <p>Years of Education Excellence</p>
            </div>
            <div className="impact-stat-card">
              <div className="impact-stat-icon impact-stat-icon--green" aria-hidden="true">🏛️</div>
              <h3>2+</h3>
              <p>Branches</p>
            </div>
            <div className="impact-stat-card">
              <div className="impact-stat-icon impact-stat-icon--blue" aria-hidden="true">▶️</div>
              <h3>IT</h3>
              <p>Courses — Programming &amp; Cloud</p>
            </div>
            <div className="impact-stat-card">
              <div className="impact-stat-icon impact-stat-icon--red" aria-hidden="true">🏆</div>
              <h3>100%</h3>
              <p>Placement Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Top Course Categories Section */}
      <section className="edubin-category-section-06">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Top Skill Courses &amp; CAD Domains<span></span></h2>
          </div>
          
          <div className="category-wrap-03">
            <div className="row">
              {/* Category 1 - Mechanical CAD */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Mechanical" title="Click to filter Mechanical CAD Courses">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_Mechanical.jpg" alt="Mechanical CAD" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Mechanical">
                    <h4 className="title">Mechanical CAD</h4>
                  </Link>
                </div>
              </div>

              {/* Category 2 - Civil & Arch CAD */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Civil%20%26%20Arch" title="Click to filter Civil & Architectural CAD Courses">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_Civil-arch.jpg" alt="Civil & Architectural CAD" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Civil%20%26%20Arch">
                    <h4 className="title">Civil &amp; Architectural CAD</h4>
                  </Link>
                </div>
              </div>

              {/* Category 3 - Electrical CAD */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Electrical" title="Click to filter Electrical CAD Courses">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_ELECTRICAL.jpg" alt="Electrical CAD" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Electrical">
                    <h4 className="title">Electrical CAD</h4>
                  </Link>
                </div>
              </div>

              {/* Category 4 - Interior Design */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Interior%20Design" title="Click to filter Interior Design Courses">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_3ds-1.jpg" alt="Interior Design" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Interior%20Design">
                    <h4 className="title">Interior Design</h4>
                  </Link>
                </div>
              </div>

              {/* Category 5 - Project Planning */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Project%20Planning" title="Click to filter Project Planning Courses">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg" alt="Project Planning & Management" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Project%20Planning">
                    <h4 className="title">Project Planning &amp; Management</h4>
                  </Link>
                </div>
              </div>

              {/* Category 6 - Jewelry Design */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Jewellery%20Design" title="Click to filter Jewelry Design Courses">
                      <img src="/images/jewelry-cad.jpg" alt="Jewelry Design" style={{ objectFit: 'cover' }} />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Jewellery%20Design">
                    <h4 className="title">Jewelry Design</h4>
                  </Link>
                </div>
              </div>

              {/* Category 7 - Information Technology */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=IT%20Course" title="Click to filter IT Courses">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2026_04_CS.jpg" alt="Information Technology" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=IT%20Course">
                    <h4 className="title">Information Technology</h4>
                  </Link>
                </div>
              </div>

              {/* Category 8 - Piping */}
              <div className="single-course">
                <div className="thum">
                  <div className="image">
                    <Link href="/courses?category=Piping%20Course" title="Click to filter Piping Courses">
                      <img src="/images/piping-course.jpg" alt="Piping" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <Link href="/courses?category=Piping%20Course">
                    <h4 className="title">Piping &amp; Plant Design</h4>
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
            <h2 className="title">Trending CAD &amp; Tech Courses<span></span></h2>
            <Link href="/courses" className="btn btn-black" id="trending-view-all-btn">
              View All Courses
            </Link>
          </div>

          <div className="category-wrap-03">
            <div className="row d-flex align-items-stretch">
              {/* Course 1 — Mechanical CAD */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/autocad-mechanical" title="Click to view Mechanical CAD Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg" alt="Mechanical CAD" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/autocad-mechanical">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Mechanical CAD</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Drafting, SolidWorks 3D, CATIA, Creo &amp; ANSYS engineering assemblies.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ Mechanical CAD</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/autocad-mechanical" id="trending-det-acad-mech">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 2 — Civil & Architectural CAD */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/autocad-civil-designer" title="Click to view Civil/Architectural CAD Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-CE-1.jpg" alt="Civil & Architectural CAD" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/autocad-civil-designer">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Civil / Architectural CAD</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Blueprint drafting, Revit BIM modeling, STAAD.Pro structural analysis &amp; 3D renders.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>🏢 Civil &amp; Arch CAD</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/autocad-civil-designer" id="trending-det-acad-civil">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 3 — Electrical CAD */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/autocad-electrical" title="Click to view Electrical CAD Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-EE-1.jpg" alt="Electrical CAD" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/autocad-electrical">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Electrical CAD</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Schematics, panel wiring diagrams, EPLAN, PLC ladder logic &amp; SCADA automation.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚡ Electrical CAD</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/autocad-electrical" id="trending-det-acad-elec">View Details</Link>
                  </div>
                </div>
              </div>

                            {/* Course 10 — Full Stack Web Development */}
                            <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/full-stack-web" title="Click to view Full Stack Web Development Course">
                      <img src="/images/it/fullstack.png" alt="Full Stack Web Development" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/full-stack-web">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Full Stack Web Development</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Frontend, backend, databases &amp; deployment for modern web applications.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>💻 Tech</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/full-stack-web" id="trending-det-fullstack">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 11 — Artificial Intelligence */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/mastering-artificial-intelligence" title="Click to view Artificial Intelligence Course">
                      <img src="/images/it/artificial-intelligence.png" alt="Artificial Intelligence" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/mastering-artificial-intelligence">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Artificial Intelligence</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Machine learning, neural networks &amp; real-world AI applications from the basics.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>🤖 Tech</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/mastering-artificial-intelligence" id="trending-det-ai">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 12 — Data Science */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/data-science" title="Click to view Data Science Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg" alt="Data Science" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/data-science">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Data Science</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Python, Pandas, NumPy, visualization &amp; statistical analysis for data roles.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>📈 Tech</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/data-science" id="trending-det-data-science">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 4 — Interior Design */}
              {/* <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/3dsmax-animation" title="Click to view Interior Design Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_3ds-1.jpg" alt="Interior Design" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/3dsmax-animation">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Interior Design</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    3ds Max interior modeling, SketchUp Pro furniture layouts &amp; photorealistic V-Ray render.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>🛋️ Interior Design</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/3dsmax-animation" id="trending-det-interior">View Details</Link>
                  </div>
                </div>
              </div> */}

              {/* Course 5 — Project Planning */}
              {/* <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/primavera-p6" title="Click to view Project Planning Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg" alt="Project Planning" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/primavera-p6">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Project Planning</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Oracle Primavera P6, MS Project scheduling, WBS structures &amp; critical path management.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>📊 Project Planning</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/primavera-p6" id="trending-det-primavera">View Details</Link>
                  </div>
                </div>
              </div> */}

              {/* Course 6 — Jewelry Design */}
              {/* <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/matrixgold" title="Click to view Jewelry Design Course">
                      <img src="/images/jewelry-cad.jpg" alt="Jewelry Design" style={{ objectFit: 'cover' }} />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/matrixgold">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Jewelry Design</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    MatrixGold CAD, Rhino 3D NURBS modeling &amp; ZBrush 3D jewelry ring sculpting.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>💎 Jewelry Design</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/matrixgold" id="trending-det-jewelry">View Details</Link>
                  </div>
                </div>
              </div> */}

              {/* Course 7 — SolidWorks CAD */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/solidworks-mechanical" title="Click to view SolidWorks Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_02_Solidworks.jpg" alt="SolidWorks" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/solidworks-mechanical">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>SolidWorks</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    3D product modeling, mechanical assemblies, sheet metal design &amp; engineering drawings.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ CAD</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/solidworks-mechanical" id="trending-det-solidworks">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 8 — CATIA CAD */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/catia" title="Click to view CATIA Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_catia-in.jpg" alt="CATIA" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/catia">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>CATIA</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Surface modeling, part design, assemblies &amp; sheet metal for automotive and aerospace work.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>⚙️ CAD</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/catia" id="trending-det-catia">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 9 — Revit Architecture CAD */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/revit-architecture" title="Click to view Revit Architecture Course">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-ar-in.jpg" alt="Revit Architecture" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/revit-architecture">
                    <h4 className="title" style={{ fontSize: '19px', marginBottom: '8px' }}>Revit Architecture</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    BIM building models, floor plans, elevations &amp; construction documentation.
                  </p>
                </div>
                <div className="course-teacher">
                  <div className="course-lesson">
                    <span>🏢 CAD</span>
                  </div>
                  <div className="view-details">
                    <Link href="/courses/revit-architecture" id="trending-det-revit-arch">View Details</Link>
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

              {/* Course 4 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/cyber-security">
                      <img src="/images/caddeskindia_com_wp-content_uploads_2021_03_Cyber-Security.jpg" alt="Cyber Security" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/cyber-security">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>Cyber Security</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Network security, ethical hacking, penetration testing &amp; SOC incident response.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>IT Course</span>
                  <div className="view-details">
                    <Link href="/courses/cyber-security" style={{ color: 'var(--clr-crimson)' }} id="modular-det-cyber-security">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/aws-cloud-computing">
                      <img src="/images/it/aws-cloud.png" alt="AWS Cloud Computing" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/aws-cloud-computing">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>AWS Cloud Computing</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    Hands-on EC2, S3, VPC, IAM &amp; RDS for deploying and managing cloud applications.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>IT Course</span>
                  <div className="view-details">
                    <Link href="/courses/aws-cloud-computing" style={{ color: 'var(--clr-crimson)' }} id="modular-det-aws">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Course 6 */}
              <div className="single-course">
                <div className="thum" style={{ height: '180px' }}>
                  <div className="image">
                    <Link href="/courses/generative-ai-agentic-ai">
                      <img src="/images/it/gen-ai-agentic.png" alt="Generative AI & Agentic AI" />
                    </Link>
                  </div>
                </div>
                <div className="content" style={{ textAlign: 'left' }}>
                  <Link href="/courses/generative-ai-agentic-ai">
                    <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>Generative AI &amp; Agentic AI</h4>
                  </Link>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                    LLMs, prompt engineering, RAG &amp; autonomous AI agent workflows with real projects.
                  </p>
                </div>
                <div className="course-teacher">
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>IT Course</span>
                  <div className="view-details">
                    <Link href="/courses/generative-ai-agentic-ai" style={{ color: 'var(--clr-crimson)' }} id="modular-det-gen-ai">View Details</Link>
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
                    <div className="counter-value">
                      <span className="counter"><CountUpNumber value={200} /></span>k+
                    </div>
                    <p>Students Trained</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-2.png" alt="Icon" />
                    </div>
                    <div className="counter-value">
                      <span className="counter"><CountUpNumber value={50} /></span>+
                    </div>
                    <p>College/ Corporate Training</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-1.png" alt="Icon" />
                    </div>
                    <div className="counter-value">
                      <span className="counter"><CountUpNumber value={2} /></span>+
                    </div>
                    <p>Learning Centres</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-2.png" alt="Icon" />
                    </div>
                    <div className="counter-value">
                      <span className="counter"><CountUpNumber value={11} /></span>+
                    </div>
                    <p>Years of Excellence</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-1.png" alt="Icon" />
                    </div>
                    <div className="counter-value">IT</div>
                    <p>Programming &amp; Cloud Courses</p>
                  </div>
                  <div className="single-counter-03">
                    <div className="icon">
                      <img src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_all-icon_counter-2.png" alt="Icon" />
                    </div>
                    <div className="counter-value">100%</div>
                    <p>Placement Assistance</p>
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
