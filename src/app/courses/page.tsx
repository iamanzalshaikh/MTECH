'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Complete course list data mapped with verified caddeskindia.com course image URLs
export const coursesData = [
  // ==================== CIVIL / ARCHITECTURE ====================
  {
    id: 'autocad-civil-arch',
    title: 'AutoCAD Civil / Architecture',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ACAD-CE-1.jpg',
    description: 'AutoCAD is a powerful drafting software used to create precise 2D Drawings and 3D Models.',
    duration: '4 to 6 Weeks',
    eligibility: 'B.Tech/BE/Diploma in Civil Engineering or Architecture students',
    certification: 'Autodesk Authorized & ISO Certification'
  },
  {
    id: 'staad-pro',
    title: 'STAAD Pro',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/STAAD-1.jpg',
    description: 'It allows structural engineers to analyze and design virtually any type of structure.',
    duration: '4 to 6 Weeks',
    eligibility: 'B.Tech/BE/Diploma in Civil/Structural Engineering',
    certification: 'Bentley Systems Authorized & ISO Certification'
  },
  {
    id: '3ds-max',
    title: '3DS Max',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/3ds-1.jpg',
    description: 'Autodesk 3ds Max is the most powerful software among modeling and rendering tools.',
    duration: '6 Weeks',
    eligibility: 'Architects, Interior Designers, Civil Engineers',
    certification: 'Autodesk Authorized & ISO Certification'
  },
  {
    id: 'revit-architecture',
    title: 'Revit Architecture',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/REVIT-AR-1.jpg',
    description: 'It allows users to design a building, and components in 3D, annotate the model with 2D drafting.',
    duration: '6 Weeks',
    eligibility: 'Civil & Architectural Engineers, Interior Designers',
    certification: 'Autodesk Authorized & ISO Certification'
  },
  {
    id: 'v-ray',
    title: 'V-Ray',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/V-ray.jpg',
    description: "Let's you render anything & everything.",
    duration: '4 Weeks',
    eligibility: 'Architects, Interior Designers, 3D Artists',
    certification: 'Chaos Group Authorized & ISO Certification'
  },
  {
    id: 'google-sketch-up',
    title: 'Google Sketch Up',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Sketch-up.jpg',
    description: 'A great tool to create 3D models in architecture, interior, and etc. with user-friendly interface.',
    duration: '4 Weeks',
    eligibility: 'Architects, Civil Engineers, Interior Decorators',
    certification: 'Trimble Authorized & ISO Certification'
  },
  {
    id: 'primavera',
    title: 'Primavera',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Primavera.jpg',
    description: 'Powerful planning tool use all over the world to plan projects mainly in terms of time, resources.',
    duration: '4 Weeks',
    eligibility: 'Civil Project Managers, Site Engineers',
    certification: 'Oracle/ISO Certification'
  },
  {
    id: 'ms-project',
    title: 'MS Project',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/MSP.jpg',
    description: 'It manages project portfolio investments and delivers success with the intended business value.',
    duration: '4 Weeks',
    eligibility: 'Project Managers, Engineers, Planners',
    certification: 'Microsoft Partner Certification'
  },
  {
    id: 'etabs',
    title: 'ETABS',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ETAB-1.jpg',
    description: 'Application for multi-storied building structural analysis as well as structural design',
    duration: '4 to 6 Weeks',
    eligibility: 'B.Tech/BE/Diploma in Civil/Structural Engineering',
    certification: 'CSI/ISO Certification'
  },
  {
    id: 'revit-structure',
    title: 'Revit Structure',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/REVIT-ST-1.jpg',
    description: 'Revit Structure is a powerful software in structural engineering to design structure',
    duration: '6 Weeks',
    eligibility: 'Structural Designers, Civil Engineers',
    certification: 'Autodesk Partner Certification'
  },
  {
    id: 'autodesk-civil-3d',
    title: 'Autodesk Civil 3D',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/civil-3d.jpg',
    description: 'Civil 3D is used to create three-dimensional (3D) models of land, water, or transportation features',
    duration: '6 Weeks',
    eligibility: 'Surveying Engineers, Land & Transportation Planners',
    certification: 'Autodesk Authorized Certificate'
  },
  {
    id: 'bim-civil-arch',
    title: 'BIM Civil Arch.',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/BIM-civil.jpg',
    description: 'A bunch of software for ACE professionals.',
    duration: '8 to 12 Weeks',
    eligibility: 'Civil Engineers, BIM Planners',
    certification: 'M-Tech Computers Professional BIM Certification'
  },
  {
    id: 'mx-road',
    title: 'MX Road',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Mx-road.jpg',
    description: "It's a string-based modeling tool that enables rapid and accurate design for all types of roads.",
    duration: '4 Weeks',
    eligibility: 'Highway Engineers, Civil Drafters',
    certification: 'Bentley Systems/ISO Certification'
  },
  {
    id: 'quantity-takeoff',
    title: 'Quantity Takeoff',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/QTO.jpg',
    description: "It's cost estimating software that makes the process of material costing faster and accurate.",
    duration: '4 Weeks',
    eligibility: 'Civil Quantity Surveyors, Cost Estimators',
    certification: 'ISO Certification'
  },
  {
    id: 'navisworks-civil',
    title: 'Navisworks (Civil)',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Navisworks.jpg',
    description: '3D Modelling and review software for AEC professionals.',
    duration: '4 Weeks',
    eligibility: 'BIM Project Managers, Civil Engineers',
    certification: 'Autodesk Partner Certification'
  },
  {
    id: 'lumion',
    title: 'Lumion',
    category: 'Civil/Architecture',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Lumion-3d.jpg',
    description: "An incredible real-time 3D architectural visualization tool that’s being used for architects",
    duration: '4 Weeks',
    eligibility: 'Interior Designers, Landscape Architects',
    certification: 'ISO Certification'
  },

  // ==================== ELECTRICAL / ELECTRONICS ====================
  {
    id: 'autocad-electrical',
    title: 'AutoCAD Electrical',
    category: 'Electrical/Electronics',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ACAD-EE-1.jpg',
    description: 'Most powerful programs have commands like wiring, circuiting, PLC modules, panels, and more.',
    duration: '4 to 6 Weeks',
    eligibility: 'B.Tech/BE/Diploma in Electrical, Electronics, or Instrumentation Engineering',
    certification: 'Autodesk Authorized & ISO Certification'
  },
  {
    id: 'scada',
    title: 'SCADA',
    category: 'Electrical/Electronics',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/SCADA.jpg',
    description: 'A real-world SCADA system can monitor and control hundreds of I/O points.',
    duration: '6 Weeks',
    eligibility: 'Electrical, Electronics, Instrumentation Students',
    certification: 'ISO Certification'
  },
  {
    id: 'plc',
    title: 'PLC',
    category: 'Electrical/Electronics',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/PLC-1.jpg',
    description: '(PLCs) are one of the most useful technologies in the industries for automation',
    duration: '6 Weeks',
    eligibility: 'Electrical & Instrumentation Engineers',
    certification: 'ISO Automation Certificate'
  },
  {
    id: 'matlab-electrical',
    title: 'MATLAB',
    category: 'Electrical/Electronics',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/MATLAB-1.jpg',
    description: 'Used by engineers and scientists for iterative analysis and design processes.',
    duration: '6 Weeks',
    eligibility: 'Electrical, ECE, CS Students',
    certification: 'ISO Certification'
  },
  {
    id: 'eplan-electric',
    title: 'Eplan Electric',
    category: 'Electrical/Electronics',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Eplan.jpg',
    description: 'It provides unlimited possibilities for planning, documentation, and mgmt. of electrical projects.',
    duration: '6 Weeks',
    eligibility: 'Electrical Design Drafters, Switchgear Panel Engineers',
    certification: 'ISO Certification'
  },

  // ==================== MECHANICAL / AUTOMOBILE ====================
  {
    id: 'autocad-mechanical',
    title: 'AutoCAD Mechanical',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ACAD-ME-1.jpg',
    description: 'A powerful drafting software used to create precise 2D Drawings and 3D Models.',
    duration: '4 to 6 Weeks',
    eligibility: 'B.Tech/BE/Diploma in Mechanical, Production, or Automobile Engineering',
    certification: 'Autodesk Authorized & ISO Certification'
  },
  {
    id: 'solidworks',
    title: 'Solidworks',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Solidworks.jpg',
    description: 'Popular in Product Industries (small and medium scale) due to user-friendly nature and easy working.',
    duration: '6 to 8 Weeks',
    eligibility: 'Mechanical & Automobile Engineers, Product Designers',
    certification: 'Dassault Systèmes/ISO Certification'
  },
  {
    id: 'nx-cad',
    title: 'CNC Programming',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/CNC.jpg',
    description: 'CNC Programming is the manual coding done by G-codes and M-codes for machining.',
    duration: '6 Weeks',
    eligibility: 'Production/Mechanical Engineers, CNC Operators',
    certification: 'ISO Certification'
  },
  {
    id: 'catia',
    title: 'CATIA',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/CATIA.jpg',
    description: 'Used by most of the Automobile and aerospace companies for body design.',
    duration: '8 Weeks',
    eligibility: 'Aeronautical, Automobile & Mechanical Engineers',
    certification: 'Dassault Systèmes/ISO Certification'
  },
  {
    id: 'ansys-wb',
    title: 'ANSYS WB',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ANSYS-WB.jpg',
    description: 'One of the most popular FEA tool which simulates the product under the product’s operating condition',
    duration: '6 Weeks',
    eligibility: 'Mechanical & Civil Engineers, Analysis Experts',
    certification: 'ISO Certification'
  },
  {
    id: 'navisworks-mechanical',
    title: 'Navisworks (Mechanical)',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Navisworks.jpg',
    description: '3D Modelling and review software for AEC professionals.',
    duration: '4 Weeks',
    eligibility: 'Plant Engineers, Mechanical BIM Draftsmen',
    certification: 'Autodesk Certification'
  },
  {
    id: 'fusion-360',
    title: 'Fusion 360',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Fusion-360.jpg',
    description: 'Modeling, manufacturing & analysis in a single software.',
    duration: '6 Weeks',
    eligibility: 'Industrial Product Designers, Fablab Makers',
    certification: 'Autodesk Authorized Certificate'
  },
  {
    id: 'creo',
    title: 'Creo',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/Creo.jpg',
    description: 'Strong worldwide in component designs. Good features of large Assembly, piping & sheet metal design.',
    duration: '6 Weeks',
    eligibility: 'Tool & Die Designers, Mechanical Engineers',
    certification: 'PTC Authorized Certificate'
  },
  {
    id: 'artcam',
    title: 'ArtCAM',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ArtCAM.jpg',
    description: 'CAD-CAM application for Artistic work with an easy interface',
    duration: '4 Weeks',
    eligibility: 'Wood Carvers, CNC Router Programmers, Jewelers',
    certification: 'Autodesk/ISO Certification'
  },
  {
    id: 'solidcam',
    title: 'SolidCAM',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/SolidCAM.jpg',
    description: 'SolidCAM is used in many of small and medium scale manufacturing organizations.',
    duration: '6 Weeks',
    eligibility: 'CNC Millers, Tool Engineers',
    certification: 'SolidCAM/ISO Certification'
  },
  {
    id: 'bim-mechanical',
    title: 'BIM-Mechanical',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/BIM-MEP.jpg',
    description: 'A bunch of software for Mechanical, Electrical, and Plumbing professionals.',
    duration: '8 Weeks',
    eligibility: 'HVAC Designers, Mechanical BIM Drafters',
    certification: 'Professional BIM Certification'
  },
  {
    id: 'revit-mep',
    title: 'Revit MEP',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Revit-MEP.jpg',
    description: 'Works on BIM and used for planning & installing HVAC, electrical & Plumbing in buildings.',
    duration: '6 Weeks',
    eligibility: 'MEP Engineers, HVAC Draftsmen',
    certification: 'Autodesk Authorized Certification'
  },
  {
    id: 'ansys-cfd',
    title: 'ANSYS CFD',
    category: 'Mechanical/Automobile',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/02/ANSYS-CFD.jpg',
    description: 'Used to simulate conditions like fluid flow, turbulence, heat transfer, and for the industrial app.',
    duration: '6 Weeks',
    eligibility: 'Thermal/Aerodynamics Engineers',
    certification: 'ISO Certification'
  },

  // ==================== CS / IT ====================
  {
    id: 'c-programming',
    title: 'C Programming',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/01/C.jpg',
    description: 'C language is a powerful language to develop programming concepts for beginners.',
    duration: '4 Weeks',
    eligibility: 'BCA, MCA, B.Tech CS, Beginners',
    certification: 'ISO Certification'
  },
  {
    id: 'cpp-programming',
    title: 'C++ Programming',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/01/c-1.jpg',
    description: 'C++ is a powerful language to develop programming concepts for beginners.',
    duration: '4 Weeks',
    eligibility: 'CS/IT Students, Coding aspirants',
    certification: 'ISO Certification'
  },
  {
    id: 'csharp',
    title: 'C#',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/01/CSharp.jpg',
    description: 'Powerful and flexible programming language.',
    duration: '6 Weeks',
    eligibility: 'Application Developers, IT Students',
    certification: 'ISO Certification'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Web-Design.jpg',
    description: 'Most popular in Websites Designing (static websites) using CSS, JavaScript, and Bootstrap.',
    duration: '6 to 8 Weeks',
    eligibility: 'Design aspirants, UI Designers',
    certification: 'ISO Certification'
  },
  {
    id: 'php',
    title: 'PHP',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/PHP.jpg',
    description: 'Most popular to develop e-commerce websites and easy to learn.',
    duration: '6 Weeks',
    eligibility: 'Backend Web Developers',
    certification: 'ISO Certification'
  },
  {
    id: 'core-java',
    title: 'Core Java',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/JAVA.jpg',
    description: 'Most popular in Console Application, Desktop Application, and Web Application Development.',
    duration: '8 Weeks',
    eligibility: 'CS/IT Students, Software Engineers',
    certification: 'ISO Certification'
  },
  {
    id: 'core-python-programming',
    title: 'Core Python Programming',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/01/Python.jpg',
    description: 'Simple, clean syntax, object encapsulation, good library support, and optional named parameters.',
    duration: '6 Weeks',
    eligibility: 'Software developers, Data analyst beginners',
    certification: 'ISO Certification'
  },
  {
    id: 'asp-net-mvc',
    title: 'ASP.NET MVC',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/01/ASP.net_.jpg',
    description: 'It allows programmers and developers to build dynamic, rich websites and web applications.',
    duration: '8 Weeks',
    eligibility: 'Web Developers, CS/IT Students',
    certification: 'ISO Certification'
  },
  {
    id: 'tally-erp',
    title: 'Tally ERP',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Tally.jpg',
    description: 'Tally is widely used for accounting purposes mostly by small and medium businesses.',
    duration: '4 Weeks',
    eligibility: 'Commerce Students, Accountants',
    certification: 'Tally Authorized/ISO Certification'
  },
  {
    id: 'data-science-with-python',
    title: 'Data Science with Python',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/DS-with-Python.jpg',
    description: 'Data science with Python performs data analysis, data visualization, web scraping, and etc.',
    duration: '8 to 12 Weeks',
    eligibility: 'Data analysts, Statistics graduates',
    certification: 'ISO Certification'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Cyber-Security.jpg',
    description: 'It is the practice of defending computers and servers, mobile devices, etc from malicious attacks.',
    duration: '8 Weeks',
    eligibility: 'IT Administrators, Security aspirants',
    certification: 'ISO Certification'
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Excel.jpg',
    description: 'MS Excel represents a large amount of data in an efficient and user-friendly manner',
    duration: '4 Weeks',
    eligibility: 'Data Operators, Business analysts',
    certification: 'ISO Certification'
  },
  {
    id: 'mobile-application-development',
    title: 'Mobile Application Development (Android)',
    category: 'CS/IT',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Android.jpg',
    description: 'Android is a comprehensive open-source platform designed for mobile devices.',
    duration: '8 Weeks',
    eligibility: 'App Developers, CS/IT Students',
    certification: 'ISO Certification'
  },

  // ==================== INTERNSHIPS ====================
  {
    id: 'engineering-excellence-program',
    title: 'Engineering Excellence Program (EEP)',
    category: 'Internship',
    image: 'https://caddeskindia.com/wp-content/uploads/2021/03/Internship.jpg',
    description: 'A comprehensive multi-software package covering AutoCAD, SolidWorks/Revit, project work, resume preparation, and job placement drives.',
    duration: '3 to 6 Months',
    eligibility: 'Pre-final and Final year Core Engineering Students',
    certification: 'Professional CAD Diploma & Project Internship Letter'
  }
];

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('course') || '';

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle URL query parameters on load
  useEffect(() => {
    if (initialCategory) {
      setActiveFilter(initialCategory);
    }
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialCategory, initialSearch]);

  const categories = ['All', 'Civil/Architecture', 'Mechanical/Automobile', 'Electrical/Electronics', 'CS/IT', 'Internship'];

  // Filter courses based on selections
  const filteredCourses = coursesData.filter(course => {
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const triggerEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-enquiry'));
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">IT & Software Development Courses</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Courses
          </p>
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section className="section-padding">
        <div className="container">
          
          {/* Controls Bar: Categories & Search */}
          <div className="courses-controls-bar">
            {/* Categories filter */}
            <div className="courses-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`btn ${activeFilter === cat ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '8px 20px', fontSize: '14px' }}
                  id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {cat === 'All' ? 'All Domains' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="courses-search-wrap">
              <input
                type="text"
                className="subpage-input"
                placeholder="Search software (e.g. AutoCAD, SolidWorks)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="course-search-input"
              />
            </div>
          </div>

          {/* Results Grid */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid" id="courses-catalog-grid">
              {filteredCourses.map((course) => (
                <div className="course-card" key={course.id}>
                  {/* Category Image Header */}
                  <div className="course-img-wrap-catalog" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                      id={`course-thumbnail-${course.id}`}
                    />
                  </div>
                  
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-desc">{course.description}</p>
                    <div style={{ marginBottom: '16px', fontSize: '13px' }}>
                      <p style={{ margin: '4px 0' }}><strong>⏱ Duration:</strong> {course.duration}</p>
                      <p style={{ margin: '4px 0' }}><strong>🎓 Eligibility:</strong> {course.eligibility}</p>
                    </div>
                    <div className="course-footer">
                      <span className="course-tag">{course.category}</span>
                      <Link href={`/courses/${course.id}`} className="course-details-link" id={`view-course-${course.id}`}>
                        View Details & Syllabus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '60px 0', color: 'var(--clr-text-muted)', textAlign: 'center' }}>
              <h3>No courses found matching your criteria.</h3>
              <p style={{ marginTop: '10px' }}>Try searching another term or resetting filters.</p>
              <button 
                className="btn btn-primary" 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                style={{ marginTop: '20px' }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Banner */}
          <div style={{ marginTop: '80px', padding: '40px', background: 'var(--clr-bg-alt)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid var(--clr-border)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Need Custom Engineering Training?</h3>
            <p style={{ color: 'var(--clr-text-muted)', maxWidth: '600px', marginBottom: '24px', lineHeight: '1.6' }}>
              We conduct customized IT & coding training sessions for engineering colleges, polytechnics, and corporate design firms across India.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button onClick={triggerEnquiry} className="btn btn-primary" id="custom-training-enquiry-btn">
                Enquire for Batch
              </button>
              <Link href="/about" className="btn btn-dark">
                Our Methodology
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div style={{ padding: '80px', textAlign: 'center' }}>Loading Courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
