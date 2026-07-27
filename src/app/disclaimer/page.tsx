import React from 'react';
import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(https://caddeskindia.com/wp-content/uploads/2021/03/Civil.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="page-title">Disclaimer</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Disclaimer
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ lineHeight: '1.9', fontSize: '15px', color: '#374151' }}>
            <p style={{ marginBottom: '20px' }}>
              All brand names, logo graphics, software titles, product trademarks, and registered corporate names mentioned on this website belong strictly to their respective owners and developers (including Autodesk, Dassault Systèmes, PTC, Chaos Group, Bentley Systems, Microsoft, Oracle, Siemens, Tally, etc.).
            </p>
            <p style={{ marginBottom: '20px' }}>
              M-Tech Computers India operates as an independent technical skill development and professional software training network. The use of these software titles, logos, and marks on our portal is done solely for educational representations, reference purposes, and course classification. It does not imply direct brand endorsements or manufacturer sponsorships unless explicitly stated.
            </p>
            <p style={{ marginBottom: '0px' }}>
              Course durations, schedules, exam schedules, and curriculum details are subject to updates based on evolving industrial standards and software version upgrades.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
