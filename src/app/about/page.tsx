import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { value: '3+', label: 'FRANCHISE HUBS' },
    { value: '3L+', label: 'ALUMNI PLACED' },
    { value: '27+', label: 'YEARS HERITAGE' },
    { value: '100%', label: 'PRACTICAL LABS' }
  ];

  const milestones = [
    { year: '1999', icon: '🏢', text: 'Started CAD Training at Mansarovar, Jaipur.' },
    { year: '2003', icon: '📍', text: 'Opened 2nd branch at Lal Kothi, Jaipur & registered Franchise Model.' },
    { year: '2007', icon: '🚀', text: 'First Franchise Center opened outside Rajasthan.' },
    { year: '2011', icon: '🤝', text: 'Staad Pro Bentley tie-up registered.' },
    { year: '2013', icon: '🌍', text: 'Started Franchise model in other states.' },
    { year: '2016', icon: '💻', text: 'Online training portal launched.' },
    { year: '2021', icon: '✈️', text: 'Expanded training operations overseas.' },
    { year: '2023', icon: '📜', text: 'Renewed software vendor partnerships.' },
    { year: '2026', icon: '🎉', text: 'Celebrating 27 Years of technical education.' }
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
              M-Tech Computers is a registered brand of corporate group M-Tech Computers INDIA. Founded in the year 2007, we offer high-quality professional software training courses across Civil, Architecture, Mechanical, Automobile, Electrical, Electronics, and IT domains. M-Tech Computers has become India's leading training center network, registering 3+ franchise centers across the country and training more than 3 Lakh students.
            </p>
          </div>

          {/* Stats Dashboard Grid */}
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-box-p">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Board Section */}
      <section className="section-padding bg-alt" style={{ borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--clr-accent)', fontWeight: 'bold' }}>GOVERNANCE</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#07294d' }}>Our Executive Board</h2>
          </div>

          <div className="about-profiles-grid">
            
            {/* Technical Director */}
            <div className="leader-card-premium">
              <div className="leader-img-container">
                <img 
                  src="https://caddeskindia.com/wp-content/uploads/2021/03/Lalit-sir.png" 
                  alt="Lalit Pr. Technical Director" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginLeft: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#07294d', margin: '0 0 4px 0' }}>Lalit Pr.</h3>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--clr-accent)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Technical Director & Founder
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#4b5563', margin: 0 }}>
                  Lalit Pr. leads the academic board and curriculum development at M-Tech Computers. With 18+ years of engineering design experience, his vision is to democratize high-end design training by providing students with hands-on labs, authorized software certifications, and real-time project exposures.
                </p>
              </div>
            </div>

            {/* Managing Director */}
            <div className="leader-card-premium">
              <div className="leader-img-container">
                <img 
                  src="https://caddeskindia.com/wp-content/uploads/2021/03/Rekha-mam.png" 
                  alt="Ms. Rekha Agarwal" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginLeft: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#07294d', margin: '0 0 4px 0' }}>Ms. Rekha Agarwal</h3>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--clr-accent)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Managing Director
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#4b5563', margin: 0 }}>
                  Ms. Rekha Agarwal guides the strategic expansions and business operations at M-Tech Computers. She oversees the franchise relations, student placement tie-ups, and corporate marketing initiatives that have helped M-Tech Computers expand its footprints into 28 states.
                </p>
              </div>
            </div>

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

      {/* Why Choose Us Cards */}
      <section className="section-padding bg-alt" style={{ borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--clr-accent)', fontWeight: 'bold' }}>ADVANTAGE</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#07294d' }}>Why Choose M-Tech Computers</h2>
          </div>

          <div className="why-choose-grid">
            <div className="about-glow-card" style={{ padding: '35px 30px', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '16px' }}>📚</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#07294d', marginBottom: '12px' }}>Learning with CAD Curriculum</h4>
              <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                Our course manuals and structural tutorials are fully aligned with the official guidelines of software makers, ensuring quality design workflows.
              </p>
            </div>

            <div className="about-glow-card" style={{ padding: '35px 30px', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '16px' }}>⭐</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#07294d', marginBottom: '12px' }}>Celebrating 27+ Years</h4>
              <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                Over 27 years of corporate group heritage in professional engineering training and software counseling.
              </p>
            </div>

            <div className="about-glow-card" style={{ padding: '35px 30px', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '16px' }}>🎓</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#07294d', marginBottom: '12px' }}>3 Lakhs+ Alumni</h4>
              <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                A proud alumni network of 300,000+ students working in top construction companies, MNCs, and manufacturing units.
              </p>
            </div>
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
