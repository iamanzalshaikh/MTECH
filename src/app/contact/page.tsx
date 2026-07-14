'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !subject || !message) {
      setError('Please fill in all fields.');
      return;
    }
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    const contactMsg = { name, email, phone, subject, message, date: new Date().toISOString() };
    console.log('Submitted Contact Message:', contactMsg);
    setIsSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Contact Us
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="section-padding">
        <div className="container inner-page-grid">
          
          {/* Left Column: Form */}
          <div>
            <span className="section-eyebrow">Queries</span>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Send Us a Message</h2>
            <p style={{ fontSize: '15px', color: 'var(--clr-text-muted)', marginBottom: '30px', lineHeight: '1.6' }}>
              Have questions about course fees, batch schedules, syllabus catalogs, or need customized corporate sessions? Fill out the form below and we will get back to you shortly.
            </p>

            <div style={{ background: 'var(--clr-bg-alt)', padding: '36px', borderRadius: '16px', border: '1px solid var(--clr-border)', boxShadow: 'var(--shadow-sm)' }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="subpage-form-grid" id="contact-form">
                  {error && <p style={{ color: 'red', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>{error}</p>}

                  <div className="subpage-input-group">
                    <label className="subpage-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="subpage-input"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="subpage-input-group">
                      <label className="subpage-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="subpage-input"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="subpage-input-group">
                      <label className="subpage-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="subpage-input"
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        required
                      />
                    </div>
                  </div>

                  <div className="subpage-input-group">
                    <label className="subpage-label">Subject *</label>
                    <input 
                      type="text" 
                      className="subpage-input"
                      placeholder="e.g. Fees Query, Corporate Batch"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="subpage-input-group">
                    <label className="subpage-label">Your Message *</label>
                    <textarea 
                      className="subpage-input"
                      style={{ minHeight: '120px', resize: 'vertical' }}
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} id="contact-submit-btn">
                    Send Message
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--clr-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px auto' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '22px', color: 'var(--clr-success)', marginBottom: '12px' }}>Message Received!</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--clr-text-muted)', marginBottom: '24px' }}>
                    Thank you, <strong>{name}</strong>. Your query has been logged. Our office representative will reach out to you at <strong>{email}</strong> or call you shortly.
                  </p>
                  <button className="btn btn-dark" onClick={handleReset} style={{ padding: '8px 16px', fontSize: '13px' }}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div>
            <div className="sidebar-card">
              <h3 className="sidebar-title">Head Office</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--clr-text-muted)', marginBottom: '12px' }}>
                📍 162, Batliwala Agiyari Compound, Tardeo Road, Mumbai, India - 400034.
              </p>
              <p style={{ fontSize: '14px', fontWeight: 600 }}>📞 (456) 789 10 12</p>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Registered Address</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--clr-text-muted)', marginBottom: '12px' }}>
                📍 Jyoti Studio Compound, Kennedy Bridge, Mumbai - 400007.
              </p>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Support Hours</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--clr-text-muted)' }}>
                <li>📅 Monday - Saturday: 8:00 AM - 8:00 PM</li>
                <li>📅 Sunday: 10:00 AM - 4:00 PM</li>
                <li style={{ borderTop: '1px solid var(--clr-border)', paddingTop: '8px', marginTop: '4px', fontWeight: 600, color: 'var(--clr-primary)' }}>
                  ✉️ admin@jkfindia.com
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
