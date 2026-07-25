'use client';

import React from 'react';
import Link from 'next/link';

// Active M-Tech Computers Branches
const branches = [
  {
    name: 'M-Tech Computers (Kalyan W - Head Office)',
    address: 'Chandulal J Joshi Plaza, Opp. Kalyan Platform No. 1, Near Jumboking, Kalyan W. (CAD Desk Kalyan)',
    phone: '9049344991 / 8976178976',
    email: 'info@mtechcomputers.in',
    contactPerson: 'Mahesh Sir'
  },
  {
    name: 'M-Tech Computers (Dombivli East)',
    address: 'Office No. 20, 3rd Floor, Vij Prabha Complex, Patkar Rd, Near Kamath Medical Station Road, Ramnagar, Dombivli East',
    phone: '7770048032',
    email: 'info@mtechcomputers.in',
    contactPerson: 'Admissions Desk'
  }
];

export default function LocatePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Locate Center</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Locate Center
          </p>
        </div>
      </section>

      {/* Center Listing */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <span className="section-eyebrow">Our Branches</span>
            <h2 className="section-title">Find a M-Tech Computers Near You</h2>
            <p className="section-subtitle">
              Visit our state-of-the-art training centers at Kalyan and Dombivli for high-quality CAD, CAM, and IT programming courses.
            </p>
          </div>

          {/* Centers Grid */}
          <div 
            className="center-grid" 
            id="centers-display-grid" 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '30px', 
              maxWidth: '900px', 
              margin: '0 auto' 
            }}
          >
            {branches.map((branch, idx) => (
              <div 
                className="center-card" 
                key={idx}
                style={{
                  background: 'var(--clr-bg)',
                  border: '1px solid var(--clr-border)',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 className="center-name" style={{ fontSize: '20px', color: 'var(--clr-primary)', marginBottom: '16px', fontWeight: '700' }}>
                  {branch.name}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--clr-text-muted)', marginBottom: '20px', minHeight: '60px' }}>
                  📍 {branch.address}
                </p>
                <div style={{ borderTop: '1px solid var(--clr-border)', paddingTop: '16px', fontSize: '14px' }}>
                  <p style={{ margin: '6px 0', color: 'var(--clr-text)' }}>
                    <strong>📞 Phone:</strong>{' '}
                    {branch.phone.split('/').map((p, i) => (
                      <span key={i}>
                        {i > 0 && ' / '}
                        <a href={`tel:${p.trim().replace(/[^0-9]/g, '')}`} style={{ color: 'var(--clr-secondary)', fontWeight: '600' }}>
                          {p.trim()}
                        </a>
                      </span>
                    ))}
                  </p>
                  <p style={{ margin: '6px 0', color: 'var(--clr-text)' }}>
                    <strong>✉️ Email:</strong>{' '}
                    <a href={`mailto:${branch.email}`} style={{ color: 'var(--clr-secondary)' }}>
                      {branch.email}
                    </a>
                  </p>
                  <p style={{ margin: '6px 0', color: 'var(--clr-text)' }}>
                    <strong>👤 Contact:</strong> {branch.contactPerson}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom call to action */}
          <div style={{ marginTop: '70px', textAlign: 'center', background: 'var(--clr-bg-alt)', padding: '40px', borderRadius: '12px', border: '1px solid var(--clr-border)', maxWidth: '900px', margin: '60px auto 0 auto' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--clr-primary)' }}>Can't visit our center?</h3>
            <p style={{ color: 'var(--clr-text-muted)', marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px auto', lineHeight: '1.5' }}>
              We offer live, instructor-led online training courses so you can learn from the comfort of your home.
            </p>
            <Link href="/courses" className="btn btn-primary" id="locate-online-training-btn">
              Explore Online Training
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
