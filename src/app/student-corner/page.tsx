'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock Certificate database
const certificatesDb: Record<string, { name: string; course: string; center: string; date: string; grade: string }> = {
  'CD-12345': {
    name: 'Amit Kumar Sharma',
    course: 'AutoCAD Mechanical',
    center: 'Jaipur (Lalkothi - Head Office)',
    date: 'March 15, 2026',
    grade: 'A+'
  },
  'CD-98765': {
    name: 'Neha Rajesh Patel',
    course: 'Revit Architecture & BIM',
    center: 'Pune (Chinchwad)',
    date: 'April 20, 2026',
    grade: 'A'
  },
  'CD-55443': {
    name: 'Rahul Vishwakarma',
    course: 'AutoCAD Electrical & MATLAB',
    center: 'Delhi (Okhla)',
    date: 'June 05, 2026',
    grade: 'A+'
  }
};

const studentDesigns = [
  { title: '3D Residential Villa Exterior Elevation', student: 'Praveen Yadav', branch: 'Civil/Architecture' },
  { title: 'V6 Engine Cross-Section Assembly', student: 'Aniket Kulkarni', branch: 'Mechanical/Automobile' },
  { title: 'Double Storey Commercial Office Building BIM', student: 'Priya Chaudhary', branch: 'Civil/Architecture' },
  { title: 'Electrical Control Panel Routing & Layout', student: 'Rohan Deshmukh', branch: 'Electrical/Electronics' },
  { title: 'Industrial Reduction Gearbox Parts Assembly', student: 'Sneha Patel', branch: 'Mechanical/Automobile' },
  { title: 'Modern Duplex House Interior Visual Rendering', student: 'Karan Mehra', branch: 'Interior Design' }
];

export default function StudentCornerPage() {
  const [certId, setCertId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    const result = certificatesDb[certId.trim()];
    if (result) {
      setVerificationResult({ success: true, data: result });
    } else {
      setVerificationResult({ success: false });
    }
    setSearched(true);
  };

  const handleReset = () => {
    setCertId('');
    setVerificationResult(null);
    setSearched(false);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Student's Corner</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Student's Corner
          </p>
        </div>
      </section>

      {/* Certificate Verification System */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '750px' }}>
          <div className="section-header">
            <span className="section-eyebrow">Credential Service</span>
            <h2 className="section-title">Certificate Verification</h2>
            <p className="section-subtitle">
              Verify the authenticity of student training credentials issued by M-Tech Computers India. Enter the certificate enrollment registration ID.
            </p>
          </div>

          <div style={{ background: 'var(--clr-bg-alt)', padding: '36px', borderRadius: '16px', border: '1px solid var(--clr-border)', boxShadow: 'var(--shadow-sm)' }}>
            {!searched ? (
              <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} id="verification-form">
                <p style={{ fontSize: '13px', color: 'var(--clr-text-muted)', marginBottom: '8px' }}>
                  💡 Try testing with preloaded certificate registration numbers: <strong>CD-12345</strong>, <strong>CD-98765</strong>, or <strong>CD-55443</strong>.
                </p>
                <div className="subpage-input-group">
                  <label className="subpage-label">Certificate Registration ID *</label>
                  <input 
                    type="text" 
                    className="subpage-input"
                    placeholder="e.g. CD-12345"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    required
                    id="cert-id-input"
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} id="cert-verify-btn">
                  Verify Credentials
                </button>
              </form>
            ) : (
              <div id="verification-result-box" className="fade-in-up">
                {verificationResult.success ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--clr-success)', marginBottom: '20px' }}>
                      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                      <h3 style={{ color: 'var(--clr-success)', fontSize: '20px' }}>VERIFIED RECORD FOUND</h3>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '24px' }}>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--clr-border)' }}>
                          <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--clr-text-muted)' }}>Student Name:</td>
                          <td style={{ padding: '12px 0', fontWeight: 700, color: 'var(--clr-primary)' }}>{verificationResult.data.name}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--clr-border)' }}>
                          <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--clr-text-muted)' }}>Course Completed:</td>
                          <td style={{ padding: '12px 0', fontWeight: 700, color: 'var(--clr-primary)' }}>{verificationResult.data.course}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--clr-border)' }}>
                          <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--clr-text-muted)' }}>Training Center:</td>
                          <td style={{ padding: '12px 0', color: 'var(--clr-text)' }}>{verificationResult.data.center}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--clr-border)' }}>
                          <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--clr-text-muted)' }}>Date of Issue:</td>
                          <td style={{ padding: '12px 0', color: 'var(--clr-text)' }}>{verificationResult.data.date}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--clr-border)' }}>
                          <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--clr-text-muted)' }}>Grade Achieved:</td>
                          <td style={{ padding: '12px 0', fontWeight: 700, color: 'var(--clr-accent)' }}>{verificationResult.data.grade}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ color: 'var(--clr-crimson)', fontSize: '48px', marginBottom: '16px' }}>⚠</div>
                    <h3 style={{ color: 'var(--clr-crimson)', fontSize: '20px', marginBottom: '8px' }}>RECORD NOT FOUND</h3>
                    <p style={{ fontSize: '14px', color: 'var(--clr-text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                      The registration code <strong>"{certId}"</strong> did not match any active student records in the M-Tech Computers database. Please ensure spelling is correct or check with the issuing branch.
                    </p>
                  </div>
                )}
                <button className="btn btn-dark" onClick={handleReset} style={{ width: '100%' }}>
                  Verify Another Certificate
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Student Designs Showcase */}
      <section className="section-padding bg-alt" id="work">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Portfolio</span>
            <h2 className="section-title">Student Project Gallery</h2>
            <p className="section-subtitle">
              Take a look at structural plans, mechanical blueprints, and interior rendering files designed by students during their courses.
            </p>
          </div>

          <div className="gallery-grid" id="student-gallery-grid">
            {studentDesigns.map((design, index) => (
              <div className="gallery-card" key={index}>
                <div className="gallery-placeholder-img">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="gallery-overlay">
                  <h4 className="gallery-title">{design.title}</h4>
                  <p className="gallery-subtitle">By: {design.student} ({design.branch})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
