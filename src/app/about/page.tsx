import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { value: '3K+', label: 'ALUMNI PLACED' },
    { value: '11+', label: 'YEARS HERITAGE' },
    { value: '100%', label: 'PLACEMENT' },
    { value: '100%', label: 'PRACTICAL LABS' }
  ];

  const whyChoosePoints = [
    {
      title: '20+ Years of Experience in CAD/CAM/CNC Training',
      desc: 'Decades of hands-on training expertise across design, manufacturing, and IT domains.'
    },
    {
      title: 'Authorized Training Partner for Siemens and Autodesk',
      desc: 'Learn on industry-standard software with authorized curriculum and certifications.'
    },
    {
      title: 'Industry-Oriented Curriculum',
      desc: 'Designed for manufacturing professionals and engineering students seeking job-ready skills.'
    },
    {
      title: 'Training by Experienced Industry Experts',
      desc: 'Learn from mentors who bring real project experience into every classroom session.'
    },
    {
      title: 'Practical Hands-On Learning',
      desc: 'Practice with real industrial components, live workflows, and workshop-style labs.'
    },
    {
      title: 'Well-Equipped Training Center',
      desc: 'Train on the latest software versions in modern, fully equipped computer labs.'
    },
    {
      title: 'Project-Based Learning',
      desc: 'Build portfolio-ready projects that mirror actual industry design and development tasks.'
    },
    {
      title: 'Placement Assistance for Eligible Candidates',
      desc: 'Get resume support, interview prep, and placement alerts through our career desk.'
    },
    {
      title: 'Flexible Batch Timings',
      desc: 'Convenient schedules for students and working professionals across weekday and weekend batches.'
    },
    {
      title: 'Individual Attention & Doubt-Solving',
      desc: 'Small-batch mentoring with dedicated doubt-clearing sessions for every learner.'
    },
    {
      title: 'Job Readiness & Career Growth',
      desc: 'Training focused on employability, workplace skills, and long-term career progression.'
    },
    {
      title: 'Trusted by Students & Companies',
      desc: 'Preferred by students, professionals, and manufacturing companies across the region.'
    }
  ];

  const milestones = [
    { year: '2015', icon: '🏢', text: 'M-Tech Computers founded with a focus on CAD, CAM & IT training.' },
    { year: '2016', icon: '💻', text: 'Expanded classroom programs and practical lab infrastructure.' },
    { year: '2018', icon: '🤝', text: 'Strengthened software vendor partnerships and industry tie-ups.' },
    { year: '2021', icon: '📍', text: 'Grew regional presence with Kalyan & Dombivli training centers.' },
    { year: '2023', icon: '📜', text: 'Renewed authorized training partnerships and certification programs.' },
    { year: '2026', icon: '🎉', text: 'Celebrating 11+ years of technical education excellence.' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(7, 41, 77, 0.85), rgba(15, 23, 42, 0.95)), url(https://caddeskindia.com/wp-content/uploads/2021/03/Civil.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          padding: '100px 0'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--clr-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Standard of Excellence</span>
          <h1 className="page-title" style={{ fontSize: '48px', fontWeight: '900', color: '#ffffff', textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>About M-Tech Computers</h1>
          <p className="page-breadcrumbs" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link> &gt; About Us
          </p>
        </div>
      </section>

      {/* Slogan & Statistics Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
            <span className="section-eyebrow" style={{ color: 'var(--clr-accent)', fontWeight: 'bold' }}>WHO WE ARE</span>
            <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#07294d', marginBottom: '20px', lineHeight: '1.2' }}>
              We Create <span className="about-text-gradient">Designs for the Future</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', margin: 0 }}>
              M-Tech Computers is a registered brand of corporate group M-Tech Computers INDIA. Founded in the year 2015, we offer high-quality professional software training courses across Civil, Architecture, Mechanical, Automobile, Electrical, Electronics, IT, and Data Analytic Course domains — with 3K+ students trained and placed.
            </p>
          </div>

          {/* Stats Dashboard Grid */}
          <div className="about-stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-box-p">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Vision & Mission High Impact Cards */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-mission-card" style={{ background: 'linear-gradient(135deg, #07294d 0%, #030712 100%)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>👁️‍🗨️</div>
              <h3>Our Vision</h3>
              <p>
                M-Tech Computers is dedicated to becoming a globally recognized skill development network, bridging the gap between academic education and modern core engineering industry demands.
              </p>
            </div>
            <div className="vision-mission-card" style={{ background: 'linear-gradient(135deg, #07294d 0%, #030712 100%)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver accessible, standardized, and authorized software training that empowers students with practical skill sets, making them highly employable core professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — flyer points */}
      <section className="section-padding bg-alt" style={{ borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--clr-accent)', fontWeight: 'bold' }}>ADVANTAGE</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#07294d' }}>Why Choose MTech Computers</h2>
          </div>

          <div className="why-choose-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {whyChoosePoints.map((point, idx) => (
              <div key={idx} className="about-glow-card" style={{ padding: '28px 24px', textAlign: 'left' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#07294d',
                  color: '#f6b500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '13px',
                  marginBottom: '14px'
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#c41230', marginBottom: '10px', lineHeight: 1.35 }}>
                  {point.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-journey-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--clr-accent)', fontWeight: 'bold' }}>HERITAGE</span>
            <h2 style={{ fontSize: '34px', fontWeight: '800', color: '#07294d' }}>Our Journey & Milestones</h2>
          </div>

          <div className="journey-timeline-container">
            <div className="journey-timeline-line"></div>
            
            {milestones.map((item, idx) => (
              <div 
                key={item.year} 
                className={`journey-timeline-item ${idx % 2 === 0 ? 'left-item' : 'right-item'}`}
              >
                <div className="timeline-pulse-dot">
                  {item.icon}
                </div>
                <div className="journey-timeline-card">
                  <div className="journey-timeline-year">{item.year}</div>
                  <p className="journey-timeline-desc">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
